let currentBugId = 0;
export function addNew(bugName, selectedProject) {
  return function(getState, dispatch){
    const storeState = getState();
    const duplicateBug = storeState.bugsState.find(bug => bug.name === bugName);
    if (duplicateBug){
      console.log('Dubplicate bug exists');
    } else {
      const newBug = {
        id: ++currentBugId,
        name: bugName,
        createdAt: new Date(),
        isClosed: false,
        project: selectedProject
      };
      const action = { type: "BUG_ADD_NEW", payload: newBug };
      dispatch(action);
    }
  }
}