export const alignment2 = {
  css: `
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
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
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      resizable: false,
    },
  ],
  goal: [
    {
      className: "box-1",
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      resizable: false,
    },
  ],
};
