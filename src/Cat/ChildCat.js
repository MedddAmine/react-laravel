import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Axios from "axios";


function ChildModal(props) {
  const [data, setData] = useState([])
  
  const [nom, setName] = useState("")
  const [file, setFile] = useState("")

  const style = {
    top: '10%',
    left: '10%',
    width: "80%",
    height: "80%",
    position: 'absolute',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  

  console.warn(data);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Open modal</Button>
      <Modal
        display="flex"
        justifyContent="center"
        alignItems="center"
        open={show}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, }}>
          <div>
            {data.map((item)=>

              <form action="" >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nom</label>
                  <input type="text" onChange={(e) => setName(e.target.value)} value={item.nom} placeholder="nom" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Image</label>
                  <br></br>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>


                <input className="mt-4 btn btn-success btn-block" onClick={() => setFile(() => "")} type="submit" value="Add Product" />

              </form>)}
              
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ChildModal