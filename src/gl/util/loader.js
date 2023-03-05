import { ASSETS } from "../../assets/";
import loadTexture from "./texture-loader";
import loadDraco from "./draco-loader";
import loadCube from "./cube-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    console.time("load");
    const [
      model,
      diff_1,
      diff_back_0,
      nor_1,
      spec_1,
      mtc_light,
      cbmarr,
      model2,
      normal2,
      position2,
      tangent2,
    ] = await Promise.all([
      loadDraco(ASSETS.model),
      // loadTexture(ASSETS.diff_base),
      loadTexture(ASSETS.diff_1),
      loadTexture(ASSETS.diff_back_0),
      loadTexture(ASSETS.nor_1),
      loadTexture(ASSETS.spec_1),
      loadTexture(ASSETS.mtc_light),
      loadCube(ASSETS.cbmarr),
      // VAT test
      loadDraco(ASSETS.model2),
      loadTexture(ASSETS.normal2),
      loadTexture(ASSETS.position2),
      loadTexture(ASSETS.tangent2),
    ]);

    // model2;
    // normal2;
    // position2;
    // tangent2;

    // diff_base.flipY = false;
    diff_1.flipY = false;
    diff_back_0.flipY = false;
    nor_1.flipY = false;
    spec_1.flipY = false;
    position2.flipY = false;
    // mtc_light.flipY = false;

    console.timeEnd("load");

    window.assets = {
      model,
      // diff_base,
      diff_1,
      diff_back_0,
      nor_1,
      spec_1,
      mtc_light,
      cbmarr,
      model2,
      normal2,
      position2,
      tangent2,
    };
  }
}
