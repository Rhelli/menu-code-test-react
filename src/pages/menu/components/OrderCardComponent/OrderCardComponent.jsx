import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { priceFormatter, extractSubTotal, extractGrandTotal } from '../../../../utils/menuUtils';
import styles from './OrderCardComponent.module.scss';

const OrderCardComponent = ({ orders }) => {
  const names = Object.keys(orders);

  return (
    <div className={styles.orderCardContainer}>
      <h3>Order Summary</h3>
      <div className={styles.orderList}>
        {
          names.map((name) => (
            <div key={uuidv4()} className={styles.individualList}>
              <h5>{name}</h5>
              {
                Object.values(orders[name]).map((item) => (
                  <div key={uuidv4()}>
                    <p>{item.food}</p>
                    <p className={styles.price}>{priceFormatter(parseInt(10, item.price))}</p>
                    <button>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))
              }
              <div>
                {
                  name !== 'Sharing' ? (
                    <p>
                      {name}
                      &apos;s
                      {' '}
                      total:
                    </p>
                  ) : (
                    <p>
                      {name}
                      {' '}
                      total:
                    </p>
                  )
                }
                <p>
                  £
                  {extractSubTotal(orders, name)}
                </p>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <p>Grand Total:</p>
        <p>
          £
          {extractGrandTotal(orders)}
        </p>
      </div>
    </div>
  );
};

OrderCardComponent.propTypes = {
  orders: PropTypes.object.isRequired
};

export default OrderCardComponent;
