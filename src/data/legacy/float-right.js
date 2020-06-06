// import { CATEGORIES } from "../../constants";

export const floatRight = {
  css: `
.box-container {
  padding: 10px;
}

.box-1 {
  height: 100px;
  width: 100px;
}

.box-2 {
  float: right;
  width: 170px;
  height: 170px;
}`,
  html: `
<body>
  <div class="box-container">
    <div class="box-2"></div>
    <div class="box-1"></div>
  </div>
</body>`,
  container: {
    selector: "body",
    x: 0,
    y: 0,
    width: 500,
    height: 500,
  },
  boxes: [
    {
      className: "box-container",
      x: 200,
      y: 50,
      width: 150,
      height: 150,
      resizable: ["x", "y"],
    },
    {
      className: "box-1",
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      resizable: false,
      layer: 2,
    },
    {
      className: "box-2",
      x: 200,
      y: 200,
      width: 170,
      height: 170,
      resizable: false,
      layer: 2,
    },
  ],
  goal: [
    {
      className: "box-container",
      x: 0,
      y: 0,
      width: 500,
      height: 100,
      resizable: ["x", "y"],
    },
    {
      className: "box-1",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      resizable: false,
      layer: 2,
    },
    {
      className: "box-2",
      x: 330,
      y: 0,
      width: 170,
      height: 170,
      resizable: false,
      layer: 2,
    },
  ],
  category: "",
};
