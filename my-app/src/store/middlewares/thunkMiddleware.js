/* function thunkMiddleware(store) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
} */

const thunkMiddleware = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
}

export default thunkMiddleware;