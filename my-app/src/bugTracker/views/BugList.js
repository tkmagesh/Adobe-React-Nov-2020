import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove }) => (
  <section className="list">
    <ol>
      {bugs.map(bug => (
        <BugItem bug={bug} key={bug.id} remove={remove} toggle={toggle} />
      ))}
    </ol>
    <input type="button" value="Remove Closed" />
  </section>
);

export default BugList;