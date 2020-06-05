export const margin2Boxes = {
  name: "Margin w/ 2 boxes",
  css: `
.b-1 {
  width: 200px;
  height: 200px;
  margin: 10px;
}
.b-2 {
  width: 200px;
  height: 200px;
  margin: 10px;
}
`,
  html: `
<div class="container">
  <div class="b-1"></div>
  <div class="b-2"></div>
</div>`,
  subtext: "The basics",
  container: {
    className: "container",
    x: 0,
    y: 0,
    width: 500,
    height: 400,
  },
  boxes: [
    {
      className: "b-1",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      resizable: ["x", "y"],
    },
    {
      className: "b-2",
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      resizable: ["x", "y"],
    },
  ],
  goal: [
    {
      className: "b-1",
      x: 10,
      y: 10,
      width: 200,
      height: 200,
      resizable: ["x", "y"],
    },
    {
      className: "b-2",
      x: 230,
      y: 10,
      width: 200,
      height: 200,
      resizable: ["x", "y"],
    },
  ],
};
