import React from 'react';
import styles from '/Users/devops/Desktop/Hacking/Projects/Interstellarbnb/stylesheets/summary-style.css';

const Summary = (props) => {
  return (
    <div className={styles.summaryContainer}>

      <div className={styles.hostContainer}>
        <img className={styles.avatar} alt="host" src={props.info.hostUrl}></img>
        <div className={styles.hostInfo}>
          <div className="host-name"> Hosted by Luke </div>
          <a href="#" className="contact"> Contact host </a>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryText}>

          {props.info.summary}

        </div>
        <a className="view-more" href="#"> View more about this home </a>
      </div>

    </div>
  );
};
export default Summary;
