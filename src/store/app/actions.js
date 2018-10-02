import { buildActionCreator } from 'store/utils';

const NS = '@hackerNewsReader/app';

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
  SET_LAYOUT: `${NS}/SET_LAYOUT`,
};

const actions = {
  setTheme: buildActionCreator(actionTypes.SET_THEME),
  setLayout: buildActionCreator(actionTypes.SET_LAYOUT),
};

export default actions;
