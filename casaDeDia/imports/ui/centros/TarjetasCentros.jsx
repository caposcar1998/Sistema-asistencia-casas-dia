import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem, Grid, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function TarjetasCentros({centro, handleOpenBorrarCentro, handleOpenEditarCentro}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getCentroABorrar = () => {
        handleOpenBorrarCentro(centro)
     }
    const getCentroAEditar = () => {
        handleOpenEditarCentro(centro)
    }
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={centro.nombre}
                />
                <CardMedia
                    className={classes.media}
                    image={centro.foto}
                    title={centro.nombre}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {centro.calle + " \n" + centro.delegacion}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getCentroABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getCentroAEditar}>
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
                        <Typography paragraph>Nombre: </Typography>
                        <Typography paragraph>
                            {centro.nombre}
                        </Typography>

                        <Typography paragraph>Dirección:</Typography>

                        <Typography paragraph>Calle:</Typography>
                        <Typography paragraph>
                            {centro.calle}
                        </Typography>

                        <Typography paragraph>Delegación:</Typography>
                        <Typography paragraph>
                            {centro.delegacion}
                        </Typography>

                        <Typography paragraph>Código Postal:</Typography>
                        <Typography paragraph>
                            {centro.codigoPostal}
                        </Typography>

                        <Typography paragraph>Número Telefónico</Typography>
                        <Typography paragraph>
                            {centro.numeroTelefonico}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}