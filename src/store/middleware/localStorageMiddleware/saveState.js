function saveState({ storageKey, state }) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(storageKey, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
}

export default saveState;
