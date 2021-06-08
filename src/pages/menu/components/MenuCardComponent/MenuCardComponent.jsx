import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './MenuCardComponent.module.scss';
import { priceFormatter } from '../../../../utils/menuUtils';

const menuData = require('../../../../../menu-data.json');

const MenuCardComponent = () => {
  const { starters, mains, desserts } = menuData;

  return (
    <div className={styles.menuCardContainer}>
      <h1>Menu</h1>
      <div className={styles.startersMenu}>
        <h3>Starters</h3>
        <div>
          {
            starters.map((start) => (
              <div className={styles.foodOptionBar} key={uuidv4()}>
                <p className={styles.starterName}>
                  {start.name}
                </p>
                <p className={styles.dessertPrice}>
                  £
                  {priceFormatter(start.price)}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.mainsMenu}>
        <h3>Mains</h3>
        <div>
          {
            mains.map((main) => (
              <div className={styles.foodOptionBar} key={uuidv4()}>
                <p className={styles.mainName}>
                  {main.name}
                </p>
                <p className={styles.dessertPrice}>
                  £
                  {priceFormatter(main.price)}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.dessertsMenu}>
        <h3>Desserts</h3>
        <div>
          {
            desserts.map((dessert) => (
              <div className={styles.foodOptionBar} key={uuidv4()}>
                <p className={styles.dessertName}>
                  {dessert.name}
                </p>
                <p className={styles.dessertPrice}>
                  £
                  {priceFormatter(dessert.price)}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MenuCardComponent;
