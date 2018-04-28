import React from 'react';
import { Panel } from 'react-bootstrap';
import styles from '../../stylesheets/cancellations-style.css';

const Cancellations = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}> Cancellations </p>
      </div>
      <div className={styles.textContainer}>
        <div>
          <p className={styles.text}> {props.info.strictness} </p>
          <p className={styles.text}> {props.info.policy} </p>
        </div>
      </div>
    </div>
  );
};

export default Cancellations;
