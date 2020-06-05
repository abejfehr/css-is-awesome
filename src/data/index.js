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

export const chapters = [
  {
    title: "Box Model",
    funnyTitle: "It's just boxes in boxes",
    funnySubtitle: "how hard could it really be?",
    description: "An introduction to the box model.",
    levels: [...boxModel],
  },
  {
    title: "Flexbox",
    funnyTitle: "Weird Flex but OK",
    funnySubtitle: "Does anyone <i>really</i> know flexbox?",
    description: "An exploration of flexbox layouts.",
    levels: [
      direction1,
      direction2,
      direction3,
      alignment1,
      alignment2,
      alignment3,
    ],
  },
  {
    title: "Grid",
    funnyTitle: "Off the grid",
    funnySubtitle: "Except actually inside the grid",
    description: "An exploration of grid layouts.",
    levels: [],
  },
  {
    title: "Legacy Layouts",
    funnyTitle: "Stylesheets of a bygone era",
    funnySubtitle: "CSS was different before flexbox and grid",
    description: "A look at legacy layout techniques.",
    levels: [],
  },
  {
    title: "Advanced Techniques",
    funnyTitle: "CSS Wizardry",
    funnySubtitle: "In case you thought you knew CSS",
    description: "A few advanced techniques.",
    levels: [],
  },
];
