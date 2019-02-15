import React, { Component } from 'react';

class ModalTitle extends Component {
  render() {
    return (
      <div className="modal-header">
        {this.props.title}
        <button onClick={this.props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default ModalTitle;