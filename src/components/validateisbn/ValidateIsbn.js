import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './ValidateIsbn.css';
import { Alert, Button, Snackbar, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';

function ValidateIsbn() {
    const [isbn, setIsbn] = useState("");
    const [openValid, setOpenValid] = useState(false);
    const [openInvalid, setOpenInvalid] = useState(false);

    function validateIsbn() {
        let returnMsg = false;

        setOpenValid(returnMsg);
        setOpenInvalid(!returnMsg);
    }

    function onEnterIsbn(isbn) {
        setOpenValid(false);
        setIsbn(isbn)
    }

  return (
    <>
    <Menu/>
    <div className="outerContainer">
        <div className="headline">
            ISBN Validator
        </div>
        <div className="container">
            <Stack direction="row" spacing={2}>
                <TextField 
                    id="outlined-basic" 
                    label="ISBN" 
                    variant="outlined" 
                    value={isbn} 
                    onChange={(e) => onEnterIsbn(e.target.value)}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                <Button variant="contained" endIcon={<SendIcon/>} onClick={(e) => validateIsbn()}>
                    Validieren
                </Button>
            </Stack>
            <Snackbar open={openValid}>
                <Alert severity="success" sx={{width: '100%'}}>
                    ISBN ist valide!
                </Alert>
            </Snackbar><Snackbar open={openInvalid}>
                <Alert severity="error" sx={{width: '100%'}}>
                    ISBN ist nicht valide!
                </Alert>
            </Snackbar>
        </div>
    </div>
    </>);
}

export default ValidateIsbn;