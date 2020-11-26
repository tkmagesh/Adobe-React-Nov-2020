import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import './index.css';
import bugActionCreators from './actions';

const BugTracker = ({ bugs, addNew, remove, toggle, projects }) => {
  return (
    <Fragment>
      <h3>Bug Tracker</h3>
      <hr/>
      <BugStats bugs={bugs} />
      <BugEdit addNew={addNew} projects={projects} />
      <BugList {...{ bugs, toggle, remove }} />
    </Fragment>
  );
};

function mapStateToProps(storeState){
  //given the store state, extract what is needed for the component
  const bugsState = storeState.bugsState,
    projectsState = storeState.projectsState;
  return { bugs : bugsState, projects : projectsState };
}

function mapDispatchToProps(dispatch){
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);