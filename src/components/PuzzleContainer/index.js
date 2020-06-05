import React from "react";
import "./index.css";

export const PuzzleContainer = ({ children, padding }) => (
  <div className="Puzzle" style={{ padding: padding ? "20px" : 0 }}>
    {children}
  </div>
);
