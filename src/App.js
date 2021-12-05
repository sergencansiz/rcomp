import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal'
import Button from './components/Button'
import {Tag, Label, Text} from './components/Input'
import React from 'react';

function App() {


  const [modal , setModal] = React.useState({show : false})

  const openModal = () => {
    setModal({show:true})
  }

  const closeModal = () => {
    setModal({show:false})
  }

  return (
    <div className="App">
      <div className="button" width="100px" onClick={openModal}>
        Click to open modal  
      </div>
      <hr></hr>
      <div className="row">
        <Label>Tag Input Field. </Label>
        <Tag placehodler="Enter a tag here"/>
      </div>

      <div className="row">
        <Label>Tag Input Field. </Label>
        <Text placehodler="Enter a tag here"/>
      </div>

      <Modal show={modal.show} width="50%" onModalClose={closeModal} >
        <Modal.Header>
            Hey this is header
        </Modal.Header>
        <Modal.Content>
            Hey, this is content
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
 
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
            x <br></br>
         
      
            
        

        </Modal.Content>
        <Modal.Footer spread="float-right">
            <Button type="negative" onClick={closeModal}>
              Close
            </Button>
            <Button onClick={closeModal}>
              Accept
            </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
