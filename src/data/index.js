import boxModel from "./box-model";
import flexbox from "./flexbox";
import advanced from "./advanced";
import legacy from "./legacy";

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
    levels: [...flexbox],
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
    levels: [...legacy],
  },
  {
    title: "Advanced Techniques",
    funnyTitle: "CSS Wizardry",
    funnySubtitle: "In case you thought you knew CSS",
    description: "A few advanced techniques.",
    levels: [...advanced],
  },
];
