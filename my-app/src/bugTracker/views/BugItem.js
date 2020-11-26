import React from 'react';

const BugItem = ({ bug, remove, toggle }) => (
  <li>
    <span
      className={"bugname " + (bug.isClosed ? "closed" : "")}
      onClick={() => toggle(bug)}
    >
      {bug.name}
    </span>
    <div> Project - [ {bug.project} ] </div>
    <div className="datetime">[{bug.createdAt.toString()}]</div>

    <input type="button" value="Remove" onClick={() => remove(bug)} />
  </li>
);

export default BugItem;