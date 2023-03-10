// import { Vector2 } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { BokehPass } from "three/addons/postprocessing/BokehPass.js";

import { Shader } from "./mat/post/base";

export class Post extends EffectComposer {
  constructor({ renderer, scene, camera }) {
    super(renderer);
    this.isOn = true;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    // this.setPixelRatio(window.devicePixelRatio);

    this.renderPass = new RenderPass(scene, camera);
    this.addPass(this.renderPass);

    this.createPasses();
  }

  createPasses() {
    this.bokehPass = new BokehPass(this.scene, this.camera, {
      focus: 3.2, // 3.2 |
      aperture: 0.005,
      maxblur: 0.005,
    });
    this.bokehPass.needsSwap = true;

    this.addPass(this.bokehPass);

    this.addPass(new Shader());
  }

  renderPasses(t) {
    this.bokehPass.focus = 3.2 - window.gui.val.anim.timeline * 0.2;
  }
}

/*
if (this.post?.isOn) {
    this.post.renderPasses(this.time);
    this.post.render();
  } else {
    this.renderer.render(this.scene, this.camera);
  }
*/
