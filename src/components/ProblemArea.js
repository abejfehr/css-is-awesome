import React from "react";
import Highlight from "react-highlight";

export const ProblemArea = ({ level, onSubmit }) => {
  return (
    <section className="ProblemArea">
      <div>
        <header>
          <h1>Weird flex but OK</h1>
        </header>
        <span className="label">CSS</span>
        <Highlight className="css">{level.css.trim()}</Highlight>
        <span className="label">HTML</span>
        <Highlight className="html">{level.html.trim()}</Highlight>
        <span className="label">TODO</span>
        {/* <ol>
          <li>Add something for wrapping</li>
          <li>Prevent position from getting out of sync</li>
          <li>Add some kind of progress indication</li>
          <li>Make obtaining the coordinates more stable</li>
          <li>Think of a final empty state (confetti?)</li>
          <li>Show some context at the end of a level</li>
          <li>Make boxes semi-transparent (colours for occlusion?)</li>
          <li>Label main container </li>
          <li>Hint button</li>
          <li>Add mobile support</li>
        </ol> */}
      </div>
      <button onClick={onSubmit}>Submit</button>
    </section>
  );
};
