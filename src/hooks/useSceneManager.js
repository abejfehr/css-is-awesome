import { useState, useRef, useCallback } from "react";
import pick from "lodash/pick";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";

const KEYS_TO_KEEP = ["className", "x", "y", "width", "height"];

const transformScene = (scene) =>
  JSON.parse(JSON.stringify(scene.map((box) => pick(box, KEYS_TO_KEEP))));

export const useSceneManager = (_scene, _goal) => {
  const [isMatch, setMatch] = useState(false);
  const scene = useRef(transformScene(_scene));
  const initialScene = useRef(transformScene(_scene));
  const referenceScene = useRef(transformScene(_goal));

  const updateScene = useCallback(
    (className, x, y, width, height) => {
      // Set what we have stored to match what's given
      const boxToUpdate = scene.current.find(
        (box) => box.className === className
      );
      boxToUpdate.x = x;
      boxToUpdate.y = y;
      boxToUpdate.width = width;
      boxToUpdate.height = height;

      // Set if it's a win
      setMatch(
        differenceWith(scene.current, referenceScene.current, isEqual)
          .length === 0
      );
    },
    [scene, initialScene]
  );

  const setScene = useCallback(
    (newScene, newGoalScene) => {
      scene.current = transformScene(newScene);
      initialScene.current = transformScene(newScene);
      referenceScene.current = transformScene(newGoalScene);
      setMatch(false);
    },
    [scene, initialScene]
  );

  return [isMatch, updateScene, setScene];
};
