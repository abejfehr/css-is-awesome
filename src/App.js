import React, { useState, useCallback } from "react";
import "./App.css";
import "react-resizable/css/styles.css";
import { Box } from "./components/Box";
import { ProblemArea } from "./components/ProblemArea";
import { levels } from "./levels";
import { useSceneManager } from "./hooks/useSceneManager";

const INITIAL_LEVEL = 1;

const App = () => {
  const [sceneIndex, setSceneIndex] = useState(INITIAL_LEVEL - 1);
  const [isMatch, updateScene, setScene] = useSceneManager(
    levels[sceneIndex].boxes,
    levels[sceneIndex].goal
  );
  const [rng, setRng] = useState(Math.random().toString(36).substring(7));

  const handleLevelSubmit = useCallback(() => {
    // If it's a win, proceed
    if (isMatch) {
      goTo((sceneIndex + 1) % levels.length);
    }
  }, [sceneIndex, isMatch]);

  const goTo = (sceneIndex) => {
    setSceneIndex(sceneIndex);
    setScene(levels[sceneIndex].boxes, levels[sceneIndex].goal);
  };

  const reset = () => {
    setScene(levels[sceneIndex].boxes, levels[sceneIndex].goal);
    setRng(Math.random().toString(36).substring(7));
  };

  return (
    <main>
      <ProblemArea level={levels[sceneIndex]} onSubmit={handleLevelSubmit} />
      <section className="SolutionArea">
        Level {sceneIndex + 1}
        <div
          className="SolutionArea__goal"
          style={{
            width: levels[sceneIndex].canvasWidth,
            height: levels[sceneIndex].canvasHeight,
          }}
        >
          <div className="SolutionArea__v-center"></div>
          <div className="SolutionArea__h-center"></div>
          {levels[sceneIndex].boxes?.map((box, index) => (
            <Box
              key={`${sceneIndex}-${index}-${rng}`}
              passedClassName={box.className}
              label={`.${box.className}`}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              resizable={box.resizable}
              onInput={updateScene}
            />
          ))}
        </div>
        <button onClick={reset}>reset</button>
      </section>
    </main>
  );
};

export default App;
