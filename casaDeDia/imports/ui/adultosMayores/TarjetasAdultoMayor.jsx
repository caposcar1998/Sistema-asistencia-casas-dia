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
    console.log(direccion_adulto);

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
                    title={adulto.nombre}
                />
                <CardMedia
                    className={classes.media}
                    image={adulto.foto}
                    title={adulto.nombre}
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
                            {adulto.nombre}
                        </Typography>
                        <Typography paragraph>Apellido:</Typography>
                        <Typography paragraph>
                            {apellidos_adulto}
                        </Typography>
                        <Typography paragraph>Grupo Sanguieno:</Typography>
                        <Typography paragraph>
                            {adulto.grupoSanguineo}
                        </Typography>
                        <Typography paragraph>Direccion:</Typography>
                        <Typography paragraph>
                            {direccion_adulto}
                        </Typography>
                        <Typography paragraph>Codigo postal:</Typography>
                        <Typography paragraph>
                            {adulto.codigoPostal}
                        </Typography>
                        
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}
