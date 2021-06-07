import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WelcomeInformationComponent from './components/WelcomeInformationComponent/WelcomeInformationComponent.jsx';
import WelcomeFormComponent from './components/WelcomeFormComponent/WelcomeFormComponent.jsx';
import WelcomeDescriptionComponent from './components/WelcomeDescriptionComponent/WelcomeDescriptionComponent.jsx';
import { createNewBooking } from '../../state/orders/orderActions';
import styles from './WelcomeContainer.module.scss';

const WelcomeContainer = ({ createNewBooking }) => {
  const submitNewBooking = (event, partySize, date, time) => {
    event.preventDefault();
    createNewBooking(partySize, date, time);
    return true;
  };

  return (
    <main className={styles.welcomeContainer}>
      <h1>Chez Paree</h1>
      <WelcomeInformationComponent />
      <WelcomeFormComponent submitNewBooking={submitNewBooking} />
      <WelcomeDescriptionComponent />
    </main>
  );
};

WelcomeContainer.propTypes = {
  createNewBooking: PropTypes.func.isRequired,
  orderStore: PropTypes.shape({
    booking: PropTypes.shape({
      partySize: PropTypes.number,
      time: PropTypes.string,
      date: PropTypes.date
    })
  })
};

const mapDispatchToProps = (dispatch) => ({
  createNewBooking: (partySize, date, time) => dispatch(createNewBooking(partySize, date, time))
});

export default connect(null, mapDispatchToProps)(WelcomeContainer);
