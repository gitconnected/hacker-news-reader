import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'components/App';
import GlobalStyles from 'styles/globals';
import loadInitialState from 'store/middleware/localStorageMiddleware/loadInitialState';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  const initialState = loadInitialState();
  const store = configureStore(initialState);

  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
    console.log(store.getState());
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();

registerServiceWorker();
