import React, { useState, useCallback } from "react";
import "./App.css";
import "react-resizable/css/styles.css";
import { Puzzle } from "./components/Puzzle/";
import {
  Sidebar,
  SidebarContents,
  SidebarIntroduction,
} from "./components/Sidebar/";
import { Complete } from "./components/Complete";
import { levels } from "./data";
import { useSceneManager } from "./hooks/useSceneManager";

const INITIAL_LEVEL = 1;

const App = () => {
  // Whether or not to show the intro screen
  const [introduction, setIntroduction] = useState(true);

  // Whether or not to show the final screen
  const [complete, setComplete] = useState(false);

  const [sceneIndex, setSceneIndex] = useState(INITIAL_LEVEL - 1);
  const [isMatch, isDirty, updateScene, setScene] = useSceneManager(
    levels[sceneIndex].boxes,
    levels[sceneIndex].goal
  );
  const [rng, setRng] = useState(Math.random().toString(36).substring(7));

  const handleLevelSubmit = useCallback(() => {
    if (introduction) {
      setIntroduction(false);
      return;
    }

    // If it's a win, proceed
    if (isMatch) {
      if (sceneIndex + 1 === levels.length) {
        setComplete(true);
        return;
      }
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

  const getSubmitText = () => {
    if (introduction) {
      return "Begin";
    }
    if (complete) {
      return null;
    }
    return "Submit";
  };

  const getHeaderText = () => {
    if (introduction) {
      return "Weird flex but ok";
    }
    if (complete) {
      return null;
    }
    return `Level ${sceneIndex + 1}`;
  };

  const getSubText = () => {
    if (introduction) {
      return "A CSS flexbox puzzle game";
    }
    if (complete) {
      return "";
    }
    return levels[sceneIndex].subtext ? `“${levels[sceneIndex].subtext}”` : "";
  };

  return (
    <main>
      <Sidebar
        isMatch={introduction || isMatch}
        isDirty={isDirty}
        onReset={handleReset}
        onSubmit={handleLevelSubmit}
        submitText={getSubmitText()}
        headerText={getHeaderText()}
        subText={getSubText()}
      >
        {introduction && <SidebarIntroduction />}
        {!introduction && !complete && (
          <SidebarContents level={levels[sceneIndex]} />
        )}
      </Sidebar>
      {!introduction && !complete && (
        <Puzzle
          rng={rng}
          level={levels[sceneIndex]}
          sceneIndex={sceneIndex}
          onInput={updateScene}
        />
      )}
      {complete && <Complete />}
    </main>
  );
};

export default App;
