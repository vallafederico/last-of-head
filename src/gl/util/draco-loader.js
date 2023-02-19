import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const decoderPath = "https://www.gstatic.com/draco/versioned/decoders/1.4.3/";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(decoderPath); // use a full url path
dracoLoader.preload();

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

export default (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      // console.log(gltf);

      // gltf.scene.traverse((o) => {
      //   console.log(o, o.name);
      // });

      // console.log(gltf.scene.children[0]);
      const result = { model: gltf.scene.children[0] };

      resolve(result);
    });
  });
};
