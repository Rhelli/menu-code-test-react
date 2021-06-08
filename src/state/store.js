import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { orderPointReducer, ordersReducer, stockReducer } from './index';

const rootReducer = combineReducers({
  orderPointStore: orderPointReducer,
  orderStore: ordersReducer,
  stockStore: stockReducer
});

const setupStore = () => {
  const middleware = [];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true });
    middleware.push(logger);
  }
  middleware.push(thunk);

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

  return store;
};

export default setupStore;
