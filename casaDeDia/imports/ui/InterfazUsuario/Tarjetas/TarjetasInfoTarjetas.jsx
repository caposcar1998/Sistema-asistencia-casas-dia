import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CryptoJS from "react-native-crypto-js";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    espacioTarjetas: {
        marginBottom: theme.spacing(5)
    },
    titulo: {
        color:"white"
    }
}));



export default function TarjetasInfoTarjetas({ tarjeta, entrarPantallaInformacionTarjeta}) {
    const classes = useStyles();

    // Decrypt
    let bytes = CryptoJS.AES.decrypt(tarjeta.nombre, 'secret key 123');
    let nombre_tarjeta = bytes.toString(CryptoJS.enc.Utf8);
    let bytes2 = CryptoJS.AES.decrypt(tarjeta.fechaVigencia, 'secret key 123');
    let fechaVigencia_tarjeta = bytes2.toString(CryptoJS.enc.Utf8);
    //let hospital_tarjeta = '';
    let banco_tarjeta = '';
    let cantidad_tarjeta = '';
    let tiempo_tarjeta = '';
    let lugaresAceptados_tarjeta = '';
    let cant_tarjeta = '';
    if (tarjeta.tipo == 'salud') {
        //let bytes3  = CryptoJS.AES.decrypt(tarjeta.hospital, 'secret key 123');
        //hospital_tarjeta = bytes3.toString(CryptoJS.enc.Utf8);
    } else if (tarjeta.tipo == 'dinero') {
        let bytes4 = CryptoJS.AES.decrypt(tarjeta.banco, 'secret key 123');
        banco_tarjeta = bytes4.toString(CryptoJS.enc.Utf8);
        let bytes5 = CryptoJS.AES.decrypt(tarjeta.cantidad, 'secret key 123');
        cantidad_tarjeta = bytes5.toString(CryptoJS.enc.Utf8);
        let bytes6 = CryptoJS.AES.decrypt(tarjeta.tiempo, 'secret key 123');
        tiempo_tarjeta = bytes6.toString(CryptoJS.enc.Utf8);
    } else if (tarjeta.tipo == 'despensa') {
        let bytes7 = CryptoJS.AES.decrypt(tarjeta.lugaresAceptados, 'secret key 123');
        lugaresAceptados_tarjeta = bytes7.toString(CryptoJS.enc.Utf8);
        let bytes8 = CryptoJS.AES.decrypt(tarjeta.cantidad, 'secret key 123');
        cant_tarjeta = bytes8.toString(CryptoJS.enc.Utf8);
    }




    return (

        <Grid item className={classes.espacioTarjetas}>
            <Card className={classes.root} >
                <CardActionArea onClick={() => entrarPantallaInformacionTarjeta(tarjeta._id)}>
                <CardHeader
                    title={
                        tarjeta.tipo == 'salud' ?
                            <Typography variant="h3" className={classes.titulo}>{tarjeta.nombre}</Typography>
                            :
                            <Typography variant="h3" className={classes.titulo}>{nombre_tarjeta}</Typography>
                            
                    }
                />
                <CardContent>
                    <Typography variant="h5"  component="p">
                        {"Vigencia: " + fechaVigencia_tarjeta}
                    </Typography>
                    {tarjeta.tipo == "dinero" ?
                        <Typography variant="h5">{"Cantidad de deposito: $"+ cantidad_tarjeta}</Typography>
                         :
                        tarjeta.tipo == 'salud' ?
                            <Typography variant="h5">{"Hospital:"+ tarjeta.hospital} </Typography>
                            :
                            <Typography variant="h5">{"Cantidad de deposito: $" + cant_tarjeta} </Typography>
                            }
                    <Typography variant="h5" component="p">
                        {tarjeta.tipo == "dinero" ?
                            <Typography variant="h5">{"Banco aceptado: "+banco_tarjeta}</Typography> :
                            null
                        }
                    </Typography>
                </CardContent>
               </CardActionArea>
            </Card>
        </Grid >

    )

}
