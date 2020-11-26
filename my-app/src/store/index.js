import { createStore } from 'redux';
//import bugsReducer from '../reducers/bugsReducer';
import {projectsReducer } from '../projects';

//const store = createStore(bugsReducer);
const store = createStore(projectsReducer);

export default store;
