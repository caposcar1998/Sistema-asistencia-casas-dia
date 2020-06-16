import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
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

export default function TarjetasColectivos({colectivo, handleOpenBorrarColectivo, handleOpenEditarColectivo}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getColectivoABorrar = () => {
        handleOpenBorrarColectivo(colectivo)
     }
    const getColectivoAEditar = () => {
        handleOpenEditarColectivo(colectivo)
    }
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={colectivo.nombre}
                />
                <CardMedia
                    className={classes.media}
                    image={colectivo.foto}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {colectivo.descripcion}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getColectivoABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getColectivoAEditar}>
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
                        <Typography paragraph>Categoria:</Typography>
                        <Typography paragraph>
                            {colectivo.categoria}
                        </Typography>
                        <Typography paragraph>Nombre Tutor(es):</Typography>
                        <Typography paragraph>
                            <List>
                                {
                                    (colectivo.tutores).map((tutores) => (
                                        <ListItem>
                                            <Typography>
                                            <Typography paragraph>
                                            {CryptoJS.AES.decrypt(tutores.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8) + " " +  CryptoJS.AES.decrypt(tutores.apellido, 'secret key 123').toString(CryptoJS.enc.Utf8)}
                                            </Typography>
                                            </Typography>
                                        </ListItem>

                                    ))
                                }
                            </List>
                        </Typography>
                        <Typography paragraph>CupoLimite:</Typography>
                        <Typography paragraph>
                            {colectivo.cupoLimite}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}