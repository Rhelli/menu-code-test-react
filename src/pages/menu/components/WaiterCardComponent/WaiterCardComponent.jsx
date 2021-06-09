/* eslint-disable no-else-return */
import React from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { randomBackgroundColor } from '../../../../utils/waiterUtils';
import styles from './WaiterCardComponent.module.scss';

const WaiterCardComponent = pure(({ messageList }) => (
  <div className={styles.waiterCardContainer}>
    {
      messageList.map((message, i) => {
        if (i === messageList.length - 1) {
          return (
            <div className={styles.animatedMessage} style={randomBackgroundColor()} key={uuidv4()}>
              <p>{message}</p>
            </div>
          );
        } else {
          return (
            <div className={styles.waiterMessage} style={randomBackgroundColor()} key={uuidv4()}>
              <p>{message}</p>
            </div>
          );
        }
      })
    }
  </div>
));

WaiterCardComponent.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WaiterCardComponent;
