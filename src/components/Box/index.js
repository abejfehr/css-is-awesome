import React, { useCallback, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import "./index.css";

export const Box = ({
  id, // If given, makes the box unique even if className matches another's
  width: _width = 100,
  height: _height = 100,
  x: _x = 0,
  y: _y = 0,
  label,
  resizable = ["x", "y"],
  passedClassName,
  bounds = "parent",
  layer = 0,
  onInput = () => {},
}) => {
  const [x, setX] = useState(_x);
  const [y, setY] = useState(_y);
  const [width, setWidth] = useState(_width);
  const [height, setHeight] = useState(_height);

  const boxEl = useRef();

  const putOnTop = () => {
    // Remove elevated z-index from other boxes
    if (boxEl.current) {
      document.querySelectorAll(".Box").forEach((el) => {
        if (boxEl.current !== el) {
          // TODO: Make this use the layer of `el` rather than the current box's layer
          el.style.zIndex = layer * 10 + 1;
        }
      });

      // Increase this element's z-index
      boxEl.current.style.zIndex = layer * 10 + 2;
    }
  };

  const handleDrag = useCallback(
    (event, data) => {
      setX(~~(x + data.deltaX));
      setY(~~(y + data.deltaY));

      if (!boxEl.current && event.target.classList.contains("Box")) {
        boxEl.current = event.target;
      }

      onInput(id, passedClassName, ~~x, ~~y, ~~width, ~~height);
    },
    [x, y, width, height, onInput, passedClassName, id]
  );

  const handleResize = useCallback(
    (_, dir, ref) => {
      setWidth(~~ref.offsetWidth);
      setHeight(~~ref.offsetHeight);

      if (!boxEl.current && ref.classList.contains("Box")) {
        boxEl.current = ref;
      }

      onInput(id, passedClassName, ~~x, ~~y, ~~width, ~~height);
    },
    [x, y, width, height, onInput, passedClassName, id]
  );

  const handleDragStop = useCallback(() => {
    // Don't use this, it somehow breaks things
    onInput(id, passedClassName, ~~x, ~~y, ~~width, ~~height);
  }, [x, y, width, height, onInput, passedClassName, id]);

  const handleResizeStop = useCallback(() => {
    onInput(id, passedClassName, ~~x, ~~y, ~~width, ~~height);
  }, [x, y, width, height, onInput, passedClassName, id]);

  let resizeProps = {};

  if (resizable) {
    if (resizable.includes("x") && !resizable.includes("y")) {
      resizeProps["maxHeight"] = height;
    }
    if (resizable.includes("y") && !resizable.includes("x")) {
      resizeProps["maxWidth"] = width;
    }
  } else {
    resizeProps = {
      enableResizing: false,
    };
  }

  return (
    <Rnd
      className={`Box ${passedClassName}`}
      default={{
        x,
        y,
        width,
        height,
      }}
      resizeGrid={[10, 10]}
      dragGrid={[10, 10]}
      onDrag={handleDrag}
      onDragStart={putOnTop}
      onDragStop={handleDragStop}
      onResize={handleResize}
      onResizeStart={putOnTop}
      onResizeStop={handleResizeStop}
      bounds={bounds}
      {...resizeProps}
    >
      <div className="Box__crosshair-x"></div>
      <div className="Box__crosshair-y"></div>
      {/* <div className="Box__handle Box__handle--top-left"></div>
      <div className="Box__handle Box__handle--bottom-left"></div>
      <div className="Box__handle Box__handle--top-right"></div>
      <div className="Box__handle Box__handle--bottom-right"></div>
      <div className="Box__handle Box__handle--top"></div>
      <div className="Box__handle Box__handle--bottom"></div>
      <div className="Box__handle Box__handle--left"></div>
      <div className="Box__handle Box__handle--right"></div> */}
      <div className="Box__coordinates">
        <pre>{label}</pre>
        <pre>
          Pos: {x}, {y}
        </pre>
        <pre>
          Size: {width}, {height}
        </pre>
      </div>
    </Rnd>
  );
};
