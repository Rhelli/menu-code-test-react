import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WelcomeInformationComponent from './components/WelcomeInformationComponent/WelcomeInformationComponent.jsx';
import WelcomeFormComponent from './components/WelcomeFormComponent/WelcomeFormComponent.jsx';
import WelcomeDescriptionComponent from './components/WelcomeDescriptionComponent/WelcomeDescriptionComponent.jsx';
import WelcomeNameEntryComponent from './components/WelcomeNameEntryComponent/WelcomeNameEntryComponent.jsx';
import { createNewBooking, createNewOrder } from '../../state/orders/orderActions';
import styles from './WelcomeContainer.module.scss';

const WelcomeContainer = ({ createNewBooking, createNewOrder }) => {
  const history = useHistory();
  const [pageTurn, setPageTurn] = useState(false);

  const submitNewBooking = (event, partySize, date, time) => {
    event.preventDefault();
    createNewBooking(partySize, date, time);
    setPageTurn(true);
    return true;
  };

  const createNewOrders = (guest1, guest2) => {
    event.preventDefault();

  }

  return (
    <main className={styles.welcomeContainer}>
      <h1>Chez Paree</h1>
      <WelcomeInformationComponent />
      {
        pageTurn ? (
          <WelcomeFormComponent submitNewBooking={submitNewBooking} />
        ) : (
          <WelcomeNameEntryComponent />
        )
      }
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
