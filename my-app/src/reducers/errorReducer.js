function errorReducer(currentState = "", action) {
  if (action.type === "SET_ERROR") {
    return action.payload;
  } else if (action.type === "CLEAR_ERROR") {
    return "";
  }
  return currentState;
}

export default errorReducer;