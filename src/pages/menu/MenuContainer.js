import React from 'react';
import MenuCardComponent from './components/MenuCardComponent/MenuCardComponent.jsx';
import OrderCardComponent from './components/OrderCardComponent/OrderCardComponent.jsx';
import styles from './MenuContainer.module.scss';

const MenuContainer = () => (
  <main className={styles.menuContainer}>
    <MenuCardComponent />
    <OrderCardComponent />
  </main>
);

export default MenuContainer;
