import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './WaiterCardComponent.module.scss';

const WaiterCardComponent = ({ messageList }) => (
  <div className={styles.waiterCardContainer}>
    {
      messageList.map((message) => (
        <div key={uuidv4()}>
          <p>{message}</p>
        </div>
      ))
    }
  </div>
);

WaiterCardComponent.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WaiterCardComponent;
