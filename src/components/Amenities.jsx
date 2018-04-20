import React from 'react';
import styles from '../../stylesheets/amenities-style.css';

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
            <p>Wifi</p>
            <p>Free parking on premises</p>
            <p>Breakfast</p>
          </div>
          <div className={styles.rightCol}>
            <p>Essentials</p>
            <p>Shampoo</p>
            <p>Washer/Dryer</p>
          </div>

        </div>
        <a className={styles.viewMore} href="#">Show all 12 amenities</a>
      </div>
    );
  };
}
export default Amenities;
