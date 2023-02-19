import { Scene } from "three";
import { Face } from "./face.js";
import { Weeds } from "./weeds.js";

export default class extends Scene {
  constructor(data = {}) {
    super();
    this.data = data;

    this.create();
  }

  create() {
    this.face = new Face();
    this.add(this.face);

    // this.weeds = new Weeds();
    // this.add(this.weeds);
  }

  render(t) {
    if (this.face) this.face.render(t);
    if (this.weeds) this.weeds.render(t);
  }

  resize() {}
}
