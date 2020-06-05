import { TAGS, CATEGORIES } from "../../constants";

export const absolutes = {
  name: "Absolute",
  css: `
.container {
  position: relative;
}
.box-1 {
  position: absolute;
  top: 0;
  left: 0;
}
`,
  html: `
<div class="container">
  <div class="box-1"></div>
</div>`,
  subtext: "The basics",
  container: {
    className: "container",
    x: 0,
    y: 0,
    width: 400,
    height: 400,
  },
  boxes: [
    {
      className: "box-1",
      x: 50,
      y: 50,
      width: 150,
      height: 150,
      resizable: false,
    },
  ],
  goal: [
    {
      className: "box-1",
      x: 0,
      y: 0,
      width: 150,
      height: 150,
    },
  ],
  category: CATEGORIES.POSITIONING,
};
