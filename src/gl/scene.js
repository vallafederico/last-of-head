import { Scene } from "three";
import { Face } from "./face.js";
// import { Vat } from "./vat.js";

export default class extends Scene {
  constructor(data = {}) {
    super();
    this.data = data;

    this.create();
  }

  create() {
    this.face = new Face();
    this.add(this.face);

    // this.vat = new Vat();
    // this.add(this.vat);
  }

  render(t) {
    if (this.face) this.face.render(t);
    if (this.vat) this.vat.render(t);

    // console.log(window.gui.val.anim.timeline);
  }

  resize() {}
}
