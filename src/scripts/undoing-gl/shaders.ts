/**
 * The Undoing in one fragment shader (DESIGN.md §7.3). It draws the same three plates as the CSS layers
 * (harm, drained, after) with the same crop, so at rest the canvas matches the <img> layers exactly.
 * What it adds is what CSS cannot do well:
 *  - the drain's edge is broken by paper grain, never a line or a ring;
 *  - the Pull: the frame's periphery loses detail and colour while the hold begins;
 *  - the return brings colour back onto the drained plate's own geometry (its light, the aftermath's colour, blurred),
 *    then cuts to the aftermath, which is not pixel-aligned (concept/reference README: a cut, never a cross-fade);
 *  - the field spreads through depth, so it climbs walls and runs out across the water;
 *  - a slow camera over the plate, with depth parallax;
 *  - camera 3's lens, for the cut to the Office's footage.
 * Nothing here glows, rings or emits particles (DESIGN.md §11).
 */
export const VERTEX = /* glsl */ `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export const FRAGMENT = /* glsl */ `#version 300 es
precision highp float;
out vec4 fragColor;

uniform sampler2D uHarm, uDrained, uAfter, uDepth, uCctv;
uniform vec2 uRes;        // canvas size in pixels
uniform vec2 uImg;        // plate size in pixels (all three plates share it)
uniform vec2 uPos;        // CSS object-position, as fractions
uniform vec2 uCctvImg;
uniform vec2 uOrigin;     // where the drain starts, as a fraction of the frame (y down)
uniform float uP;         // drain, 0..1
uniform float uRet;       // colour return, 0..1 (eased)
uniform float uCommitted; // 1 once the yes has been given
uniform float uHasAfter, uHasDepth;
uniform vec3 uCam;        // camera: x, y offset as fractions of the frame, and zoom (1 = the CSS framing)
uniform vec2 uPar;        // depth parallax displacement
uniform float uPull;      // 0..1
uniform float uLens;      // 0 or 1: camera 3
uniform float uTime;

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
// Paper: a fine tooth with slower fibres through it. Fixed to the frame, so the edge never shimmers.
float paper(vec2 px) { return 0.55 * vnoise(px / 2.5) + 0.3 * vnoise(px / 11.0) + 0.15 * vnoise(px / 47.0); }

// object-fit: cover with object-position, the same crop as the <img> layers.
vec2 cover(vec2 v, vec2 img, vec2 pos) {
  float va = uRes.x / uRes.y, ia = img.x / img.y;
  if (ia > va) { float f = va / ia; return vec2(pos.x * (1.0 - f) + v.x * f, v.y); }
  float f = ia / va; return vec2(v.x, pos.y * (1.0 - f) + v.y * f);
}
// In screen space, so CSS can frame the <img> layers identically: scale(zoom) translate(-x, -y).
vec2 camera(vec2 v) { return (v - 0.5) / uCam.z + 0.5 + uCam.xy; }
// Depth, near = 1. Without a depth map, a ground plane: sky and city far, the quay near.
float depth(vec2 uv) { return uHasDepth > 0.5 ? texture(uDepth, uv).r : clamp((uv.y - 0.3) / 0.7, 0.0, 1.0); }
vec2 place(vec2 v) {
  vec2 uv = cover(camera(v), uImg, uPos);
  return uv - uPar * (depth(uv) - 0.4);
}
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

vec3 lens(vec2 v) {
  vec2 c = v - 0.5;
  c *= 1.0 + 0.22 * dot(c, c);
  vec2 uv = c + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return vec3(0.0);
  vec3 col = texture(uCctv, cover(uv, uCctvImg, vec2(0.5))).rgb;
  col = mix(vec3(luma(col)), col, 0.7);
  col += (hash(gl_FragCoord.xy + floor(uTime * 24.0)) - 0.5) * 0.07;
  return col * (1.0 - 0.55 * dot(c, c) * 2.0);
}

void main() {
  vec2 v = vec2(gl_FragCoord.x / uRes.x, 1.0 - gl_FragCoord.y / uRes.y);
  if (uLens > 0.5) { fragColor = vec4(lens(v), 1.0); return; }

  vec2 uv = place(v);
  float aspect = uRes.x / uRes.y;

  // The Pull: before the yes, the edges of the frame go soft and lose some colour.
  float edge = smoothstep(0.32, 0.9, length((v - 0.5) * vec2(aspect, 1.0)) / (0.5 * max(aspect, 1.0)));
  float pull = uPull * edge;
  vec3 harm = texture(uHarm, uv).rgb;
  if (pull > 0.001) {
    // A true blur from the plate's smaller mip levels: soft, with no doubled edges.
    vec3 soft = texture(uHarm, uv, 3.0).rgb;
    harm = mix(harm, soft, pull);
    harm = mix(harm, vec3(luma(harm)), 0.3 * pull);
  }
  vec3 drained = texture(uDrained, uv).rgb;
  vec3 after = texture(uAfter, uv).rgb;
  // Colour returning to the drained moment: the drained plate's light with the aftermath's colour, taken from a
  // heavily blurred level so the aftermath's different composition (and the harm's debris) never shows through.
  vec3 tint = texture(uAfter, uv, 6.0).rgb;
  vec3 returned = clamp(vec3(luma(drained)) + (tint - vec3(luma(tint))), 0.0, 1.0);
  // Lua is the only thing in colour on the drained plate: where it has colour, keep it untouched (canon: she keeps hers).
  float sat = max(drained.r, max(drained.g, drained.b)) - min(drained.r, min(drained.g, drained.b));
  returned = mix(returned, drained, smoothstep(0.05, 0.14, sat));

  // The field: screen distance from the hand, plus depth difference, so it travels along surfaces.
  float dOrigin = depth(place(uOrigin));
  vec2 q = (v - uOrigin) * vec2(aspect, 1.0);
  float dist = length(q) + abs(depth(uv) - dOrigin) * 0.35;
  float far = 0.0;
  for (int i = 0; i < 4; i++) {
    vec2 c = vec2(float(i & 1), float(i >> 1));
    far = max(far, length((c - uOrigin) * vec2(aspect, 1.0)));
  }
  float maxD = (far + 0.35) * 1.12;
  float grain = paper(gl_FragCoord.xy);
  float d = dist + (grain - 0.5) * 0.14;

  float r = uP * maxD;
  float inside = (1.0 - smoothstep(r - 0.05, r, d)) * step(0.0001, uP);
  inside = max(inside, uCommitted);

  // The return: colour comes back from the edges inward; the last place is under the hand.
  float r2 = (1.0 - uRet) * maxD;
  float back = smoothstep(r2 - 0.05, r2, d) * step(0.0001, uRet) * uHasAfter;

  vec3 col = mix(mix(harm, drained, inside), returned, back);
  // Once the colour is back, cut to the aftermath.
  if (uRet >= 0.999 && uHasAfter > 0.5) col = after;
  fragColor = vec4(col, 1.0);
}
`;
