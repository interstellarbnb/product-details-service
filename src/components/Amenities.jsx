import React from 'react';
import { Modal } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from '../../stylesheets/amenities-style.css';
import { wifi, coffee, spaceship, map, dna, streetView } from '../../stylesheets/icons';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // Show modal
  handleShow() {
    this.setState({
      show: true,
    });
  }

  // Close modal
  handleClose() {
    this.setState({
      show: false,
    });
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

        <a className='' href="#" onClick={this.handleShow}> Show all 12 amenities</a>
        <Modal show={this.state.show} onHide={this.handleClose} className=''>
            <Modal.Header closeButton>
            <Modal.Title className=''>Amenities</Modal.Title>
            </Modal.Header>

            <Modal.Body className=''>
              <h4>Basic</h4>
              <p>
                somthing
              </p>
              <h4>Family features</h4>
              <p>
                something
              </p>
              <h4>Facilities</h4>
              <p>
                something
              </p>
              <h4>Dining</h4>
              <p>
                something
              </p>
              <h4>Bed and bath</h4>
              <p>
                something
              </p>
              <h4>Not included</h4>
              <p>
                something crossed out
              </p>
            </Modal.Body>

          </Modal>
      </div>
    );
  };
}
export default Amenities;
