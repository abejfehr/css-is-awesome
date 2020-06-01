import React from "react";
import { Box } from "../Box/";
import "./index.css";

export const Puzzle = ({ rng, level, sceneIndex, onInput, onReset }) => {
  return (
    <section className="SolutionArea">
      Level {sceneIndex + 1}
      <div
        className="SolutionArea__goal"
        style={{
          width: level.canvasWidth,
          height: level.canvasHeight,
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
      <button onClick={onReset}>reset</button>
    </section>
  );
};
