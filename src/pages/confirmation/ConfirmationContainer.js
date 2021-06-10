//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// ConfirmationContainer displays the DetailsComponent and the ButtonComponent
//  - DetailsComponent - functionally very similar to the OrderCardComponent, but with different styling
//  - ButtonComponent - It's own component due to the implications of what it would do if hooked up to anything. Slightly excessive currently.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DetailsComponent from './components/DetailsComponent/DetailsComponent.jsx';
import ButtonComponent from './components/ButtonComponent/ButtonComponent.jsx';
import styles from './ConfirmationContainer.module.scss';

const ConfirmationContainer = ({ orderStore }) => (
  <main className={styles.confirmationContainer}>
    <h1>Your Reservation</h1>
    <DetailsComponent orderStore={orderStore} />
    <ButtonComponent />
  </main>
);

ConfirmationContainer.propTypes = {
  orderStore: PropTypes.shape({
    bookings: PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      partySize: PropTypes.number.isRequired
    }),
    orders: PropTypes.object.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  orderStore: state.orderStore
});

export default connect(mapStateToProps, null)(ConfirmationContainer);
