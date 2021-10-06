import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './CreateProof.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';
import ReactInputMask from 'react-input-mask';
import apiService from '../../api/Api.Service';

function CreateProof() {
    const [isbn, setIsbn] = useState("");
    const [open, setOpen] = useState(false);
    const [fullIsbn, setFullIsbn] = useState("");

    function generateProof() {
        let returnMsg = apiService().apiCreateProof(isbn);

        setFullIsbn(returnMsg);
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

  return (
    <>
    <Menu/>
    <div className="outerContainer">
        <div className="headline">
            ISBN Prüfzahl-Generator
        </div>
        <div className="container">
            <Stack direction="row" spacing={2}>
                <ReactInputMask
                    mask="9-99-999999"
                    alwaysShowMask={false}
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}>
                    {() => <TextField 
                        id="outlined-basic" 
                        label="ISBN" 
                        variant="outlined" 
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    }
                </ReactInputMask>
                <Button variant="contained" endIcon={<SendIcon/>} onClick={(e) => generateProof()}>
                    Generieren
                </Button>
            </Stack>
            <Dialog
                open={open}
                onClose={() => onClose()}
                >
                <DialogTitle>
                    {"Generierte vollständige ISBN"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"ISBN: "} {fullIsbn}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose()}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    </div>
    </>);
}

export default CreateProof;