import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { priceFormatter, titlelise } from '../../utils/menuUtils';
import styles from './CourseMapperComponent.module.scss';

const CourseMapperComponent = ({ foodArray, onClickFunc, course }) => (
  <div className={styles.courseMenu}>
  <h3>{titlelise(course)}</h3>
    {
      foodArray.map((food) => (
        <div
        className={styles.foodOptionBar}
        key={uuidv4()}
        onClick={() => onClickFunc(food.name, food.price, course)}
        >
          <p className={styles.foodName}>{food.name}</p>
          <p className={styles.foodPrice}>{priceFormatter(food.price)}</p>
        </div>
      ))
    }
  </div>
);

CourseMapperComponent.propTypes = {
  foodArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickFunc: PropTypes.func.isRequired,
  course: PropTypes.string.isRequired
};

export default CourseMapperComponent;
