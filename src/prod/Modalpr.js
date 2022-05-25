import React, { useState, useEffect } from 'react';
import Procards from './Procards';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


function Modalpr() {
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
                    sx={{ ...style,  }}>
                    <Procards />
                </Box>
            </Modal>
        </>
    );
}

export default Modalpr
