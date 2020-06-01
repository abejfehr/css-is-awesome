import React from "react";
import Highlight from "react-highlight";
import "./index.css";

export const Sidebar = ({ level, onSubmit }) => {
  return (
    <section className="Sidebar">
      <div>
        <header>
          <h1>Weird flex but OK</h1>
        </header>
        <span className="label">CSS</span>
        <Highlight className="css">{level.css.trim()}</Highlight>
        <span className="label">HTML</span>
        <Highlight className="html">{level.html.trim()}</Highlight>
      </div>
      <button onClick={onSubmit}>Submit</button>
    </section>
  );
};
