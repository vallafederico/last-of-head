import { CubicBezierCurve3, Vector3, TubeGeometry, Mesh, Group } from "three";

import Material from "./mat/weeds/index.js";

export class Weeds extends Group {
  constructor() {
    super();

    // this.scaleFactor = 0.0;
    // this.scale.set(0, 0, 0);
    this.create();
  }

  create() {
    const curve = new CubicBezierCurve3(
      new Vector3(0, 0, 0),
      new Vector3(0.5, 0.5, 0),
      new Vector3(1, 1, 0),
      new Vector3(3, 1, 0)
    );

    const gm = new TubeGeometry(curve, 50, 0.02, 18, false);
    this.mesh = new Mesh(gm, new Material());

    this.add(this.mesh);
  }

  getPoints() {}

  render(t) {
    // this.scale.set(this.scaleFactor, this.scaleFactor, this.scaleFactor);
    // this.scaleFactor += 0.01;
  }

  resize() {}
}
