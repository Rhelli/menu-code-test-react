import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { orderExtractor } from '../../../../utils/menuUtils';
import styles from './OrderCardComponent.module.scss';

const OrderCardComponent = ({ orders }) => {
  const names = Object.keys(orders);

  return (
    <div className={styles.orderCardContainer}>
      <h3>Order Summary</h3>
      {
        names.map((name) => (
          <div key={uuidv4()}>
            <h5>{name}</h5>
              {
                Object.values(orders[name]).map((item) => (
                  <div key={uuidv4()}>
                    <p>{item.food}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              }
          </div>
        ))
      }
    </div>
  );
};

export default OrderCardComponent;
