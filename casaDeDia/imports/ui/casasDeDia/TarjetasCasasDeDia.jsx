import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem, Grid, Typography, Card, CardContent, CardActions, CardMedia, CardHeader, Collapse } from '@material-ui/core';

export default function TarjetasCasasDeDia({casa, classes }) {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (

        <Grid item>
            <Card className={classes.root}>
                <CardHeader
                    title={casa.nombre}
                    subheader={"Apertura " + casa.horarioApertura + "- Cierre " + casa.horarioCierre}
                />
                <CardMedia
                    className={classes.media}
                    image={casa.foto}
                    title={casa.nombre}
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
      
    )

}
