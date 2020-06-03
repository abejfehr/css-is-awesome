import React from "react";
import "./index.css";

const Cross = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={className}
  >
    <path
      d="M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"
      fill="currentColor"
    ></path>
  </svg>
);

const Checkmark = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={className}
  >
    <path
      d="M20.285 2L9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z"
      fill="currentColor"
    ></path>
  </svg>
);

export const IndicatorIcon = ({ correct = false }) => (
  <div
    className={`Indicator__icon Indicator__icon${
      correct ? "--correct" : "--incorrect"
    }`}
  >
    <Cross className="Indicator__icon-cross" />
    <Checkmark className="Indicator__icon-checkmark" />
  </div>
);

export const Indicator = ({ correct = false }) => {
  return (
    <div className="Indicator">
      <IndicatorIcon correct={correct} />
      <div className="Indicator__label">
        {correct
          ? "The solution is correct"
          : "Something isn't quite right yet"}
      </div>
    </div>
  );
};
