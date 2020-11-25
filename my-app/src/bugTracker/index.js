import React, { Fragment } from 'react';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import './index.css';

const BugTracker = ({ bugs, addNew, remove, toggle }) => {
  return (
    <Fragment>
      <h3>Bug Tracker</h3>
      <hr/>
      <BugStats bugs={bugs} />
      <BugEdit addNew={addNew} />
      <BugList {...{ bugs, toggle, remove }} />
    </Fragment>
  );
};

export default BugTracker;