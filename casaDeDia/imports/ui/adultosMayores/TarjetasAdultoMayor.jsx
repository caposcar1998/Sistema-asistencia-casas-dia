import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem, Grid, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
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



export default function TarjetasAdultoMayor({ adulto, handleOpenBorrarAdultoMayor, handleOpenEditarAdultoMayor, handleOpenAnadirTarjeta }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    // Decrypt
    let bytes  = CryptoJS.AES.decrypt(adulto.apellidos, 'secret key 123');
    let apellidos_adulto = bytes.toString(CryptoJS.enc.Utf8);
    let bytes2  = CryptoJS.AES.decrypt(adulto.curp, 'secret key 123');
    let curp_adulto = bytes2.toString(CryptoJS.enc.Utf8);
    let bytes3  = CryptoJS.AES.decrypt(adulto.direccion, 'secret key 123');
    let direccion_adulto = bytes3.toString(CryptoJS.enc.Utf8);
    let bytes4  = CryptoJS.AES.decrypt(adulto.grupoSanguineo, 'secret key 123');
    let grupoSanguineo_adulto = bytes4.toString(CryptoJS.enc.Utf8);
    let bytes5  = CryptoJS.AES.decrypt(adulto.nombre, 'secret key 123');
    let nombre_adulto = bytes5.toString(CryptoJS.enc.Utf8);
    let bytes6  = CryptoJS.AES.decrypt(adulto.sexo, 'secret key 123');
    let sexo_adulto = bytes6.toString(CryptoJS.enc.Utf8);
    let bytes7  = CryptoJS.AES.decrypt(adulto.edad, 'secret key 123');
    let edad_adulto = bytes7.toString(CryptoJS.enc.Utf8);
    let bytes8  = CryptoJS.AES.decrypt(adulto.codigoPostal, 'secret key 123');
    let codigoPostal_adulto = bytes8.toString(CryptoJS.enc.Utf8);
    //console.log(direccion_adulto);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getAdultoMayorBorrar = () => {

        handleOpenBorrarAdultoMayor(adulto)
     }

    const getAdultoMayorAEditar = () => {

        handleOpenEditarAdultoMayor(adulto)
    }

    const anadirTarjeta = () => {
        handleOpenAnadirTarjeta(adulto)
    }
    
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={nombre_adulto}
                />
                <CardMedia
                    className={classes.media}
                    image={adulto.foto}
                    title={nombre_adulto}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        curp: 
                        {curp_adulto}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getAdultoMayorBorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getAdultoMayorAEditar}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="anadir" onClick={anadirTarjeta}>
                        <CreditCardIcon />
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
                        <Typography paragraph>Nombre:</Typography>
                        <Typography paragraph>
                            {nombre_adulto}
                        </Typography>
                        <Typography paragraph>Apellido:</Typography>
                        <Typography paragraph>
                            {apellidos_adulto}
                        </Typography>
                        <Typography paragraph>Grupo Sanguíneo:</Typography>
                        <Typography paragraph>
                            {grupoSanguineo_adulto}
                        </Typography>
                        <Typography paragraph>Dirección:</Typography>
                        <Typography paragraph>
                            {direccion_adulto}
                        </Typography>
                        <Typography paragraph>Código postal:</Typography>
                        <Typography paragraph>
                            {codigoPostal_adulto}
                        </Typography>
                        
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}
