import bugApi from '../services/bugApi';
export function addNew(bugName, selectedProject) {
  return async function(dispatch, getState){
    const storeState = getState();
    const duplicateBug = storeState.bugsState.find(bug => bug.name === bugName);
    if (duplicateBug){
      dispatch({ type : 'SET_ERROR', payload : 'Duplicate Bug. The bug already exists!'})
    } else {
      const newBugData = {
        id: 0,
        name: bugName,
        createdAt: new Date(),
        isClosed: false,
        project: selectedProject
      };
      const newBug = await bugApi.save(newBugData)
      const action = { type: "BUG_ADD_NEW", payload: newBug };
      dispatch(action);
    }
  }
}