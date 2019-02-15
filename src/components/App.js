import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import MainModal from './Modal/MainModal';
import "./styles/modal.css"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }
  }

  onHandleClick = () => {
    this.setState({isOpen : true})
  }

  onClose = () => {
    this.setState({isOpen : false})
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <h4>Upload Image</h4>
        <Button variant="primary" onClick={this.onHandleClick}>Select image</Button>
        {isOpen
          ? <div>
            <MainModal show={isOpen} onClose={this.onClose}/>
            </div>
          : null}
      </div>
    );
  }
}

export default App;