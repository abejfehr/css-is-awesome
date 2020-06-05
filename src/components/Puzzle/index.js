import React from "react";
import { Box } from "../Box/";
import "./index.css";

export const Puzzle = ({ rng, level, onInput }) => {
  return (
    <>
      <div className="Puzzle__border">
        <div
          className="Puzzle__goal"
          style={{
            width: level.container.width,
            height: level.container.height,
          }}
        >
          <div className="Puzzle__v-center"></div>
          <div className="Puzzle__h-center"></div>
          {level.boxes?.map((box, index) => (
            <Box
              key={`${index}-${rng}`}
              passedClassName={box.className}
              label={`.${box.className}`}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              resizable={box.resizable}
              // bounds={box.bounds} TODO: Revisit this one day
              onInput={onInput}
            />
          ))}
        </div>
      </div>
      <div className="Puzzle__instruction">
        Drag and/or resize the boxes above to match the given HTML+CSS in the
        left sidebar
      </div>
    </>
  );
};
