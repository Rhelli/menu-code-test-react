import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './MenuNavComponent.module.scss';

const MenuNavComponent = ({ orders, setCurrentGuest, currentGuest }) => {
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
              onClick={() => setCurrentGuest(name)}
              id={i}
              style={orders[name].color}
              className={currentGuest === name ? styles.selected : styles.unselected}
              key={uuidv4()}
            >
              {name}
            </button>
          ))
        }
      </div>
    </header>
  );
};

MenuNavComponent.propTypes = {
  orders: PropTypes.shape({
    booking: PropTypes.object,
    orders: PropTypes.object,
    customerCount: PropTypes.number
  }).isRequired,
  setCurrentGuest: PropTypes.func.isRequired,
  currentGuest: PropTypes.string.isRequired
};

export default MenuNavComponent;
