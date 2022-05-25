import { Button, Modal } from 'react-bootstrap';
import React, {useState,useEffect} from 'react';
import Catcards from './Catcards';


function Modalcat() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Voir tous les categories
        </Button>
  
        <Modal size="lg" ClassName="modal-90w" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Catcards />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Modalcat
