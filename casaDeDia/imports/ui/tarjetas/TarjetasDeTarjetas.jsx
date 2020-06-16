import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { List, ListItem, Grid, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CryptoJS from "react-native-crypto-js";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));



export default function TarjetasDeTarjetas({ tarjeta, handleOpenBorrarTarjeta, handleOpenEditarTarjeta }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    // Decrypt
    let bytes  = CryptoJS.AES.decrypt(tarjeta.nombre, 'secret key 123');
    let nombre_tarjeta = bytes.toString(CryptoJS.enc.Utf8);
    let bytes2  = CryptoJS.AES.decrypt(tarjeta.fechaVigencia, 'secret key 123');
    let fechaVigencia_tarjeta = bytes2.toString(CryptoJS.enc.Utf8);
    //let hospital_tarjeta = '';
    let banco_tarjeta = '';
    let cantidad_tarjeta ='';
    let tiempo_tarjeta = '';
    let lugaresAceptados_tarjeta = '';
    let cant_tarjeta = '';
    if(tarjeta.tipo == 'salud'){
        //let bytes3  = CryptoJS.AES.decrypt(tarjeta.hospital, 'secret key 123');
        //hospital_tarjeta = bytes3.toString(CryptoJS.enc.Utf8);
    }else if(tarjeta.tipo == 'dinero'){
        let bytes4  = CryptoJS.AES.decrypt(tarjeta.banco, 'secret key 123');
        banco_tarjeta = bytes4.toString(CryptoJS.enc.Utf8);
        let bytes5  = CryptoJS.AES.decrypt(tarjeta.cantidad, 'secret key 123');
        cantidad_tarjeta = bytes5.toString(CryptoJS.enc.Utf8);
        let bytes6  = CryptoJS.AES.decrypt(tarjeta.tiempo, 'secret key 123');
        tiempo_tarjeta = bytes6.toString(CryptoJS.enc.Utf8);
    }else if(tarjeta.tipo == 'despensa'){
        let bytes7  = CryptoJS.AES.decrypt(tarjeta.lugaresAceptados, 'secret key 123');
        lugaresAceptados_tarjeta = bytes7.toString(CryptoJS.enc.Utf8);
        let bytes8  = CryptoJS.AES.decrypt(tarjeta.cantidad, 'secret key 123');
        cant_tarjeta = bytes8.toString(CryptoJS.enc.Utf8);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getTarjetaABorrar = () => {

        handleOpenBorrarTarjeta(tarjeta)
    }

    const getTarjetaEditar = () => {

        handleOpenEditarTarjeta(tarjeta)
    }


    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={nombre_tarjeta}
                    subheader={"Tipo de tarjeta: "+tarjeta.tipo}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {"Vigencia: "+fechaVigencia_tarjeta}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getTarjetaABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getTarjetaEditar}>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="mostrar mas"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {tarjeta.tipo == "salud" ?
                            <>
                            <Typography paragraph>Hospital:</Typography>
                            <Typography paragraph>
                                {tarjeta.hospital}
                                </Typography>
                                <Typography paragraph>Servicios:</Typography>
                            <Typography paragraph>
                                <List>
                                    {
                                            (tarjeta.servicios).map((servicio) => (
                                            <ListItem>
                                                <Typography>
                                                        {servicio.nombre}
                                                </Typography>
                                            </ListItem>

                                        ))
                                    }
                                </List>
                                </Typography>
                                </>
                            :
                            tarjeta.tipo == "dinero" ?
                                <>
                                    <Typography paragraph>Cantidad:</Typography>
                                    <Typography paragraph>
                                        {cantidad_tarjeta}
                                    </Typography>
                                    <Typography paragraph>Banco:</Typography>
                                    <Typography paragraph>
                                        {banco_tarjeta}
                                    </Typography>
                                    <Typography paragraph>Periodicidad depositos:</Typography>
                                    <Typography paragraph>
                                        {tiempo_tarjeta}
                                    </Typography>
                                   
                                </>
                            :
                            tarjeta.tipo == "despensa" ?
                                    <>
                                        <Typography paragraph>Cantidad::</Typography>
                                        <Typography paragraph>
                                            {cant_tarjeta}
                                        </Typography>
                                        <Typography paragraph>Lugares Aceptados:</Typography>
                                        <Typography paragraph>
                                            <List>
                                                {
                                                    (tarjeta.lugaresAceptados).map((lugares) => (
                                                        <ListItem>
                                                            <Typography>
                                                                {lugares.nombre}
                                                            </Typography>
                                                        </ListItem>

                                                    ))
                                                }
                                            </List>
                                        </Typography>
                                    </>
                            :
                                    <Typography paragraph>Tarjeta corrupta</Typography>
                            
                            
                            
                            
                            
                        }

                    </CardContent>
                </Collapse>
            </Card>
        </Grid >

    )

}
