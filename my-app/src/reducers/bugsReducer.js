function bugsReducer(currentState = [], action) {
  if (action.type === "BUG_ADD_NEW") {
    return [...currentState, action.payload];
  }
  if (action.type === "BUG_REMOVE") {
    const bugToRemove = action.payload;
    return currentState.filter(bug => bug.id !== bugToRemove.id);
  }
  if (action.type === "BUG_REPLACE") {
    const bugToReplace = action.payload;
    return currentState.map(bug =>
      bug.id === bugToReplace.id ? bugToReplace : bug
    );
  }
  if (action.type === 'BUG_INIT'){
    return action.payload;
  }
  return currentState;
}

export default bugsReducer;