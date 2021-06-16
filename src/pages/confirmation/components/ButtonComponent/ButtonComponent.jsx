import React from 'react';
import styles from './ButtonComponent.module.scss';

const ButtonComponent = () => (
  <div className={styles.confirmButton}>
    <button>
      Confirm Reservation
    </button>
  </div>
);

export default ButtonComponent;
