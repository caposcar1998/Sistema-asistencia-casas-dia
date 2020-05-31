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
                    title={tarjeta.nombre}
                    subheader={"Tipo de tarjeta: "+tarjeta.tipo}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {"Vigencia: "+tarjeta.fechaVigencia}
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
                                                        {servicio}
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
                                        {tarjeta.cantidad}
                                    </Typography>
                                    <Typography paragraph>Banco:</Typography>
                                    <Typography paragraph>
                                        {tarjeta.banco}
                                    </Typography>
                                    <Typography paragraph>Periodicidad depositos:</Typography>
                                    <Typography paragraph>
                                        {tarjeta.tiempo}
                                    </Typography>
                                   
                                </>
                            :
                            tarjeta.tipo == "despensa" ?
                                    <>
                                        <Typography paragraph>Cantidad::</Typography>
                                        <Typography paragraph>
                                            {tarjeta.cantidad}
                                        </Typography>
                                        <Typography paragraph>Lugares Aceptados:</Typography>
                                        <Typography paragraph>
                                            <List>
                                                {
                                                    (tarjeta.lugaresAceptados).map((lugares) => (
                                                        <ListItem>
                                                            <Typography>
                                                                {lugares}
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
