import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuNavComponent from './components/MenuNavComponent/MenuNavComponent.jsx';
import MenuCardComponent from './components/MenuCardComponent/MenuCardComponent.jsx';
import OrderCardComponent from './components/OrderCardComponent/OrderCardComponent.jsx';
import styles from './MenuContainer.module.scss';

const MenuContainer = ({ orderStore }) => {
  const { orders } = orderStore;

  return (
    <main className={styles.menuContainer}>
      <div className={styles.menuCardSection}>
        <MenuNavComponent orders={orders} />
        <MenuCardComponent />
      </div>
      <OrderCardComponent />
    </main>
  );
};

MenuContainer.propTypes = {
  orderStore: PropTypes.shape({
    booking: PropTypes.object,
    orders: PropTypes.object,
    customerCount: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state) => ({
  orderStore: state.orderStore
});

export default connect(mapStateToProps, null)(MenuContainer);
