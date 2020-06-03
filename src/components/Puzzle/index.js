import React from "react";
import { Box } from "../Box/";
import "./index.css";

export const Puzzle = ({ rng, level, sceneIndex, onInput }) => {
  return (
    <section className="SolutionArea">
      <pre>{`.${level.container.className}`}</pre>
      <div
        className="SolutionArea__goal"
        style={{
          width: level.container.width,
          height: level.container.height,
        }}
      >
        <div className="SolutionArea__v-center"></div>
        <div className="SolutionArea__h-center"></div>
        {level.boxes?.map((box, index) => (
          <Box
            key={`${sceneIndex}-${index}-${rng}`}
            passedClassName={box.className}
            label={`.${box.className}`}
            x={box.x}
            y={box.y}
            width={box.width}
            height={box.height}
            resizable={box.resizable}
            onInput={onInput}
          />
        ))}
      </div>
    </section>
  );
};
