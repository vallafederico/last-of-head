import LilGui from "lil-gui";
import Tween from "gsap";

export class Gui extends LilGui {
  constructor() {
    super();
    this.initControllers();

    this.initWindowGui();

    window.gui = this;
    // this.close();
  }

  initControllers() {
    this.val = {
      anim: {
        timeline: 0,
        to_1: () => {
          // this.val.anim.timeline = 0;
          Tween.to(this.val.anim, {
            timeline: 1,
            duration: 1.2,
            ease: "expo.out",
          });
        },
        to_0: () => {
          // this.val.anim.timeline = 1;
          Tween.to(this.val.anim, {
            timeline: 0,
            duration: 1.2,
            ease: "expo.out",
          });
        },
      },
    };
  }

  initWindowGui() {
    for (const key in this.val) {
      const fold = this.addFolder(key);
      // fold.close();

      for (const key2 in this.val[key]) {
        fold.add(this.val[key], key2, 0, 1, 0.001);
      }
    }
  }
}
