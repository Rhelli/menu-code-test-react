import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './NextCardComponent.module.scss';

const NextCardComponent = ({ checkOrderFinalisation }) => {
  const history = useHistory();
  const handleBackButton = () => history.push('/');

  return (
    <div className={styles.nextCardContainer}>
      <button onClick={handleBackButton} className={styles.previousButton}>
        Previous
      </button>
      <button onClick={checkOrderFinalisation} className={styles.nextButton}>
        Next
      </button>
    </div>
  );
};

NextCardComponent.propTypes = {
  checkOrderFinalisation: PropTypes.func.isRequired
};

export default NextCardComponent;
