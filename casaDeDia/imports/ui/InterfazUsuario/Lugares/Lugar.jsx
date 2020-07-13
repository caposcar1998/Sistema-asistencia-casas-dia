import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";




const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "100%",
    }
});

export default function Lugar({ casaSeleccionada }) {
    const classes = useStyles();
    const [lugar, setLugar] = useState([]);

    useEffect(() => {
        lugarServidor();
    }, []);


    function lugarServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarLugar",
                    casaSeleccionada,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setLugar(res)
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
                <Typography variant="h3">{lugar.nombre}</Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={lugar.foto}  className={classes.fotoPrincipal} />
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <Grid item xs={12}>Direccion</Grid>
                    <Grid item xs={12}>{lugar.direccion}</Grid>
                    <Grid item xs={12}>{lugar.codigoPostal}</Grid>
                    <Grid item xs={12}>Horario</Grid>
                    <Grid item xs={12}>{lugar.horarioApertura}</Grid>
                    <Grid item xs={12}>{lugar.horarioCierre}</Grid>
                    <Grid item xs={12}>Publico/Privado</Grid></Grid>
                <Grid item xs={12}>{lugar.tipoInstitucion}</Grid>
                    <Grid item xs={12}>Actividades</Grid>
                    <Grid item xs={12}>
                    
                    {    
                        lugar.actividades == null ?
                            <Typography>No hay actividades registradas</Typography> :
                            lugar.actividades.map((actividad) => (
                                <Typography >{actividad.nombre}</Typography>
                            ))}

                    </Grid>
                    <Grid item xs={12}>Restricciones</Grid>
                {
                    lugar.restricciones == null ?
                                <Typography>No hay restricciones registradas</Typography> :
                                lugar.restricciones.map((restriccion) => (
                                <Typography >{restriccion.nombre}</Typography>
                                ))}
                    <Grid item xs={12}>Costo</Grid>
                    <Grid item xs={12}>{lugar.costo}</Grid>
                    <Grid item xs={12}>Cupo limite</Grid>
                    <Grid item xs={12}>{lugar.cupoLimite}</Grid>
                    <Grid item xs={12}>Contacto</Grid>
                    <Grid item xs={12}>56552749</Grid>
            </Grid>

        </Grid>
    )

}