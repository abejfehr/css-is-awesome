import { CATEGORIES } from "../../constants";

export const absoluteStacked = {
  css: `
.box-1 {
  width: 300px;
  height: 300px;
  position: relative;
  margin: 10px;
}
.inside-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`,
  html: `
<div class="container">
  <div class="box-1">
    <div class="inside-box"></div>
  </div>
</div>`,
  container: {
    selector: ".container",
    x: 0,
    y: 0,
    width: 500,
    height: 500,
  },
  boxes: [
    {
      className: "box-1",
      x: 50,
      y: 50,
      width: 300,
      height: 300,
      resizable: false,
    },
    {
      className: "inside-box",
      x: 300,
      y: 300,
      width: 150,
      height: 150,
      resizable: ["x", "y"],
      bounds: ".box-1",
    },
  ],
  goal: [
    {
      className: "box-1",
      x: 10,
      y: 10,
      width: 300,
      height: 300,
    },
    {
      className: "inside-box",
      x: 10,
      y: 10,
      width: 300,
      height: 300,
    },
  ],
  category: CATEGORIES.POSITIONING,
};
