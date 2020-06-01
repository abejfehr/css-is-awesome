import React, { useState, useCallback } from "react";
import "./App.css";
import "react-resizable/css/styles.css";
import { Puzzle } from "./components/Puzzle/";
import { Sidebar } from "./components/Sidebar/";
import { levels } from "./data";
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

  const handleReset = () => {
    setScene(levels[sceneIndex].boxes, levels[sceneIndex].goal);
    setRng(Math.random().toString(36).substring(7));
  };

  return (
    <main>
      <Sidebar level={levels[sceneIndex]} onSubmit={handleLevelSubmit} />
      <Puzzle
        rng={rng}
        level={levels[sceneIndex]}
        sceneIndex={sceneIndex}
        onInput={updateScene}
        onReset={handleReset}
      />
    </main>
  );
};

export default App;
