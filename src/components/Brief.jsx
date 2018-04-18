import React from 'react';
import styles from '/Users/devops/Desktop/Hacking/Projects/Interstellarbnb/stylesheets/brief-style.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faBed from '@fortawesome/fontawesome-free-solid/faBed';
import faBath from '@fortawesome/fontawesome-free-solid/faBath';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

const Brief = (props) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.type}>{props.info.type}</div>
      <div className={styles.title}>{props.info.title}</div>
      <div className={styles.location}>{props.info.location}</div>
      <div className="box">
        <div className={styles.stats}>
          <div className="guests"><FontAwesomeIcon icon={faUsers} /> {props.info.numGuests} Guests</div>
        </div>
        <div className={styles.stats}>
          <div className="bedrooms"><FontAwesomeIcon icon={faHome} /> {props.info.numBedrooms} Bedroom</div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className="beds"><FontAwesomeIcon icon={faBed} /> {props.info.numBeds} Beds</div>
      </div>
      <div className={styles.stats}>
        <div className="baths"><FontAwesomeIcon icon={faBath} /> {props.info.numBaths} Bath</div>
      </div>
    </div>
  );
};
export default Brief;

