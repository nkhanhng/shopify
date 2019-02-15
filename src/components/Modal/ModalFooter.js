import React, { Component } from 'react';

class ModalFooter extends Component {
  render() {
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Select</button>
        <button onClick={this.props.onClose} type="button" className="btn btn-primary">Cancel</button>
      </div>
    );
  }
}

export default ModalFooter;