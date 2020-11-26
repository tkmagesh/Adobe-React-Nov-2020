import { combineReducers } from 'redux';

import bugsReducer from "./bugsReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  bugsState: bugsReducer,
  projectsState: projectsReducer
});

export default rootReducer;