import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './Menu.css';

function Menu() {
  return (
    <div className="header">
        <Grid container spacing={2}>
            <Grid item xs={4} className="menuItem">
                <p>ISBN validieren</p>
            </Grid>
            <Grid item xs={4} className="menuItem">
                <p>Prüfziffer erzeugen</p>
            </Grid>
            <Grid item xs={4} className="menuItem">
                <p>ISBN erzeugen</p>
            </Grid>
        </Grid>
    </div>
  );
}

export default Menu;
