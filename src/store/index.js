import reducer from './reducer';
import { createStore } from 'redux';
import middleware from './middleware';

const configureStore = initialState => {
  const store = createStore(reducer, initialState, middleware);
  return store;
};

export default configureStore;
