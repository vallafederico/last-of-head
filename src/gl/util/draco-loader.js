import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const loader = new GLTFLoader();

// const decoderPath = "https://www.gstatic.com/draco/versioned/decoders/1.4.3/";
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath(decoderPath); // use a full url path
// dracoLoader.preload();
// loader.setDRACOLoader(dracoLoader);

export default (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      // console.log(gltf);

      // let weeds;
      // gltf.scene.traverse((o) => {
      //   // console.log(o, o.name);
      //   if (o.name === "weeds") weeds = o;
      // });

      // console.log(gltf.scene);

      resolve({ model: gltf.scene.children[0] });
    });
  });
};
