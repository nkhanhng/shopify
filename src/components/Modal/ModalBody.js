import React, { Component } from 'react';
import HeaderBody from './ModalBody/HeaderBody';
import Tools from './ModalBody/Tools';

class ModalBody extends Component {
  render() {
    return (
      <div className="modal-body">
        <HeaderBody/>
        <Tools/>
      </div>
    );
  }
}

export default ModalBody;