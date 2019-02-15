import React, { Component } from 'react';
import "../styles/modal.css"
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

class MainModal extends Component {
  handleClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <div className="modal-ku">
        <div className="modal-content">
          <ModalTitle onClose={this.props.onClose} title="Select image" />
          <ModalBody content="Modal Content" />
          <ModalFooter onClose={this.props.onClose}/>
        </div>
      </div>
    );
  }
}

export default MainModal;