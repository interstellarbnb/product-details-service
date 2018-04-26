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
  handleShow(e) {
    e.preventDefault();
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

        <a className={styles.viewAmenities} href="#" onClick={(e) => this.handleShow(e)}> Show all 12 amenities</a>
        <Modal show={this.state.show} onHide={this.handleClose} className=''>
          <Modal.Header closeButton>
            <Modal.Title className={styles.modalTitle}>Amenities</Modal.Title>
          </Modal.Header>

          <Modal.Body className={styles.modal}>
            <h4 className={styles.amenityTitle}>Basic</h4>
            {this.props.info.basics.map((item) => (
              <div className={styles.summaryTextDiv}>
                <p className={styles.amenityText} key={item}> {item} </p>
              </div>
              ))
            }
            <h4 className={styles.amenityTitle}>Dining</h4>
            {this.props.info.dining.map((item) => (
              <div className={styles.summaryTextDiv}>
                <p className={styles.amenityText} key={item}> {item} </p>
              </div>
              ))
            }
            <h4 className={styles.amenityTitle}>Facilities</h4>
            {this.props.info.facilities.map((item) => (
              <div className={styles.summaryTextDiv}>
                <p className={styles.amenityText} key={item}> {item} </p>
              </div>
              ))
            }
            <h4 className={styles.amenityTitle}>Bed and bath</h4>
            {this.props.info.bedBath.map((item) => (
              <div className={styles.summaryTextDiv}>
                <p className={styles.amenityText} key={item}> {item} </p>
              </div>
              ))
            }
            <h4 className={styles.amenityTitle}>Not included</h4>
            {this.props.info.notIncluded.map((item) => (
              <div className={styles.summaryTextDiv}>
                <p className={styles.notIncluded} key={item}> {item} </p>
              </div>
              ))
            }
          </Modal.Body>

        </Modal>
      </div>
    );
  };
}
export default Amenities;
