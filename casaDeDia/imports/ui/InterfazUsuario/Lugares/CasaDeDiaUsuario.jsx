import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";




const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "100%",
    }
});

export default function CasasDeDiaUsuario({ casaSeleccionada }) {
    const classes = useStyles();
    const [casasDeDia, setCasasDeDia] = useState([]);

    useEffect(() => {
        casasDeDiaServidor();
    }, []);


    function casasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarCasaDeDia",
                    casaSeleccionada,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCasasDeDia(res)
                            console.log(res)
                            resolve()
                        }
                    });
            }
        )
    }

    




    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3">{casasDeDia.nombre}</Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={casasDeDia.foto}  className={classes.fotoPrincipal} />
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <Grid item xs={12}>Direccion</Grid>
                    <Grid item xs={12}>{casasDeDia.direccion}</Grid>
                    <Grid item xs={12}>{casasDeDia.codigoPostal}</Grid>
                    <Grid item xs={12}>Horario</Grid>
                    <Grid item xs={12}>{casasDeDia.horarioApertura}</Grid>
                    <Grid item xs={12}>{casasDeDia.horarioCierre}</Grid>
                    <Grid item xs={12}>Publico/Privado</Grid></Grid>
                    <Grid item xs={12}>{casasDeDia.tipoInstitucion}</Grid>
                    <Grid item xs={12}>Actividades</Grid>
                    <Grid item xs={12}>
                    
                    {    
                        casasDeDia.actividades == null ?
                            <Typography>No hay actividades registradas</Typography> :
                            casasDeDia.actividades.map((actividad) => (
                                <Typography >{actividad.nombre}</Typography>
                            ))}

                    </Grid>
                    <Grid item xs={12}>Restricciones</Grid>
                {
                            casasDeDia.restricciones == null ?
                                <Typography>No hay restricciones registradas</Typography> :
                                casasDeDia.restricciones.map((restriccion) => (
                                <Typography >{restriccion.nombre}</Typography>
                                ))}
                    <Grid item xs={12}>Costo</Grid>
                    <Grid item xs={12}>{casasDeDia.costo}</Grid>
                    <Grid item xs={12}>Cupo limite</Grid>
                    <Grid item xs={12}>{casasDeDia.cupoLimite}</Grid>
                    <Grid item xs={12}>Contacto</Grid>
                    <Grid item xs={12}>56552749</Grid>
            </Grid>

        </Grid>
    )

}