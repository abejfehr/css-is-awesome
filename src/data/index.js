import boxModel from "./box-model";
import { direction1 } from "./direction/level-1";
import { direction2 } from "./direction/level-2";
import { direction3 } from "./direction/level-3";
import { alignment1 } from "./alignment/level-1";
import { alignment2 } from "./alignment/level-2";
import { alignment3 } from "./alignment/level-3";

export const levels = [
  ...boxModel,
  direction1,
  direction2,
  direction3,
  alignment1,
  alignment2,
  alignment3,
];
