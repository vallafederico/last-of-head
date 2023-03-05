import { RawShaderMaterial, DoubleSide } from "three";

import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";

export default class extends RawShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      u_t1: { value: options?.u_t1 || null },
      u_normal2: { value: window.assets.normal2 },
      u_position2: { value: window.assets.position2 },
      u_tangent2: { value: window.assets.tangent2 },
      u_progress: { value: 0 },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set progress(val) {
    this.uniforms.u_progress.value = val;
  }
}
