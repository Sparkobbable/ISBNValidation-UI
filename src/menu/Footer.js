import React from 'react';
import Grid from '@mui/material/Grid';

import './Footer.css';
import { useHistory } from 'react-router';

function Footer() {
    const history = useHistory();

    function navigateHistory() {
        history.push("/history");
    }

  return (
    <div className="footer">
        <div className="history" onClick={() => navigateHistory()}>
            Verlauf
        </div>
    </div>
  );
}

export default Footer;
