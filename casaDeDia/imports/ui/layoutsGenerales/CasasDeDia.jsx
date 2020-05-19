import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List,ListItem,Grid, Paper, Button, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse} from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
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

export default function CasasDeDia() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [casasDeDia, setCasasDeDia] = useState([])
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        casasDeDiaServidor();
    }, []);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function casasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerCasasDeDia",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCasasDeDia(res)
                            resolve()
                        }
                    });
            }
        )
    }


    return (
        <>
            <Grid container className={classes.fondo}>
            <Paper>
            <Grid item xs={12}>

                    <Button onClick={handleOpenModal}>Nueva casa de dia</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {casasDeDia.map((casa) => (
                            <Grid item>
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={casa.nombre}
                                        subheader={"Apertura "+casa.horarioApertura + "- Cierre " + casa.horarioCierre}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image= "https://res.cloudinary.com/dzue2mlpl/image/upload/v1589854903/prueba_image/zkbe4qr01kywgb0fvlmw.jpg"
                                        title=" Foto"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {casa.direccion}
                                    </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="editar">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="eliminar">
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
                                                {casa.direccion}
                                            </Typography>
                                            <Typography paragraph>Restricciones:</Typography>
                                            <Typography paragraph>
                                                <List>
                                                    {
                                                        (casa.restricciones).map((restriccion) => (
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
                                                {casa.cupoLimite}
                                            </Typography>
                                            <Typography paragraph>Actividades:</Typography>
                                            <List>
                                                {
                                                    (casa.actividades).map((actividad) => (
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
                    ))}
                        </Grid>  
            </Grid>
                </Paper>
        </Grid>
            <ModalCrearCasaDeDia
                handleCloseModal={handleCloseModal}
                openModal={openModal}
            />
        </>
    )
}