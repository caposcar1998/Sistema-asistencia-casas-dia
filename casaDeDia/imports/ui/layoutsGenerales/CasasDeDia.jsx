import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
    cajas: {
    }
}));

export default function CasasDeDia() { 
    const classes = useStyles();


    function abrirModalNuevaCasa() { }

    return (
        <Grid container className={classes.fondo}>
            <Grid item xs={12} className={classes.cajas}>
                <Paper>
                    <Button onClick={abrirModalNuevaCasa}>Nueva casa de dia</Button>
                </Paper>
            </Grid>
            <Grid item xs={12} className={classes.cajas}>
                <Paper>
                    <ModalCrearCasaDeDia/>
                </Paper>
            </Grid>
        </Grid>
    )
}