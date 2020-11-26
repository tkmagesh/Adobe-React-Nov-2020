function loggerMiddleware(store) {
  return function(next) {
    return function(action) {
      console.group(action.type);
      console.log("Before -> ", store.getState());
      next(action);
      console.log("After -> ", store.getState());
      console.groupEnd();
    };
  };
}

export default loggerMiddleware;