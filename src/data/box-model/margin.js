import { CATEGORIES } from "../../constants";

export const margin = {
  css: `
.some-box {
  width: 200px;
  height: 200px;
  margin: 10px;
}
`,
  html: `
<div class="container">
  <div class="some-box"></div>
</div>`,
  container: {
    selector: ".container",
    x: 0,
    y: 0,
    width: 400,
    height: 400,
  },
  boxes: [
    {
      className: "some-box",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      resizable: ["x", "y"],
    },
  ],
  goal: [
    {
      className: "some-box",
      x: 10,
      y: 10,
      width: 200,
      height: 200,
    },
  ],
  category: CATEGORIES.SPACING,
};
