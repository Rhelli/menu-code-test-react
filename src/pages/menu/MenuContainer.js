import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuNavComponent from './components/MenuNavComponent/MenuNavComponent.jsx';
import MenuCardComponent from './components/MenuCardComponent/MenuCardComponent.jsx';
import OrderCardComponent from './components/OrderCardComponent/OrderCardComponent.jsx';
import WaiterCardComponent from './components/WaiterCardComponent/WaiterCardComponent.jsx';
import { addToOrder, removeFromOrder } from '../../state/orders/orderActions';
import { decreaseStock, increaseStock } from '../../state/stock/stockActions';
import styles from './MenuContainer.module.scss';

const MenuContainer = ({
  orderStore, waiterStore, stockStore, addToOrder, removeFromOrder, decreaseStock, increaseStock,
}) => {
  const { orders } = orderStore;
  const { messageList } = waiterStore;
  const names = Object.keys(orders);
  const [currentGuest, setCurrentGuest] = useState(names[0]);
  console.log(stockStore.starters);
  console.log(orderStore.orders);

  const submitOrderAddition = (food, price, course) => {
    if (stockStore[course][food] > 1) {
      addToOrder(food, price, course, currentGuest);
      decreaseStock(food, course);
    }
    return true;
  };

  const submitOrderDeletion = (food, course, name) => {
    removeFromOrder(name, food, course);
    increaseStock(food, course);
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
        />
        <WaiterCardComponent messageList={messageList} />
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
  removeFromOrder: PropTypes.func.isRequired
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
  decreaseStock: (food, course) => dispatch(decreaseStock(food, course))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
