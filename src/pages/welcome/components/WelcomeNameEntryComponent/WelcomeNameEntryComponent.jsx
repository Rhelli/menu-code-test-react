import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeNameEntryComponent.module.scss';

const WelcomeNameEntryComponent = ({ submitNewOrders }) => {
  const [guest1, setGuest1] = useState(null);
  const [guest2, setGuest2] = useState(null);

  return (
    <div className={styles.welcomeNameEntryFormComponent}>
      <h3>Enter Guest Names</h3>
      <form onSubmit={(event) => submitNewOrders(event, guest1, guest2)} className={styles.nameEntryForm}>
        <div
          onChange={(event) => setGuest1(event.target.value)}
          className={styles.nameEntry}
        >
          <label>
            <h4>Guest One&apos;s Name</h4>
            <input id="guest1" type="text" placeholder="Optional" />
          </label>
        </div>
        <div
          onChange={(event) => setGuest2(event.target.value)}
          className={styles.nameEntry}
        >
          <label>
            <h4>Guest Two&apos;s Name</h4>
            <input id="guest2" type="text" placeholder="Optional" />
          </label>
        </div>
        <button className={styles.nameEntryButton} type="submit">
          Continue
      </button>
      </form>
    </div>
  );
};

WelcomeNameEntryComponent.propTypes = {
  submitNewOrders: PropTypes.func.isRequired
};

export default WelcomeNameEntryComponent;
