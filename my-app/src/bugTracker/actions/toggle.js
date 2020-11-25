export function toggle(bugToToggle) {
  const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const action = { type: "BUG_REPLACE", payload: toggledBug };
  return action;
}