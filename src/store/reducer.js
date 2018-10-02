import { combineReducers } from 'redux';

import app from './app/reducer';
import story from './story/reducer';

const rootReducer = combineReducers({
  story,
  app,
});

export default rootReducer;
