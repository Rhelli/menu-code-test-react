import React, { useState } from 'react';
import styles from './WelcomeDescriptionComponent.module.scss';

const WelcomeDescriptionComponent = () => {
  const [description, setDescription] = useState(false);

  const handleDescriptionClick = () => {
    if (description === false) {
      setDescription(true);
    }
    if (description === true) {
      setDescription(false);
    }
    return description;
  };

  return (
    <div className={description ? styles.descriptionFull : styles.description}>
      <p>The Chez Paree is the quintessential French dining experience, in the center of London&apos;s busy Soho.
      With a well earned Michelin star behind Jean-Luc Picard&apos;s Parisian gem, the <i>Chez Paree</i> is been
      critically acclaimed by numerous high-flyer critiques and restaurant-goers alike.</p>
      <button onClick={handleDescriptionClick}>+ Read More</button>
    </div>
  );
};

export default WelcomeDescriptionComponent;
