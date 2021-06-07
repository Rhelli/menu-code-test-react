import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import styles from './WelcomeFormComponent.module.scss';

const WelcomeFormComponent = () => {
  const [date, changeDate] = useState(new Date());
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
    <div className={styles.welcomeFormComponent}>
      <h3>Make a booking</h3>
      <form className={styles.welcomeForm}>
        <div className={styles.partySize}>
          <p>Party Size</p>
          <select>
            <option value="2">For two</option>
          </select>
        </div>
        <div className={styles.timeDate}>
          <div>
            <p>Date</p>
            <DatePicker
              className={styles.datePicker}
              calendarClassName={styles.datePickerCalendar}
              onChange={changeDate}
              value={date}
              format={'dd-MM-y'}
              required={true}
            />
          </div>
          <div>
            <p>Time</p>
            <select />
          </div>
        </div>
        <button className={styles.formSubmitButton}>
          <p>Find A Table</p>
        </button>
      </form>
      <div className={description ? styles.descriptionFull : styles.description}>
        <p>The Chez Paree is the quintessential French dining experience, in the center of London&apos;s busy Soho.
        With a well earned Michelin star behind Jean-Luc Picard&apos;s Parisian gem, the <i>Chez Paree</i> is been
        critically acclaimed by numerous high-flyer critiques and restaurant-goers alike.</p>
        <button onClick={handleDescriptionClick}>+ Read More</button>
      </div>
    </div>
  );
};

export default WelcomeFormComponent;
