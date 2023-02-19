import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Tween from "gsap";

import Loader from "./util/loader.js";
import Viewport from "./viewport.js";
import Scene from "./scene.js";
import Camera from "./camera.js";

import { Post } from "./post.js";

export default class Gl {
  constructor(sel) {
    this.vp = new Viewport();
    this.renderer = new WebGLRenderer({
      antialias: true,
    });

    this.renderer.setPixelRatio(this.vp.pixelRatio);
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.renderer.setClearColor(0x000000, 1);

    // this.renderer.outputEncoding = sRGBEncoding;
    // this.renderer.toneMapping = ACESFilmicToneMapping;

    this.vp.container.appendChild(this.renderer.domElement);

    this.camera = this.vp.camera = new Camera();

    this.camera.position.set(0, 0, 4);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.paused = false;
    this.time = 0;

    this.init();
  }

  async init() {
    this.initEvents();

    this.loader = new Loader();
    this.assets = await this.loader.load();

    this.create();
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(this.vp.container);

    // mouse
    this.mouse = { x: 0, y: 0, ex: 0, ey: 0 };
    document.addEventListener("mousemove", (e) => {
      this.mouse.x = (e.clientX / this.vp.w) * 2 - 1;
      this.mouse.y = ((e.clientY / this.vp.h) * 2 - 1) * -1;
      Tween.to(this.mouse, {
        ex: this.mouse.x,
        ey: this.mouse.y,
        duration: 0.5,
        ease: "slow",
      });
    });
  }

  create() {
    this.scene = new Scene();

    this.post = new Post({
      renderer: this.renderer,
      scene: this.scene,
      camera: this.camera,
    });
  }

  render() {
    if (this.paused) return;
    this.time += 0.05;

    this.controls?.update();

    if (this.scene && this.scene.render) this.scene.render(this.time);

    requestAnimationFrame(this.render.bind(this));

    if (this.post?.isOn) {
      this.post.renderPasses(this.time);
      this.post.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    // this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.vp.resize();
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();

    if (this.scene) this.scene.resize();
  }

  /* Utils
   */

  get viewSize() {
    const fovInRad = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRad / 2) * 2
    );
    return { w: height * (this.vp.w / this.vp.h), h: height };
  }
}
