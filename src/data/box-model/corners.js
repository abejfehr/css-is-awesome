import { CATEGORIES } from "../../constants";

export const corners = {
  css: `
.container {
  position: relative;
}
.a-box {
  position: absolute;
  top: 0;
  left: 0;
}
.another-box {
  position: absolute;
  bottom: 0;
  right: 0;
}
`,
  html: `
<div class="container">
  <div class="a-box"></div>
  <div class="another-box"></div>
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
      className: "a-box",
      x: 50,
      y: 50,
      width: 150,
      height: 150,
      resizable: false,
    },
    {
      className: "another-box",
      x: 150,
      y: 150,
      width: 150,
      height: 150,
      resizable: false,
    },
  ],
  goal: [
    {
      className: "a-box",
      x: 0,
      y: 0,
      width: 150,
      height: 150,
    },
    {
      className: "another-box",
      x: 250,
      y: 250,
      width: 150,
      height: 150,
    },
  ],
  category: CATEGORIES.POSITIONING,
};
