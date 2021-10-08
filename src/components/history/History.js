import React, { useState } from 'react';

import './History.css';
import Menu from '../../menu/Menu';
import Footer from '../../menu/Footer';
import { Paper, Table, TableContainer } from '@mui/material';

function History(history) {
    const [rows, setRows] = useState([]);
    for (let [key, value] of history) {
        rows.push([key, value.req, value.res]);
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
                    
                </Table>
            </TableContainer>
        </div>
    </div>
    <Footer />
    </>);
}

export default History;