export const direction1 = {
  css: `
.container {
  display: flex;
}`,
  html: `
<div class="container">
  <div class="box-1"></div>
  <div class="box-2"></div>
</div>`,
  canvasWidth: 400,
  canvasHeight: 400,
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
      className: "box-1",
      x: 0,
      y: 0,
      width: 200,
      height: 200,
    },
    {
      className: "box-2",
      x: 200,
      y: 0,
      width: 200,
      height: 200,
    },
  ],
};
