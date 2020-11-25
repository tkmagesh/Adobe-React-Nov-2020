let currentBugId = 0;
export function addNew(bugName) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    createdAt: new Date(),
    isClosed: false
  };
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}