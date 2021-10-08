import React, { useState } from 'react';

import './History.css';
import Menu from '../../menu/Menu';
import Footer from '../../menu/Footer';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function History({history}) {
    const [rows, setRows] = useState([]);
    for (let [key, value] of history) {
        rows.push([key.toISOString().substring(0,19).replaceAll("T", " "), value.func, value.req, value.res]);
    }
    
  return (
    <>
    <Menu/>
    <div className="outerContainer">
        <div className="headline">
            Vergangene Anfragen
        </div>
        <div className="container">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Datum</TableCell>
                            <TableCell align="right">Aufgerufene Funktion</TableCell>
                            <TableCell align="right">Anfrage</TableCell>
                            <TableCell align="right">Antwort</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell component="th" scope="row">{row[0]}</TableCell>
                                <TableCell align="right">{row[1]}</TableCell>
                                <TableCell align="right">{row[2]}</TableCell>
                                <TableCell align="right">{row[3]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
    <Footer />
    </>);
}

export default History;