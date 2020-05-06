
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Promociones } from '../../api/promociones/promociones';
import { Button, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    papel: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    }
})); 

function MostrarBeneficios({promociones }) {
    const classes = useStyles();

    return (
            <Grid container>
            {promociones.map((value) => {
                
                return (
                    <Grid container>
                        <Paper className={classes.papel}>
                    <Grid item xs={12}>
                        <Typography>{value.nombre}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                            <Typography>{
                                value.fechaInicio ?
                                    (value.fechaInicio).toString()
                            : null
                                }
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                            <Typography>{
                                value.fechaFinal ?
                                    (value.fechaFinal).toString()
                                : null
                                }
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.descripcion}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.direccion}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.telefono}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.acumulable}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.restricciones}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>{value.caducidad}</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                )
                

            })}
        </Grid>
    )
        

}
 

export default withTracker(() => {
    return {
        promociones: Promociones.find({}).fetch(),
    };
})(MostrarBeneficios);


