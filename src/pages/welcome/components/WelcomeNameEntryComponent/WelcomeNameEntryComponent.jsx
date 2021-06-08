import React from 'react';
import styles from './WelcomeNameEntryComponent.module.scss';

const WelcomeNameEntryComponent = () => (
  <div className={styles.welcomeNameEntryFormComponent}>
    <h3>Enter Guest Names</h3>
    <form className={styles.nameEntryForm}>
      <div className={styles.nameEntry}>
        <label>
          <h4>Guest One&apos;s Name</h4>
          <input id="guest1" type="text" placeholder="Optional" />
        </label>
      </div>
      <div className={styles.nameEntry}>
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

export default WelcomeNameEntryComponent;
