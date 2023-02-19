import { Group } from "three";
import Material from "./mat/basic";

export class Face extends Group {
  constructor() {
    super();

    /// adjust in blender pls !!!
    const scale = 2.9;
    this.rotation.x = 0.4;
    this.scale.set(scale, scale, scale);

    this.mesh = window.assets.model.model;
    this.material = new Material();
    this.traverse();

    this.add(this.mesh);
  }

  traverse() {
    this.bones = [];

    this.mesh.traverse((child) => {
      if (child.isMesh) {
        child.material = this.material;
        // console.log(child);
      } else {
        this.bones.push(child);
        // console.log("not mesh", child, child.name);
      }
    });
  }

  render(t) {
    this.material.time = t;

    const { ex, ey } = window.app.gl.mouse;

    // this.rotation.y = -ex * 0.01;
    // this.rotation.x = 0.4 - ey * 0.01;

    if (this.bones) {
      // console.log(window.app.gl.mouse.x);
      // bones: 2 = neck — 6-7 eyes
      const fac = 0.08;
      const breath = Math.sin(t * 0.6) * 0.01;
      this.bones[2].rotation.y = 1.1542559370969648e-14 + ex * fac;
      this.bones[2].rotation.z = 1.5590562536840125e-8 + ex * fac;
      this.bones[2].rotation.x = 0.24295591891983026 + ey * fac + breath;
      this.bones[4].position.z =
        -0.019667401909828186 - (ey + 1) * 0.01 - breath * 0.2;
    }
  }
}
