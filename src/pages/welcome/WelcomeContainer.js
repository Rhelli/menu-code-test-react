import React from 'react';
import WelcomeInformationComponent from './components/WelcomeInformationComponent/WelcomeInformationComponent.jsx';
import styles from './WelcomeContainer.module.scss';

const WelcomeContainer = () => (
  <main className={styles.welcomeContainer}>
    <h1>Chez Paree</h1>
    <WelcomeInformationComponent />
  </main>
);

export default WelcomeContainer;
