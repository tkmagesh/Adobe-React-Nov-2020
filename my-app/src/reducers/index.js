import { combineReducers } from 'redux';

import bugsReducer from "./bugsReducer";
import projectsReducer from "./projectsReducer";

function errorReducer(currentState = '', action){
  if (action.type === 'SET_ERROR'){
    return action.payload;
  } else if (action.type === 'CLEAR_ERROR'){
      return ''
  }
  return currentState
}

const rootReducer = combineReducers({
  bugsState: bugsReducer,
  projectsState: projectsReducer,
  errorState : errorReducer
});

export default rootReducer;