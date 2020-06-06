import { useState, useRef, useCallback } from "react";
import pick from "lodash/pick";
import isEqual from "lodash/isEqual";
import differenceWith from "lodash/differenceWith";

const KEYS_TO_STORE = ["id", "className", "x", "y", "width", "height"];
const KEYS_TO_MATCH_AGAINST = ["className", "x", "y", "width", "height"];

const transformForStorage = (scene) =>
  JSON.parse(JSON.stringify(scene.map((box) => pick(box, KEYS_TO_STORE))));

const transformForMatching = (scene) =>
  JSON.parse(
    JSON.stringify(scene.map((box) => pick(box, KEYS_TO_MATCH_AGAINST)))
  );

export const useSceneManager = (_scene, _goal) => {
  const [isMatch, setMatch] = useState(false);
  const [isDirty, setDirty] = useState(false);
  const scene = useRef(transformForStorage(_scene));
  const initialScene = useRef(transformForStorage(_scene));
  const referenceScene = useRef(transformForStorage(_goal));

  const updateScene = useCallback(
    (id, className, x, y, width, height) => {
      // Set what we have stored to match what's given
      const boxToUpdate = scene.current.find((box) => {
        if (!id) {
          return box.className === className;
        }
        return box.className === className && box.id === id;
      });
      boxToUpdate.x = x;
      boxToUpdate.y = y;
      boxToUpdate.width = width;
      boxToUpdate.height = height;

      // Set if it's a win
      console.log(
        "matches?",
        transformForMatching(scene.current),
        scene.current
      );
      setMatch(
        differenceWith(
          transformForMatching(scene.current),
          transformForMatching(referenceScene.current),
          isEqual
        ).length === 0
      );
      if (!isDirty) {
        setDirty(true);
      }
    },
    [scene, isDirty]
  );

  const setScene = useCallback(
    (newScene, newGoalScene) => {
      scene.current = transformForStorage(newScene);
      initialScene.current = transformForStorage(newScene);
      referenceScene.current = transformForStorage(newGoalScene);
      setMatch(false);
      setDirty(false);
    },
    [scene, initialScene]
  );

  return [isMatch, isDirty, updateScene, setScene];
};
