import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './CreateProof.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';

function CreateProof() {
    const [isbn, setIsbn] = useState("");
    const [open, setOpen] = useState(false);
    const [fullIsbn, setFullIsbn] = useState("");

    function generateProof() {
        let returnMsg = "123-123-123-1";

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
                <TextField 
                    id="outlined-basic" 
                    label="ISBN" 
                    variant="outlined" 
                    value={isbn} 
                    onChange={(e) => setIsbn(e.target.value)}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
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