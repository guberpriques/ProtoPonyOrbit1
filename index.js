import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pony1 from "./Pony1/Pony1.js";
import Pony2 from "./Pony2/Pony2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pony1: new Pony1({
    x: -42.09305230370784,
    y: -155.71819296494832,
    direction: -80,
    costumeNumber: 1,
    size: 500,
    visible: true,
    layerOrder: 2
  }),
  Pony2: new Pony2({
    x: -14.709503694988442,
    y: -160.41417642900655,
    direction: -86,
    costumeNumber: 3,
    size: 500,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
