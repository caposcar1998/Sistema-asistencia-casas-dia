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



export default function TarjetasAsilos({ asilo, handleOpenBorrarAsilos,  handleOpenEditarAsilos }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getAsiloABorrar = () => {

        handleOpenBorrarAsilos(asilo)
     }

    const getAsiloAEditar = () => {

         handleOpenEditarAsilos(asilo)
    }
    
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={asilo.nombre}
                    subheader={"Apertura " + asilo.horarioApertura + "- Cierre " + asilo.horarioCierre}
                />
                <CardMedia
                    className={classes.media}
                    image={asilo.foto}
                    title={asilo.nombre}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {asilo.direccion}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getAsiloABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getAsiloAEditar}>
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
                        <Typography paragraph>Direccion:</Typography>
                        <Typography paragraph>
                            {asilo.direccion}
                        </Typography>
                        <Typography paragraph>Codigo:</Typography>
                        <Typography paragraph>
                            {asilo.codigoPostal}
                        </Typography>
                        <Typography paragraph>Restricciones:</Typography>
                        <Typography paragraph>
                            <List>
                                {
                                    (asilo.restricciones).map((restriccion) => (
                                        <ListItem>
                                            <Typography>
                                                {restriccion}
                                            </Typography>
                                        </ListItem>

                                    ))
                                }
                            </List>
                        </Typography>
                        <Typography paragraph>CupoLimite:</Typography>
                        <Typography paragraph>
                            {asilo.cupoLimite}
                        </Typography>
                        <Typography paragraph>Actividades:</Typography>
                        <List>
                            {
                                //funciona pero aun no recibe un objeto
                                (asilo.actividades).map((actividad) => (
                                    <ListItem>
                                        <Typography>
                                            {actividad.nombre}
                                        </Typography>
                                    </ListItem>

                                ))
                            }
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
      
    )

}
