let currentBugId = 0;
export function addNew(bugName, selectedProject) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    createdAt: new Date(),
    isClosed: false,
    project : selectedProject
  };
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}