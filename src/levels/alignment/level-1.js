export const alignment1 = {
  css: `
.container {
  display: flex;
  align-items: center;
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
      width: 140,
      height: 260,
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
      y: 100,
      width: 200,
      height: 200,
    },
    {
      className: "box-2",
      x: 200,
      y: 70,
      width: 140,
      height: 260,
    },
  ],
};
