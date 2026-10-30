/**
 * A minimal WebGL2 renderer for one Undoing scene: one full-screen triangle, a few textures, one program.
 * It draws only when asked (render()), never on a loop of its own. dispose() releases every GPU object
 * and the context itself, so nothing outlives the page.
 */
import { VERTEX, FRAGMENT } from './shaders';

export interface Plates {
  harm: HTMLImageElement;
  drained: HTMLImageElement;
  after?: HTMLImageElement;
  depth?: HTMLImageElement;
  cctv?: HTMLImageElement;
}

export interface Uniforms {
  pos: [number, number];
  origin: [number, number];
  p: number;
  ret: number;
  committed: number;
  cam: [number, number, number];
  par: [number, number];
  pull: number;
  lens: number;
  time: number;
}

/** Counters the tests read to check for leaks and idle frames (window.__undoingGL). */
export const stats = { frames: 0, textures: 0, contexts: 0 };

const UNITS = ['uHarm', 'uDrained', 'uAfter', 'uDepth', 'uCctv'] as const;

export class Renderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private buffer: WebGLBuffer;
  private vao: WebGLVertexArrayObject;
  private textures: WebGLTexture[] = [];
  private loc = new Map<string, WebGLUniformLocation | null>();
  private img: [number, number];
  private cctvImg: [number, number] = [1, 1];
  private flags: { after: number; depth: number };
  disposed = false;

  constructor(readonly canvas: HTMLCanvasElement, plates: Plates) {
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'default' });
    if (!gl) throw new Error('webgl2 unavailable');
    this.gl = gl;
    stats.contexts += 1;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? 'shader');
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? 'link');
    this.program = program;
    gl.useProgram(program);

    // One triangle that covers the whole frame.
    this.vao = gl.createVertexArray()!;
    gl.bindVertexArray(this.vao);
    this.buffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);

    const max = gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
    const upload = (unit: number, image: HTMLImageElement | undefined) => {
      const t = gl.createTexture()!;
      this.textures.push(t);
      stats.textures += 1;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, unit === 0 || unit === 2 ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (image && image.naturalWidth > 0 && image.naturalWidth <= max && image.naturalHeight <= max) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        // Harm and aftermath carry mip levels: the Pull blurs from them, and the return takes its colour from them.
        if (unit === 0 || unit === 2) gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      }
      gl.uniform1i(gl.getUniformLocation(program, UNITS[unit]), unit);
    };
    upload(0, plates.harm);
    upload(1, plates.drained);
    upload(2, plates.after);
    upload(3, plates.depth);
    upload(4, plates.cctv);
    this.img = [plates.harm.naturalWidth, plates.harm.naturalHeight];
    if (plates.cctv) this.cctvImg = [plates.cctv.naturalWidth, plates.cctv.naturalHeight];
    this.flags = { after: plates.after ? 1 : 0, depth: plates.depth ? 1 : 0 };
  }

  private u(name: string) {
    if (!this.loc.has(name)) this.loc.set(name, this.gl.getUniformLocation(this.program, name));
    return this.loc.get(name)!;
  }

  /** Matches the drawing buffer to the canvas's size on screen, at the given pixel ratio. */
  resize(dpr: number) {
    const w = Math.max(1, Math.round(this.canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(this.canvas.clientHeight * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
  }

  render(s: Uniforms) {
    const gl = this.gl;
    if (this.disposed || gl.isContextLost()) return;
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.u('uRes'), this.canvas.width, this.canvas.height);
    gl.uniform2f(this.u('uImg'), this.img[0], this.img[1]);
    gl.uniform2f(this.u('uCctvImg'), this.cctvImg[0], this.cctvImg[1]);
    gl.uniform2f(this.u('uPos'), s.pos[0], s.pos[1]);
    gl.uniform2f(this.u('uOrigin'), s.origin[0], s.origin[1]);
    gl.uniform1f(this.u('uP'), s.p);
    gl.uniform1f(this.u('uRet'), s.ret);
    gl.uniform1f(this.u('uCommitted'), s.committed);
    gl.uniform1f(this.u('uHasAfter'), this.flags.after);
    gl.uniform1f(this.u('uHasDepth'), this.flags.depth);
    gl.uniform3f(this.u('uCam'), s.cam[0], s.cam[1], s.cam[2]);
    gl.uniform2f(this.u('uPar'), s.par[0], s.par[1]);
    gl.uniform1f(this.u('uPull'), s.pull);
    gl.uniform1f(this.u('uLens'), s.lens);
    gl.uniform1f(this.u('uTime'), s.time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    stats.frames += 1;
  }

  /** Deletes every GPU object, then asks the browser to drop the context at once. */
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    const gl = this.gl;
    if (!gl.isContextLost()) {
      this.textures.forEach((t) => gl.deleteTexture(t));
      gl.deleteBuffer(this.buffer);
      gl.deleteVertexArray(this.vao);
      gl.deleteProgram(this.program);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    stats.textures -= this.textures.length;
    stats.contexts -= 1;
    this.textures = [];
  }
}
