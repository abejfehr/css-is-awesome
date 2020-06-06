// import { CATEGORIES } from "../../constants";

export const lobotomizedOwl = {
  css: `
.thumbnail-container {
  padding: 10px;
}

.thumbnail {
  height: 100px;
  width: 300px;
}

.thumbnail-container > * + * {
  margin-top: 10px;  
}`,
  html: `
<body>
  <div class="thumbnail-container">
    <div class="thumbnail"></div>
    <div class="thumbnail"></div>
    <div class="thumbnail"></div>
  </div>
</body>`,
  container: {
    selector: "body",
    x: 0,
    y: 0,
    width: 600,
    height: 500,
  },
  boxes: [
    {
      className: "thumbnail-container",
      x: 200,
      y: 50,
      width: 150,
      height: 150,
      resizable: ["x", "y"],
    },
    {
      id: 1,
      className: "thumbnail",
      x: 150,
      y: 150,
      width: 300,
      height: 100,
      resizable: false,
      layer: 2,
    },
    {
      id: 2,
      className: "thumbnail",
      x: 200,
      y: 200,
      width: 300,
      height: 100,
      resizable: false,
      layer: 2,
    },
    {
      id: 3,
      className: "thumbnail",
      x: 250,
      y: 250,
      width: 300,
      height: 100,
      resizable: false,
      layer: 2,
    },
  ],
  goal: [
    {
      className: "thumbnail-container",
      x: 0,
      y: 0,
      width: 320,
      height: 340,
    },
    {
      className: "thumbnail",
      x: 10,
      y: 10,
      width: 300,
      height: 100,
    },
    {
      className: "thumbnail",
      x: 10,
      y: 120,
      width: 300,
      height: 100,
    },
    {
      className: "thumbnail",
      x: 10,
      y: 230,
      width: 300,
      height: 100,
    },
  ],
  category: "",
};
