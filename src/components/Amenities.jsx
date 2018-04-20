import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from '../../stylesheets/amenities-style.css';
import { wifi, coffee, spaceship, map, dna, streetView } from '../../stylesheets/icons';

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.container}>

        <div className={styles.titleContainer}>
          <div className={styles.title}> Amenities </div>
        </div>

        <div className={styles.amenityContainer}>

          <div className={styles.leftCol}>
            <p><FontAwesomeIcon icon={wifi} />  Wifi 3.0</p>
            <p><FontAwesomeIcon icon={spaceship} />  Spacecraft dock on premises</p>
            <p><FontAwesomeIcon icon={coffee} />  Breakfast</p>
          </div>
          <div className={styles.rightCol}>
            <p><FontAwesomeIcon icon={map} />  On the grid</p>
            <p><FontAwesomeIcon icon={dna} />  Non-ionizing radiation</p>
            <p><FontAwesomeIcon icon={streetView} />  Multiverse accessible</p>
          </div>

        </div>
        <a className={styles.viewMore} href="#">Show all 12 amenities</a>
      </div>
    );
  };
}
export default Amenities;
