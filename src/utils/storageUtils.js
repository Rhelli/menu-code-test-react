export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    throw new Error(err);
  }
};

export const clearState = () => {
  try {
    const serializedState = {};
    localStorage.setItem('state', serializedState);
    localStorage.clear();
  } catch (err) {
    throw new Error(err);
  }
};
