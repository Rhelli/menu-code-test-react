import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  ordersReducer, stockReducer, waiterReducer
} from './index';
import { loadState } from '../utils/storageUtils';

const rootReducer = combineReducers({
  orderStore: ordersReducer,
  stockStore: stockReducer,
  waiterStore: waiterReducer
});

const setupStore = () => {
  const middleware = [];
  const persistedState = loadState();
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }
  middleware.push(thunk);

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
  );

  return store;
};

export default setupStore;
