import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from 'dateformat';
import { extractOrderDetails, extractSubTotal, extractGrandTotal } from '../../../../utils/menuUtils';
import styles from './DetailsComponent.module.scss';

const DetailsComponent = ({ orderStore }) => {
  const { partySize, time, date } = orderStore.booking;
  const { orders } = orderStore;
  const names = Object.keys(orders);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.bookingDetails}>
        <div>
          <h5>Party Size</h5>
          <p>
            For
            {' '}
            {partySize}
          </p>
        </div>
        <div>
          <h5>Time</h5>
          <p>
            {time}
          </p>
        </div>
        <div>
          <h5>Date</h5>
          <p>
            {dateFormat(date, 'dddd, dS mmmm')}
          </p>
        </div>
      </div>
      <h3>Your Orders</h3>
      <div className={styles.orderList}>
        <div>
          {
            names.map((name) => (
              <div key={uuidv4()} className={styles.guestOrder}>
                <h5>{name}</h5>
                {
                  extractOrderDetails(orders, name).map((item) => (
                    <div key={uuidv4()} className={styles.orderItem}>
                      <p>{item[0]}</p>
                      <p className={styles.price}>{item[1]}</p>
                    </div>
                  ))
                }
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
                    {extractSubTotal(orders, name)}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.grandTotalContainer}>
          <p>Grand Total:</p>
          <p className={styles.grandPrice}>
            {extractGrandTotal(orders)}
          </p>
        </div>
      </div>
    </div>
  );
};

DetailsComponent.propTypes = {
  orderStore: PropTypes.shape({
    orders: PropTypes.object,
    names: PropTypes.arrayOf(PropTypes.string),
    booking: PropTypes.shape({
      partySize: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  }).isRequired
};

export default DetailsComponent;
