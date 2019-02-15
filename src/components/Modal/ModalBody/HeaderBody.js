import React, { Component } from 'react';
import "../../styles/modal.css"

class HeaderBody extends Component {
  render() {
    return (
      <div>
        <nav>
          <span className="my-image border">My Image</span>
          <button className="btn btn-primary upload-btn">Upload</button>
        </nav>
      </div>
    );
  }
}

export default HeaderBody;