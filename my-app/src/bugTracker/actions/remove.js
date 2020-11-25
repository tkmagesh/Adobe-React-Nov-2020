export function remove(bugToRemove) {
  const action = { type: "BUG_REMOVE", payload: bugToRemove };
  return action;
}