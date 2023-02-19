import { Scene } from "three";
import { Face } from "./face.js";

export default class extends Scene {
  constructor(data = {}) {
    super();
    this.data = data;

    this.create();
  }

  create() {
    this.face = new Face();
    this.add(this.face);
  }

  render(t) {
    if (this.face) this.face.render(t);
  }

  resize() {}
}
