import React from 'react';
import styles from '../../stylesheets/rules-style.css';

const Rules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}> House Rules </p>
      </div>
      <div className={styles.ruleContainer}>
        <div className={styles.list}>
          <p className={styles.rule}> Don't ride the tauntauns </p>
          <p className={styles.rule}> Don't sleep inside of the tauntauns </p>
          <p className={styles.rule}> T-47 airspeeders are not toys! </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
