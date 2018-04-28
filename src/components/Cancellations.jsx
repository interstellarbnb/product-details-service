import React from 'react';
import styles from '../../stylesheets/cancellations-style.css';

const Cancellations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}> Cancellations </p>
      </div>
      <div className={styles.textContainer}>
        <div>
          <p className={styles.text}>Strict</p>
          <p className={styles.text}>Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.</p>
        </div>
      </div>
    </div>
  );
};

export default Cancellations;
