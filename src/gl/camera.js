import { PerspectiveCamera } from "three";

export default class extends PerspectiveCamera {
  constructor(
    fov = 35,
    aspect = window.innerWidth / window.innerHeight,
    near = 0.1,
    far = 10
  ) {
    super(fov, aspect, near, far);
  }
}
