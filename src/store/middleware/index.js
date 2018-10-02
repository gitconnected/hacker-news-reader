import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import localStorageMiddleware from 'store/middleware/localStorageMiddleware';
import storageDefinitions from 'store/middleware/localStorageMiddleware/storageDefinitions';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];
let devTool = f => f;

middlewareList.push(thunk);
middlewareList.push(localStorageMiddleware(storageDefinitions));

if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(
  applyMiddleware(...middlewareList),
  devTool,
);

export default middleware;
