import { THEME_KEY, LAYOUT_KEY } from './storageDefinitions';
import loadState from './loadState';

const loadInitialState = () => {
  const initialState = {};
  const layout = loadState({ storageKey: LAYOUT_KEY });
  const theme = loadState({ storageKey: THEME_KEY });

  if (layout || theme) {
    initialState.app = {};
    initialState.app.layout = layout;
    initialState.app.theme = theme;
  }

  return initialState;
};

export default loadInitialState;
