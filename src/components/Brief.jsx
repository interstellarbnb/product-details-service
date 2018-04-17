import React from 'react';
import styles from '/Users/devops/Desktop/Hacking/Projects/Interstellarbnb/stylesheets/brief-style.css';

const Brief = (props) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.type}>{props.info.type}</div>
      <div className={styles.title}>{props.info.title}</div>
      <div className={styles.location}>{props.info.location}</div>
      <div className="box">
        <div className={styles.stats}>
          <div className="guests">{props.info.numGuests} Guests</div>
        </div>
        <div className={styles.stats}>
          <div className="bedrooms">{props.info.numBedrooms} Bedroom</div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className="beds">{props.info.numBeds} Beds</div>
      </div>
      <div className={styles.stats}>
        <div className="baths">{props.info.numBaths} Bath</div>
      </div>
    </div>
  );
};
export default Brief;

