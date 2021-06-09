import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WelcomeInformationComponent from './components/WelcomeInformationComponent/WelcomeInformationComponent.jsx';
import WelcomeFormComponent from './components/WelcomeFormComponent/WelcomeFormComponent.jsx';
import WelcomeDescriptionComponent from './components/WelcomeDescriptionComponent/WelcomeDescriptionComponent.jsx';
import WelcomeNameEntryComponent from './components/WelcomeNameEntryComponent/WelcomeNameEntryComponent.jsx';
import { createNewBooking, createNewOrder } from '../../state/orders/orderActions';
import { randomColorGen } from '../../utils/menuUtils';
import styles from './WelcomeContainer.module.scss';

const WelcomeContainer = ({ createNewBooking, createNewOrder}) => {
  const history = useHistory();
  const [pageTurn, setPageTurn] = useState(false);

  const submitNewBooking = (event, partySize, date, time) => {
    event.preventDefault();
    createNewBooking(partySize, date, time);
    setPageTurn(true);
    return true;
  };

  const submitNewOrders = (event, guest1, guest2) => {
    event.preventDefault();
    createNewOrder(guest1, randomColorGen());
    createNewOrder(guest2, randomColorGen());
    history.push('/menu');
  };

  return (
    <main className={styles.welcomeContainer}>
      <h1>Chez Paree</h1>
      <WelcomeInformationComponent />
      {
        !pageTurn ? (
          <WelcomeFormComponent submitNewBooking={submitNewBooking} />
        ) : (
          <WelcomeNameEntryComponent submitNewOrders={submitNewOrders} />
        )
      }
      <WelcomeDescriptionComponent />
    </main>
  );
};

WelcomeContainer.propTypes = {
  createNewBooking: PropTypes.func.isRequired,
  createNewOrder: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  createNewBooking: (partySize, date, time) => dispatch(createNewBooking(partySize, date, time)),
  createNewOrder: (name, color) => dispatch(createNewOrder(name, color))
});

export default connect(null, mapDispatchToProps)(WelcomeContainer);
