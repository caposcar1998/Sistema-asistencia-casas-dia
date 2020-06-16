import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatsappIcon from '@material-ui/icons/Whatsapp';
import FBIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem, Grid, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CryptoJS from "react-native-crypto-js";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        fontSize: 20,
    },
    media: {
        height: 0,
        fontSize: 20,
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

export default function TarjetasTalleres({taller, handleOpenBorrarTaller, handleOpenEditarTaller}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getTallerABorrar = () => {
        handleOpenBorrarTaller(taller)
     }
    const getTallerAEditar = () => {
        handleOpenEditarTaller(taller)
    }
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={taller.nombre}
                />
                <CardMedia
                    className={classes.media}
                    image={taller.foto}
                    title={taller.nombre}
                />
                <CardContent>
                <Typography paragraph variant="h6">Whatsapp del Taller:</Typography>
                        <Typography paragraph>
                            <WhatsappIcon />
                            {taller.redSocial1}
                        </Typography>
                        <Typography paragraph variant="h6">Facebook del Taller:</Typography>
                        <Typography paragraph>
                        <FBIcon />
                            {taller.redSocial2}
                        </Typography>
                        <Typography paragraph variant="h6">Twitter del Taller:</Typography>
                        <Typography paragraph>
                        <TwitterIcon />
                            {taller.redSocial3}
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {taller.descripcion}
                    </Typography>
                </CardContent>
                <Typography paragraph variant="h6">Whatsapp del Taller:</Typography>
                        <Typography paragraph>
                            <WhatsappIcon />
                            {taller.redSocial1}
                        </Typography>
                        <Typography paragraph variant="h6">Facebook del Taller:</Typography>
                        <Typography paragraph>
                        <FBIcon />
                            {taller.redSocial2}
                        </Typography>
                        <Typography paragraph variant="h6">Twitter del Taller:</Typography>
                        <Typography paragraph>
                        <TwitterIcon />
                            {taller.redSocial3}
                        </Typography>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getTallerABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getTallerAEditar}>
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
                    <Typography paragraph>Nombre del Colectivo(s):</Typography>
                        <List>
                                {
                                    (taller.colectivos).map((colectivos) => (
                                        <ListItem>
                                            <Typography>
                                            <Typography paragraph>
                                            { colectivos.nombre}
                                            </Typography>
                                            </Typography>
                                        </ListItem>

                                    ))
                                }
                            </List>

                        <Typography paragraph>Nombre(s) Instructor(es):</Typography>
                        <Typography paragraph>
                            <List>
                                {
                                    (taller.instructores).map((instructores) => (
                                        <ListItem>
                                            <Typography>
                                            <Typography paragraph>
                                            { CryptoJS.AES.decrypt(instructores.apellidos, 'secret key 123').toString(CryptoJS.enc.Utf8) + " , " + CryptoJS.AES.decrypt(instructores.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}
                                            </Typography>
                                            </Typography>
                                        </ListItem>

                                    ))
                                }
                            </List>
                        </Typography>
                        <Typography paragraph>CupoLimite:</Typography>
                        <Typography paragraph>
                            {taller.cupoLimite}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}