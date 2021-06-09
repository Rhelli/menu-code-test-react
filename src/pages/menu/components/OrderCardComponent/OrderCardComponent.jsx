import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { priceFormatter, extractSubTotal, extractGrandTotal, extractOrderDetails } from '../../../../utils/menuUtils';
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
            <div
              key={uuidv4()}
              className={styles.orderItem}
            >
              <p>{extractOrderDetails(orders, name).food}</p>
              <p className={styles.price}>
              £
              {extractOrderDetails(orders, name).price}
              </p>
              <button>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.individualTotal}>
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
              <p className={styles.total}>
                £
                {extractSubTotal(orders, name)}
              </p>
            </div>
          </div>
        ))
      }
      </div>
      <div className={styles.grandTotalContainer}>
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
