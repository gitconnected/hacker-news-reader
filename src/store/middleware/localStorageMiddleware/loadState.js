function loadState({ storageKey }) {
  try {
    const serializedState = localStorage.getItem(storageKey);

    if (serializedState === null) {
      return undefined;
    }

    const parsedState = JSON.parse(serializedState);

    return parsedState;
  } catch (err) {
    return undefined;
  }
}

export default loadState;
