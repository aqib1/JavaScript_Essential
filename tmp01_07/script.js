import Backpack from "./Backpack.js";
import presets from "./Preset.js";
import State from "./State.js";

const backpack = new Backpack(
  "Everyday backpack",
  30,
  "black",
  15,
  11,
  12,
  true,
  "December 5, 2018 15:00:00 PST"
);

console.log("Backpack object : ", backpack);
backpack.setColor("white");
backpack.setPocketNum(113);
console.log("Backpack color : ", backpack.color);
console.log("Presets io : ", presets.io[0]);

const state = new State(1, "progress", "In progress", "id:1,name:aqib");
state.setId(11);
console.log("state object :", state);

// global objects
console.log(backpack.dateAcquired);
console.log("Days passed: ", backpack.backpackAge());
