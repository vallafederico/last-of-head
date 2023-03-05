import { Group } from "three";
import Material from "./mat/raw-vat/index.js";

export class Vat extends Group {
  constructor() {
    super();

    this.rotation.y = 1.5 / 2;

    this.mesh = window.assets.model2.model;
    this.mesh.material = new Material();
    this.add(this.mesh);

    console.log(this.mesh);
  }

  render(t) {
    const { ex, ey } = window.app.gl.mouse;
    this.mesh.material.progress = ex;
  }
}
