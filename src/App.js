import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import setupStore from './state/store';
import './App.scss';

const store = setupStore();

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
