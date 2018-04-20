import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from '../../stylesheets/brief-style.css';
import { users, bed, bath, home } from '../../stylesheets/icons';

const Brief = (props) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.type}>{props.info.type}</div>
      <div className={styles.title}>{props.info.title}</div>
      <div className={styles.location}>{props.info.location}</div>
      <div className="box">
        <div className={styles.stats}>
          <div className="guests"><FontAwesomeIcon icon={users} /> {props.info.numGuests} Guests</div>
        </div>
        <div className={styles.stats}>
          <div className="bedrooms"><FontAwesomeIcon icon={home} /> {props.info.numBedrooms} Bedroom</div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className="beds"><FontAwesomeIcon icon={bed} /> {props.info.numBeds} Beds</div>
      </div>
      <div className={styles.stats}>
        <div className="baths"><FontAwesomeIcon icon={bath} /> {props.info.numBaths} Bath</div>
      </div>
    </div>
  );
};
export default Brief;

