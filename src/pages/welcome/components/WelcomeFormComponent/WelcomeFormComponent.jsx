import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-date-picker';
import times from '../../../../utils/welcomeUtils';

import styles from './WelcomeFormComponent.module.scss';

const WelcomeFormComponent = ({ submitNewBooking }) => {
  const [partySize, changePartySize] = useState(2);
  const [date, changeDate] = useState(new Date());
  const [time, changeTime] = useState('12:00');

  console.log(partySize, date, time);

  return (
    <div className={styles.welcomeFormComponent}>
      <h3>Make a booking</h3>
      <form onSubmit={(event) => submitNewBooking(event, partySize, date, time)} className={styles.welcomeForm}>
        <div
          onChange={(event) => changePartySize(event.target.value)}
          className={styles.partySize}
        >
          <p>Party Size</p>
          <select id="partySize" name="partySize">
            <option value="2">For 2</option>
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
          <div onChange={(event) => changeTime(event.target.value)}>
            <p>Time</p>
            <select id="time" name="time">
              {
                times.map((time) => (
                  <option key={uuidv4()} value={time}>
                    {time}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <button type="submit" className={styles.formSubmitButton}>
          <p>Find A Table</p>
        </button>
      </form>
    </div>
  );
};

WelcomeFormComponent.propTypes = {
  submitNewBooking: PropTypes.func.isRequired
};

export default WelcomeFormComponent;
