import { CATEGORIES } from "../../constants";

export const absolute50p = {
  css: `
.container {
  position: relative;
}
.box-1 {
  position: absolute;
  top: 50%;
  left: 50%;
}
`,
  html: `
<div class="container">
  <div class="box-1"></div>
</div>`,
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
      width: 120,
      height: 120,
      resizable: false,
    },
  ],
  goal: [
    {
      className: "box-1",
      x: 200,
      y: 200,
      width: 120,
      height: 120,
    },
  ],
  category: CATEGORIES.POSITIONING,
};
