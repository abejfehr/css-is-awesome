import { useState, useCallback } from "react";
import { chapters } from "../data";

// The first of each
const INITIAL_LEVEL = 0;
const INITIAL_CHAPTER = 0;

export const useStory = () => {
  const [chapterIndex, setChapterIndex] = useState(INITIAL_CHAPTER);
  const [levelIndex, setLevelIndex] = useState(INITIAL_LEVEL);
  const [currentLevel, setCurrentLevel] = useState(
    chapters[INITIAL_CHAPTER].levels[INITIAL_LEVEL]
  );

  const goToNextLevel = useCallback(() => {
    // Try to increment the level
    if (chapters[chapterIndex].levels[levelIndex + 1]) {
      setCurrentLevel(chapters[chapterIndex].levels[levelIndex + 1]);
      setLevelIndex(levelIndex + 1);
      return true;
    }

    // Try to increment the chapter
    if (chapters[chapterIndex + 1] && chapters[chapterIndex + 1].levels[0]) {
      setCurrentLevel(chapters[chapterIndex + 1].levels[0]);
      setChapterIndex(chapterIndex + 1);
      setLevelIndex(0);
      return true;
    }

    return false;
  }, [chapterIndex, levelIndex]);

  const setLevel = useCallback((_chapterIndex, _levelIndex) => {
    // console.log("SETTING LEVEL", _chapterIndex, _levelIndex);
    setCurrentLevel(chapters[_chapterIndex].levels[_levelIndex]);
    setChapterIndex(_chapterIndex);
    setLevelIndex(_levelIndex);
  }, []);

  return [
    chapters,
    currentLevel,
    goToNextLevel,
    setLevel,
    // I don't love that we're exposing the following 2 things
    chapterIndex,
    levelIndex,
  ];
};
