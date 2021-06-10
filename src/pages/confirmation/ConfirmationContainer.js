import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailsComponent from './components/DetailsComponent/DetailsComponent.jsx';
import styles from './ConfirmationContainer.module.scss';

const ConfirmationContainer = ({ orderStore }) => {
  const { orders, bookings } = orderStore;
  const names = Object.keys(orders);

  return (
    <main className={styles.confirmationContainer}>
      <h1>Your Reservation</h1>
      <DetailsComponent orderStore={orderStore} />
    </main>
  );
};

ConfirmationContainer.propTypes = {
  orderStore: PropTypes.shape({
    bookings: PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      partySize: PropTypes.number.isRequired
    }).isRequired,
    orders: PropTypes.object.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  orderStore: state.orderStore
});

export default connect(mapStateToProps, null)(ConfirmationContainer);
