import model from "./m0-v6.glb";

import diff_base from "./diff_base.png";

import diff_1 from "./diff_01.png";
import diff_back_0 from "./diff_front_1.png";

import nor_1 from "./nor_01.png";
import spec_1 from "./spec_1.png";

import mtc_light from "./mtc_light2.png";

import nx from "./cbm/nx.webp";
import ny from "./cbm/ny.webp";
import nz from "./cbm/nz.webp";
import px from "./cbm/px.webp";
import py from "./cbm/py.webp";
import pz from "./cbm/pz.webp";

const cbmarr = [px, nx, py, ny, pz, nz];

//

import model2 from "./paper/my_anim_mesh1.glb";
import normal2 from "./paper/my_anim_normal.png";
import position2 from "./paper/my_anim_position.png";
import tangent2 from "./paper/my_anim_tangent.png";

export const ASSETS = {
  model,
  diff_base,
  diff_1,
  diff_back_0,
  nor_1,
  spec_1,
  mtc_light,
  cbmarr,

  // test
  model2,
  normal2,
  position2,
  tangent2,
  //   img: null,
};
