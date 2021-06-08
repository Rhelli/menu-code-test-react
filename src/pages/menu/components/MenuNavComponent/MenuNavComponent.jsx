import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { randomColorGen } from '../../../../utils/menuUtils';
import styles from './MenuNavComponent.module.scss';

const MenuNavComponent = ({ orders }) => {
  const names = Object.keys(orders);

  return (
    <header className={styles.menuNavContainer}>
      <div className={styles.menuTitle}>
        <h1>Menu</h1>
      </div>
      <div className={styles.menuNavButtons}>
        {
          names.map((name) => (
            <button style={randomColorGen()} key={uuidv4()}>
              {name}
            </button>
          ))
        }
        <button className={styles.sharedButton}>
          Shared
        </button>
      </div>
    </header>
  );
};

export default MenuNavComponent;
