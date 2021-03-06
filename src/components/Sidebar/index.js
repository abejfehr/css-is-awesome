import React from "react";
import Highlight from "react-highlight";
import { IndicatorIcon } from "../Indicator";
import { RESOURCES_BY_TAG } from "../../constants";
import "./index.css";

export const Sidebar = ({
  isMatch,
  isDirty,
  onSubmit,
  onReset,
  submitText,
  subText,
  headerText,
  isIntroduction = false,
  children,
}) => {
  return (
    <section className="Sidebar">
      <div>
        <header className="Sidebar__header-container">
          {isIntroduction && (
            <h1 className="Sidebar__introduction-header">CSS IS AWESOME</h1>
          )}
          {headerText && <h1 className="Sidebar__header">{headerText}</h1>}
          {(isIntroduction || headerText) && (
            <p
              className="Sidebar__subtext"
              dangerouslySetInnerHTML={{ __html: subText }}
            ></p>
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

const getResourcesForTags = (tags = []) => {
  let resources = [];

  tags.forEach((tag) => {
    resources = [...resources, ...RESOURCES_BY_TAG[tag]];
  });

  return resources;
};

export const SidebarContents = ({ level }) => (
  <>
    <span className="label">CSS</span>
    <Highlight className="css">{level.css.trim()}</Highlight>
    <span className="label">HTML</span>
    <Highlight className="html">{level.html.trim()}</Highlight>
    {(level.tags || []).length > 0 && (
      <div className="ResourceList">
        <span className="label">Resources</span>
        <ul>
          {getResourcesForTags(level.tags).map((resource) => (
            <li>
              <b>{resource.title}</b>: <a href={resource.url}>{resource.url}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
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
