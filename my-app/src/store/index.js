import { createStore, combineReducers } from 'redux';

import bugsReducer from '../reducers/bugsReducer';
import { projectsReducer } from '../projects';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})

const store = createStore(rootReducer);
window['store'] = store;
export default store;
