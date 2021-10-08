import React, { useState } from 'react';

import './History.css';
import Menu from '../../menu/Menu';
import Footer from '../../menu/Footer';

function History(history) {
    const [rows, setRows] = useState([]);
    
  return (
    <>
    <Menu/>
    <div className="outerContainer">
        <div className="headline">
            Vergangene Anfragen
        </div>
        <div className="container">
            
        </div>
    </div>
    <Footer />
    </>);
}

export default History;