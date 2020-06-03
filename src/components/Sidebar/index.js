import React from "react";
import Highlight from "react-highlight";
import "./index.css";

export const Sidebar = ({ onSubmit, submitText, children }) => {
  return (
    <section className="Sidebar">
      <div>
        <header>
          <h1 className="Sidebar__header">Weird flex but OK</h1>
          <p className="Sidebar__subtext">
            Put your CSS skills to the test in this CSS puzzle game
          </p>
        </header>
        {children}
      </div>
      {submitText && <button onClick={onSubmit}>{submitText}</button>}
    </section>
  );
};

export const SidebarContents = ({ level }) => (
  <>
    <span className="label">CSS</span>
    <Highlight className="css">{level.css.trim()}</Highlight>
    <span className="label">HTML</span>
    <Highlight className="html">{level.html.trim()}</Highlight>
  </>
);

export const SidebarIntroduction = () => (
  <>
    <p>Welcome to this ridiculous CSS puzzle!</p>
    <p>
      The goal of this game is to practice CSS by dragging and resizing boxes to
      match how they should appear, given some HTML and CSS.
    </p>
  </>
);
