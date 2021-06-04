import React from 'react';
import { render } from 'react-dom';
import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return <h1 className={styles.menuTest}>Menu Test</h1>;
  }
}

render(<App />, document.getElementById('root'));
