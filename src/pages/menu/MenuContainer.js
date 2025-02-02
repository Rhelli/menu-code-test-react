//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// MenuContainer displays the menuNavComponent, menuCard, orderCardComponent and the waiterCardComponent
// - MenuContainer - Displays a list of selectable food items generated from provided menuData.json
// - MenuNavComponent - Title and user buttons for choosing who is ordering
// - OrderCardComponent - Displays what users have selected, individual totals and grand total
// - WaiterCardComponent - Displays messages to the user depending on errors or alerts triggered by ordering restrictions (or waiter opinion)
// Crucial Functions
// - submitOrderAddition() - checks if food is in stock, checks if food pleases Pierre, the snobby waiter. Dispatches order and decreases stock if fine.
// - submitOrderDeletion() - Self explanatory. Reverse of addition.
// - checkOrderFinalisation() - checks guests have at least 1 main and a starter or dessert.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuNavComponent from './components/MenuNavComponent/MenuNavComponent.jsx';
import MenuCardComponent from './components/MenuCardComponent/MenuCardComponent.jsx';
import OrderCardComponent from './components/OrderCardComponent/OrderCardComponent.jsx';
import WaiterCardComponent from './components/WaiterCardComponent/WaiterCardComponent.jsx';
import NextCardComponent from './components/NextCardComponent/NextCardComponent.jsx';
import { addToOrder, removeFromOrder } from '../../state/orders/orderActions';
import { decreaseStock, increaseStock } from '../../state/stock/stockActions';
import { checkFinalOrder } from '../../utils/menuUtils';
import { triggerWaiterMessage } from '../../state/waiter/waiterActions';
import { waiterStockErrorMessages, snobbyRealityCheck, orderCheck } from '../../utils/waiterUtils';
import styles from './MenuContainer.module.scss';

const MenuContainer = ({
  orderStore, waiterStore, stockStore, addToOrder, removeFromOrder, decreaseStock, increaseStock,
  triggerWaiterMessage
}) => {
  const { orders } = orderStore;
  const { messageList } = waiterStore;
  const names = Object.keys(orders);
  const history = useHistory();
  const [currentGuest, setCurrentGuest] = useState(names[0]);

  const submitOrderAddition = (food, price, course) => {
    if (stockStore[course][food] > 0) {
      if (snobbyRealityCheck(orders, currentGuest, food)[1]) {
        triggerWaiterMessage(snobbyRealityCheck(orders, currentGuest, food)[0]);
      } else {
        addToOrder(food, price, course, currentGuest);
        decreaseStock(food, course);
      }
    } else {
      triggerWaiterMessage(waiterStockErrorMessages(food));
    }
    return true;
  };

  const submitOrderDeletion = (food, course, name) => {
    removeFromOrder(food, course, name);
    increaseStock(food, course);
  };

  const checkOrderFinalisation = () => {
    if (checkFinalOrder(orders).length) {
      triggerWaiterMessage(orderCheck(checkFinalOrder(orders)));
      return true;
    }
    history.push('/confirmation');
    return true;
  };

  return (
    <main className={styles.menuContainer}>
      <div className={styles.menuCardSection}>
        <MenuNavComponent
          orders={orders}
          setCurrentGuest={setCurrentGuest}
          currentGuest={currentGuest}
        />
        <MenuCardComponent
          submitOrderAddition={submitOrderAddition}
        />
      </div>
      <div className={styles.sideCardsSection}>
        <OrderCardComponent
          orders={orders}
          submitOrderDeletion={submitOrderDeletion}
          className={styles.orderCardComponent}
        />
        <NextCardComponent checkOrderFinalisation={checkOrderFinalisation} />
        <WaiterCardComponent className={styles.waiterCardComponent} messageList={messageList} />
      </div>
    </main>
  );
};

MenuContainer.propTypes = {
  orderStore: PropTypes.shape({
    booking: PropTypes.object,
    orders: PropTypes.object,
    customerCount: PropTypes.number
  }).isRequired,
  waiterStore: PropTypes.shape({
    messageList: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  stockStore: PropTypes.shape({
    starters: PropTypes.object.isRequired,
    mains: PropTypes.object.isRequired,
    desserts: PropTypes.object.isRequired
  }).isRequired,
  addToOrder: PropTypes.func.isRequired,
  removeFromOrder: PropTypes.func.isRequired,
  increaseStock: PropTypes.func.isRequired,
  decreaseStock: PropTypes.func.isRequired,
  triggerWaiterMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  orderStore: state.orderStore,
  waiterStore: state.waiterStore,
  stockStore: state.stockStore
});

const mapDispatchToProps = (dispatch) => ({
  addToOrder: (food, price, course, guest) => dispatch(addToOrder(food, price, course, guest)),
  removeFromOrder: (food, course, guest) => dispatch(removeFromOrder(food, course, guest)),
  increaseStock: (food, course) => dispatch(increaseStock(food, course)),
  decreaseStock: (food, course) => dispatch(decreaseStock(food, course)),
  triggerWaiterMessage: (message) => dispatch(triggerWaiterMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
