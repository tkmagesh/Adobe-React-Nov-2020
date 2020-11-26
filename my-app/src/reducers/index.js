import { combineReducers } from 'redux';

import bugsReducer from "./bugsReducer";
import projectsReducer from "./projectsReducer";
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  bugsState: bugsReducer,
  projectsState: projectsReducer,
  errorState : errorReducer
});

export default rootReducer;