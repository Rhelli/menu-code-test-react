//---------------------------------------------------------------------------------------------------------------------------------------------------------------
// The WelcomeContainer displays the WelcomeInformationComponent, WelcomeFormComponent, WelcomeNameEntryComponent and WelcomeDescriptionComponent
// - WelcomeInformationComponent - OpenTable style rating, cuisine and price information
// - WelcomeFormComponent - User input for time, date and party size (which is fixed at 2)
// - WelcomeDescriptionComponent - OpenTable style expandable restaurant information
// Crucial Functions include
// - submitNewBooking() - Resets booking object, persisted state (prevents duplicate name bugs when navigating back and forwards), creates new booking object
// - submitNewOrders() - Creates new order object for user and assigns randomly selected color for id purposes
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WelcomeInformationComponent from './components/WelcomeInformationComponent/WelcomeInformationComponent.jsx';
import WelcomeFormComponent from './components/WelcomeFormComponent/WelcomeFormComponent.jsx';
import WelcomeDescriptionComponent from './components/WelcomeDescriptionComponent/WelcomeDescriptionComponent.jsx';
import WelcomeNameEntryComponent from './components/WelcomeNameEntryComponent/WelcomeNameEntryComponent.jsx';
import { createNewBooking, createNewOrder, resetOrder } from '../../state/orders/orderActions';
import { resetStock } from '../../state/stock/stockActions';
import { randomColorGen } from '../../utils/menuUtils';
import { clearState } from '../../utils/storageUtils';
import styles from './WelcomeContainer.module.scss';

const WelcomeContainer = ({ createNewBooking, createNewOrder, resetOrder, resetStock }) => {
  const history = useHistory();
  const [pageTurn, setPageTurn] = useState(false);

  const submitNewBooking = (event, partySize, date, time) => {
    event.preventDefault();
    resetOrder();
    resetStock();
    clearState();
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
  createNewOrder: PropTypes.func.isRequired,
  resetOrder: PropTypes.func.isRequired,
  resetStock: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  createNewBooking: (partySize, date, time) => dispatch(createNewBooking(partySize, date, time)),
  createNewOrder: (name, color) => dispatch(createNewOrder(name, color)),
  resetOrder: () => dispatch(resetOrder()),
  resetStock: () => dispatch(resetStock())
});

export default connect(null, mapDispatchToProps)(WelcomeContainer);
