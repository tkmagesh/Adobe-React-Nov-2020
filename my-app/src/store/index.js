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

function thunkMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.getState, store.dispatch)
            } 
            return next(action);
            
        }
    }
}

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default store;
