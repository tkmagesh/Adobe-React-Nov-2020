import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('Before -> ', store.getState());
            next(action);
            console.log("After -> ", store.getState());
            console.groupEnd();
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
