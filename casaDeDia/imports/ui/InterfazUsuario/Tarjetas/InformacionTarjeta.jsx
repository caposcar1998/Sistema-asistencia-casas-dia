import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    }
});

export default function InformacionTarjeta({ idTarjeta }) {
    const classes = useStyles();
    const [tarjeta, setTarjeta] = useState([]);

    useEffect(() => {
        tarjetaServidor();
    }, []);

    function tarjetaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTarjeta",
                    idTarjeta,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTarjeta(res)
                            console.log(tarjeta)
                            resolve()
                        }
                    });
            }
        )
    }

    return (
        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1">Tarjetas de apoyo</Typography>
                </Grid>
            </Grid>

            <Grid item xs={8}>

                <Grid item xs={12}>
                    <Typography>Cómo tramitarla?</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>No se campeon</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Requisitos para tramitarla</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Todo con mil copias</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Dónde puedo obtener más información?</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Aqui </Typography>
                </Grid>

            </Grid>
            <Grid item xs={4}>

                <Grid item xs={12}>
                    <Typography>Cantidad: {idTarjeta}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Lugares aceptados: {idTarjeta}</Typography>
                </Grid>
            </Grid>

        </Grid>


    )
 }
