import React from "react";
import Highlight from "react-highlight";
import { IndicatorIcon } from "../Indicator";
import "./index.css";

export const Sidebar = ({
  isMatch,
  isDirty,
  onSubmit,
  onReset,
  submitText,
  subText,
  headerText,
  children,
}) => {
  return (
    <section className="Sidebar">
      <div>
        <header className="Sidebar__header-container">
          {headerText && (
            <>
              <h1 className="Sidebar__header">{headerText}</h1>
              <p className="Sidebar__subtext">{subText}</p>
            </>
          )}
        </header>
        {children}
      </div>
      <div className="Sidebar__button-container">
        {submitText && isDirty && (
          <button className="SecondaryButton" onClick={onReset}>
            Reset
          </button>
        )}
        {submitText && (
          <button
            className="PrimaryButton"
            onClick={onSubmit}
            disabled={!isMatch}
          >
            {submitText}
            {isDirty && (
              <div className="PrimaryButton__contents">
                <IndicatorIcon correct={isMatch} />
              </div>
            )}
          </button>
        )}
      </div>
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
    <p>
      The goal of the game is to practice CSS by dragging and resizing boxes to
      match how they should appear, given some HTML and CSS.
    </p>
    <p>Look out for the HTML and CSS right here in this left bar.</p>
    <p>
      Once you think you've got the answer, you'll be able to submit your answer
      by pressing the "submit" button at the bottom of this sidebar.
    </p>
    <p>
      If you want to start over, just press "reset" and the level will reset to
      give you a fresh start.
    </p>
    <p>Good luck!</p>
  </>
);
