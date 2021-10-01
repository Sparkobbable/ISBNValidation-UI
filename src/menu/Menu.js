import React from 'react';
import Grid from '@mui/material/Grid';

import './Menu.css';
import { useHistory } from 'react-router';

function Menu() {
    const history = useHistory();

    function navigateValidate() {
        history.push("/validateIsbn");
    }

    function navigateCreateProof() {
        history.push("/createProof");
    }

    function navigateCreateIsbn() {
        history.push("/createIsbn");
    }

  return (
    <div className="header">
        <Grid container spacing={2}>
            <Grid item xs={4} className="menuItem" onClick={(e) => navigateValidate()}>
                <p>ISBN validieren</p>
            </Grid>
            <Grid item xs={4} className="menuItem" onClick={(e) => navigateCreateProof()}>
                <p>Prüfziffer erzeugen</p>
            </Grid>
            <Grid item xs={4} className="menuItem" onClick={(e) => navigateCreateIsbn()}>
                <p>ISBN erzeugen</p>
            </Grid>
        </Grid>
    </div>
  );
}

export default Menu;
