import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './CreateIsbn.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';

function CreateIsbn() {
    const [isbn, setIsbn] = useState("");
    const [open, setOpen] = useState(false);
    const [groupNr, setGroupNr] = useState("");
    const [publisherNr, setPublisherNr] = useState("");
    const [titelNr, setTitelNr] = useState("");

    function generateIsbn() {
        let returnMsg = "123-123-123-1";

        setIsbn(returnMsg);
        setGroupNr("");
        setPublisherNr("");
        setTitelNr("");
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
            ISBN Generator
        </div>
        <div className="container">
            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <TextField 
                        id="outlined-basic" 
                        label="Gruppennummer" 
                        variant="outlined" 
                        value={groupNr} 
                        onChange={(e) => setGroupNr(e.target.value)}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    <TextField 
                        id="outlined-basic" 
                        label="Verlagsnummer" 
                        variant="outlined" 
                        value={publisherNr} 
                        onChange={(e) => setPublisherNr(e.target.value)}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                    <TextField 
                        id="outlined-basic" 
                        label="Titelnummer" 
                        variant="outlined" 
                        value={titelNr} 
                        onChange={(e) => setTitelNr(e.target.value)}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                </Stack>
                <Button variant="contained" endIcon={<SendIcon/>} onClick={(e) => generateIsbn()}>
                    Generieren
                </Button>
            </Stack>
            <Dialog
                open={open}
                onClose={() => onClose()}
                >
                <DialogTitle>
                    {"Generierte ISBN"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"ISBN: "} {isbn}
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

export default CreateIsbn;