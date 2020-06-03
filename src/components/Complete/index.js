import React, { useState, useLayoutEffect, useRef } from "react";
import { startConfetti, stopConfetti } from "../../lib/Confetti";
import debounce from "lodash/debounce";
import "./index.css";

export const Complete = () => {
  const canvasRef = useRef();

  const handleResizing = debounce(() => {
    console.log(
      "resizing the canvas to be ",
      canvasRef.current.width,
      canvasRef.current.height
    );
    canvasRef.current.width = canvasRef.current.clientWidth;
    canvasRef.current.height = canvasRef.current.clientHeight;
  }, 50);

  useLayoutEffect(
    () => {
      startConfetti();
      handleResizing();
      window.addEventListener("resize", handleResizing);
    },
    () => {
      stopConfetti();
      window.removeEventListener("resize", handleResizing);
    }
  );

  return (
    <div className="Complete">
      <canvas id="confetti-canvas" ref={canvasRef}></canvas>
      <h2 className="Complete__header">Congratulations!</h2>
      <p className="Complete__text">
        You've completed every level in the game!
      </p>
      <br />
      <p className="Complete__subtext">
        Check back in the future for some more content.
      </p>
    </div>
  );
};
