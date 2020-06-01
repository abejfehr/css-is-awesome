export const alignment3 = {
  css: `
.container {
  display: flex;
  align-items: stretch;
}`,
  html: `
<div class="container">
  <div class="box-1"></div>
</div>`,
  canvasWidth: 400,
  canvasHeight: 400,
  boxes: [
    {
      className: "box-1",
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      resizable: ["y"],
    },
    {
      className: "box-2",
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      resizable: ["y"],
    },
  ],
  goal: [
    {
      className: "box-1",
      x: 0,
      y: 0,
      width: 200,
      height: 400,
    },
    {
      className: "box-2",
      x: 200,
      y: 0,
      width: 200,
      height: 400,
    },
  ],
};
