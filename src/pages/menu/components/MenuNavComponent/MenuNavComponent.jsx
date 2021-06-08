import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './MenuNavComponent.module.scss';

const MenuNavComponent = ({ orders, setOrderStatus, orderStatus }) => {
  const names = Object.keys(orders);

  return (
    <header className={styles.menuNavContainer}>
      <div className={styles.menuTitle}>
        <h1>Menu</h1>
      </div>
      <div className={styles.menuNavButtons}>
        {
          names.map((name, i) => (
            <button
              onClick={() => setOrderStatus(name)}
              id={i}
              style={orders[name].color}
              className={orderStatus === name ? styles.selected : styles.unselected}
              key={uuidv4()}
            >
              {name}
            </button>
          ))
        }
        <button onClick={() => setOrderStatus('Sharing')} className={styles.sharedButton}>
          Sharing
        </button>
      </div>
    </header>
  );
};

export default MenuNavComponent;
