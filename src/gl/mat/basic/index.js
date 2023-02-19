import { ShaderMaterial, DoubleSide } from "three";

import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";

export default class extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      u_mouse: {
        value: [0, 0],
      },
      // textures
      // u_diff_base: { value: window.assets.diff_base || null },
      u_diff1: { value: window.assets.diff_1 || null },
      u_diff_back: { value: window.assets.diff_back_0 || null },
      u_nor: { value: window.assets.nor_1 || null },
      u_spec: { value: window.assets.spec_1 || null },
      u_cbm: { value: window.assets.cbmarr || null },
      // mtcs
      u_mtc_light: { value: window.assets.mtc_light || null },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;

    this.uniforms.u_mouse.value = [
      window.app.gl.mouse.x,
      window.app.gl.mouse.y,
    ];
  }
}
