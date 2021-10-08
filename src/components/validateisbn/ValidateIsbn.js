import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './ValidateIsbn.css';
import { Alert, Button, Snackbar, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';
import ReactInputMask from 'react-input-mask';
import apiService from '../../api/Api.Service';
import Footer from '../../menu/Footer';

function ValidateIsbn({history, setHistory}) {
    const [isbn, setIsbn] = useState("");
    const [openValid, setOpenValid] = useState(false);
    const [openInvalid, setOpenInvalid] = useState(false);

    function validateIsbn() {
        let returnMsg = apiService().apiValidateIsbn(isbn);

        history.set(Date.now(), {req: isbn, res: returnMsg});

        setOpenValid(returnMsg);
        setOpenInvalid(!returnMsg);
    }

    function onEnterIsbn(enter) {
        setOpenValid(false);
        setIsbn(enter)
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
                <ReactInputMask
                    mask="9-99-999999-9"
                    alwaysShowMask={false}
                    value={isbn}
                    onChange={(e) => onEnterIsbn(e.target.value)}>
                    {() => <TextField 
                        id="outlined-basic" 
                        label="ISBN" 
                        variant="outlined" 
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    }
                </ReactInputMask>

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
            <Footer />
        </div>
    </div>
    </>);
}

export default ValidateIsbn;