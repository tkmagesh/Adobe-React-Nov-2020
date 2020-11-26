function thunkMiddleware(store) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        return action(store.getState, store.dispatch);
      }
      return next(action);
    };
  };
}

export default thunkMiddleware;