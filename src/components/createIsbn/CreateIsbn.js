import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './CreateIsbn.css';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Stack, TextField } from '@mui/material';
import Menu from '../../menu/Menu';
import ReactInputMask from 'react-input-mask';
import apiService from '../../api/Api.Service';
import Footer from '../../menu/Footer';

function CreateIsbn({history, setHistory}) {
    const [isbn, setIsbn] = useState("");
    const [open, setOpen] = useState(false);
    const [groupNr, setGroupNr] = useState("");
    const [publisherNr, setPublisherNr] = useState("");
    const [titelNr, setTitelNr] = useState("");
    const [inputLength, setInputLength] = useState(0);
    const [openInputError, setOpenInputError] = useState(false);


    function generateIsbn() {
        let returnMsg = apiService().apiCreateIsbn({groupNr: groupNr, publisherNr: publisherNr, titelNr: titelNr});

        returnMsg.then(msg => {
            history.set(new Date(), {func: "generateIsbn", req: groupNr + " - " + publisherNr + " - " + titelNr, res: msg});
            setIsbn(msg);
        });
        
        setGroupNr("");
        setPublisherNr("");
        setTitelNr("");
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

    function onFormInput(input, setInput) {
        setInputLength(groupNr.length + publisherNr.length + titelNr.length);
        setInput(input);
        if (inputLength > 7) {
            setOpenInputError(true);
            setInput(input.substring(0, input.length - 1));
            return;
        } 
        setOpenInputError(false);
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
                    <ReactInputMask
                        mask="99"
                        alwaysShowMask={false}
                        maskChar=""
                        value={groupNr}
                        onChange={(e) => onFormInput(e.target.value, setGroupNr)}>
                        {() => <TextField 
                            id="outlined-basic" 
                            label="Gruppennummer" 
                            variant="outlined" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                        }
                    </ReactInputMask>
                    <ReactInputMask
                        mask="9999999"
                        alwaysShowMask={false}
                        maskChar=""
                        value={publisherNr}
                        onChange={(e) => onFormInput(e.target.value, setPublisherNr)}>
                        {() => <TextField 
                            id="outlined-basic" 
                            label="Verlagsnummer" 
                            variant="outlined" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                        }
                    </ReactInputMask>
                    <ReactInputMask
                        mask="99999"
                        alwaysShowMask={false}
                        maskChar=""
                        value={titelNr}
                        onChange={(e) => onFormInput(e.target.value, setTitelNr)}>
                        {() => <TextField 
                            id="outlined-basic" 
                            label="Titelnummer" 
                            variant="outlined" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                        }
                    </ReactInputMask>
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
            <Snackbar open={openInputError}>
                <Alert severity="error" sx={{width: '100%'}}>
                    Maximale Zeichenanzahl erreicht!
                </Alert>
            </Snackbar>
        </div>
    </div>
    <Footer />
    </>);
}

export default CreateIsbn;