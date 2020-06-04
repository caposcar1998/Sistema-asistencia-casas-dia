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



export default function TarjetasClubes({ club, handleOpenAnadirUsuario,handleOpenAnadirEmpleado,handleOpenBorrarClub, handleOpenEditarClub }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getClubABorrar = () => {

        handleOpenBorrarClub(club)
     }

    const getClubAEditar = () => {

        handleOpenEditarClub(club)
    }

    const anadirPersonasMayores = () => {
        handleOpenAnadirUsuario(club)
     }

    const anadirPersonal = () => {
        handleOpenAnadirEmpleado(club)
     }
    
    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={club.nombre}
                    subheader={"Apertura " + club.horarioApertura + "- Cierre " + club.horarioCierre}
                />
                <CardMedia
                    className={classes.media}
                    image={club.foto}
                    title={club.nombre}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {club.direccion}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="editar" onClick={getClubABorrar}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="eliminar" onClick={getClubAEditar}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="editar" onClick={anadirPersonal}>
                        <PersonAddIcon/>
                    </IconButton>
                    <IconButton aria-label="editar" onClick={anadirPersonasMayores}>
                        <GroupAddIcon />
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
                            {club.direccion}
                        </Typography>
                        <Typography paragraph>Codigo:</Typography>
                        <Typography paragraph>
                            {club.codigoPostal}
                        </Typography>
                        <Typography paragraph>Restricciones:</Typography>
                        <Typography paragraph>
                            <List>
                                {
                                    (club.restricciones).map((restriccion) => (
                                        <ListItem>
                                            <Typography>
                                                {restriccion.nombre}
                                            </Typography>
                                        </ListItem>

                                    ))
                                }
                            </List>
                        </Typography>
                        <Typography paragraph>CupoLimite:</Typography>
                        <Typography paragraph>
                            {club.cupoLimite}
                        </Typography>
                        <Typography paragraph>Actividades:</Typography>
                        <List>
                            {
                                //funciona pero aun no recibe un objeto
                                (club.actividades).map((actividad) => (
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
