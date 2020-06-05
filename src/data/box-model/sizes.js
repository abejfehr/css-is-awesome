export const sizes = {
  name: "Box sizes",
  css: `
.some-box {
  width: 300px;
  height: 200px;
}
`,
  html: `
<div class="container">
  <div class="some-box"></div>
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
      x: 0,
      y: 0,
      width: 300,
      height: 200,
    },
  ],
};
