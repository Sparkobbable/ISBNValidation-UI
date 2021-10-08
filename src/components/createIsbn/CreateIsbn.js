import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import './CreateIsbn.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
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
                        mask="9"
                        alwaysShowMask={false}
                        maskChar=""
                        value={groupNr}
                        onChange={(e) => setGroupNr(e.target.value)}>
                        {() => <TextField 
                            id="outlined-basic" 
                            label="Gruppennummer" 
                            variant="outlined" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                        }
                    </ReactInputMask>
                    <ReactInputMask
                        mask="99999"
                        alwaysShowMask={false}
                        maskChar=""
                        value={publisherNr}
                        onChange={(e) => setPublisherNr(e.target.value)}>
                        {() => <TextField 
                            id="outlined-basic" 
                            label="Verlagsnummer" 
                            variant="outlined" 
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                        }
                    </ReactInputMask>
                    <ReactInputMask
                        mask="999"
                        alwaysShowMask={false}
                        maskChar=""
                        value={titelNr}
                        onChange={(e) => setTitelNr(e.target.value)}>
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
        </div>
    </div>
    <Footer />
    </>);
}

export default CreateIsbn;