import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuNavComponent from './components/MenuNavComponent/MenuNavComponent.jsx';
import MenuCardComponent from './components/MenuCardComponent/MenuCardComponent.jsx';
import OrderCardComponent from './components/OrderCardComponent/OrderCardComponent.jsx';
import { addToOrder, addToSharedOrder } from '../../state/orders/orderActions';
import styles from './MenuContainer.module.scss';

const MenuContainer = ({ orderStore, addToOrder, addToSharedOrder }) => {
  const { orders } = orderStore;
  const names = Object.keys(orders);
  const [currentGuest, setCurrentGuest] = useState(names[0]);

  const submitOrderAddition = (food, price, course) => {
    if (currentGuest === 'Sharing') {
      addToSharedOrder(food, price, course);
    } else {
      addToOrder(food, price, course, currentGuest);
    }
    return true;
  };

  console.log(orders);

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
      <OrderCardComponent orders={orders} />
    </main>
  );
};

MenuContainer.propTypes = {
  orderStore: PropTypes.shape({
    booking: PropTypes.object,
    orders: PropTypes.object,
    customerCount: PropTypes.number
  }).isRequired,
  addToOrder: PropTypes.func.isRequired,
  addToSharedOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  orderStore: state.orderStore
});

const mapDispatchToProps = (dispatch) => ({
  addToOrder: (food, price, course, guest) => dispatch(addToOrder(food, price, course, guest)),
  addToSharedOrder: (food, course) => dispatch(addToSharedOrder(food, course))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
