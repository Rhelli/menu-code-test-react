import React from 'react';
import Ratings from 'react-ratings-declarative';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faMoneyBill, faUtensils } from '@fortawesome/free-solid-svg-icons';
import styles from './WelcomeInformationComponent.module.scss';

const WelcomeInformationComponent = () => (
  <div className={styles.welcomeInformationContainer}>
    <div className={styles.topInformationBar}>
      <div className={styles.ratings}>
        <Ratings
          rating={4.6}
          widgetRatedColors="rgb(221,72,83)"
          widgetEmptyColors="rgb(225, 225, 225)"
          widgetDimensions="16px"
          widgetSpacings="0px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <p>4.6</p>
      </div>
      <div className={styles.comments}>
        <FontAwesomeIcon icon={faCommentAlt} />
        <p>24 reviews</p>
      </div>
      <div className={styles.price}>
        <FontAwesomeIcon icon={faMoneyBill} />
        <p>£18 to £42</p>
      </div>
      <div className={styles.cuisine}>
        <FontAwesomeIcon icon={faUtensils} />
        <p>European</p>
      </div>
    </div>
    <div className={styles.welcomeInformationTagsBar}>
      <p className={styles.tagTitle}>Top tags:</p>
      <div>
        <p>Special Occasions</p>
        <p>Neighborhood Gem</p>
        <p>Lunch</p>
      </div>
    </div>
  </div>
);

export default WelcomeInformationComponent;
