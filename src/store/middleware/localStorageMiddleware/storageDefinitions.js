import { actionTypes } from 'store/app/actions';

const BASE_STORAGE_KEY = '@@hackerNewsReader/storage';
export const THEME_KEY = `${BASE_STORAGE_KEY}/theme`;
export const LAYOUT_KEY = `${BASE_STORAGE_KEY}/layout`;

const storageDefinitions = {
  [actionTypes.SET_THEME]: [
    ({ action, saveState }) => saveState({ state: action.payload.theme, storageKey: THEME_KEY }),
  ],
  [actionTypes.SET_LAYOUT]: [
    ({ action, saveState }) => saveState({ state: action.payload.layout, storageKey: LAYOUT_KEY }),
  ],
};

export default storageDefinitions;
