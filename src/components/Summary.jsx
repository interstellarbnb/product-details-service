import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from '../../stylesheets/summary-style.css';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      // Dictates modal view or not
      show: false,
    };
  }

  handleShow() {
    // On click, show modal
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div className={styles.summaryContainer}>
        <div className={styles.hostContainer}>
          <img className={styles.avatar} alt="host" src={this.props.info.hostUrl} />
          <div className={styles.hostInfo}>
            <div className="host-name"> {this.props.info.hostName} </div>
            <a href="#" className="contact"> Contact host </a>
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryText}>
            <p>{this.props.info.summaryBrief}...</p>
          </div>
               
          <a className="view-more" href="#" onClick={this.handleShow}> View more about this home </a>

          <Modal show={this.state.show} onHide={this.handleClose} className={styles.modal}>
            <Modal.Header closeButton>
            <Modal.Title className={styles.modalTitle}>About Home</Modal.Title>
            </Modal.Header>

            <Modal.Body className={styles.modalBox}>
              <h4>Summary</h4>
              <p>
                {this.props.info.summaryFull}
              </p>
              <h4>The space</h4>
              <p>
                {this.props.info.space}
              </p>
              <h4>Interactions with guests</h4>
              <p>
                {this.props.info.guestInteraction}
              </p>
              <h4>Notes</h4>
              <p>
                {this.props.info.notes}
              </p>
            </Modal.Body>

          </Modal>

        </div>

      </div>
    );
  };
}

export default Summary;
