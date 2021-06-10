import React from 'react';
import PropTypes from 'prop-types';
import CourseMapperComponent from '../../../../common/courseMapperComponent/CourseMapperComponent.jsx';
import styles from './MenuCardComponent.module.scss';

const menuData = require('../../../../../menu-data.json');

const MenuCardComponent = ({ submitOrderAddition }) => {
  const { starters, mains, desserts } = menuData;

  return (
    <div className={styles.menuCardContainer}>
      <CourseMapperComponent
        foodArray={starters}
        onClickFunc={submitOrderAddition}
        course='starters'
      />
      <CourseMapperComponent
        foodArray={mains}
        onClickFunc={submitOrderAddition}
        course='mains'
      />
      <CourseMapperComponent
        foodArray={desserts}
        onClickFunc={submitOrderAddition}
        course='desserts'
      />
    </div>
  );
};

MenuCardComponent.propTypes = {
  submitOrderAddition: PropTypes.func.isRequired
};

export default MenuCardComponent;
