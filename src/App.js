import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash.throttle';
import Routes from './routes';
import setupStore from './state/store';
import { saveState } from './utils/storageUtils';
import './App.scss';

const initializeStore = () => {
  const newStore = setupStore();
  newStore.subscribe(throttle(() => {
    saveState({
      orderStore: newStore.getState().orderStore,
      waiterStore: newStore.getState().waiterStore,
      stockStore: newStore.getState().stockStore
    });
  }, 1000));
  return newStore;
};

const store = initializeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="appContainer">
        <Routes />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
