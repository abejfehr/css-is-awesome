import { CATEGORIES } from "../../constants";

export const rowReverse = {
  css: `
.container {
  display: flex;
  flex-direction: row-reverse;
}`,
  html: `
<div class="container">
  <div class="box-1"></div>
  <div class="box-2"></div>
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
      className: "box-2",
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      resizable: false,
    },
    {
      className: "box-1",
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      resizable: false,
    },
  ],
  goal: [
    {
      className: "box-2",
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    },
    {
      className: "box-1",
      x: 200,
      y: 0,
      width: 200,
      height: 200,
    },
  ],
  category: CATEGORIES.DIRECTION,
};
