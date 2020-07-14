import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";




const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "100%"
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
                            console.log(lugar.restricciones)
                            resolve()
                        }
                    });
            }
        )
    }

    




    return (
        <Grid container>
            <Grid item xs={12} >
                <Grid container alignItems="center" justify="center">
                    <Typography variant="h3">{lugar.nombre}</Typography>
                </Grid>
                
            </Grid>
            <Grid item xs={6}>
                <img src={lugar.foto}  className={classes.fotoPrincipal} />
            </Grid>
            <Grid item xs={6}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                
                >
                    <Grid item xs={12}>
                        <Typography variant="h5">Direccion</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">{lugar.direccion} C.P: {lugar.codigoPostal}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Horario</Typography> 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">{lugar.horarioApertura}-{ lugar.horarioCierre }</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Tipo de institucion</Typography> 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">{lugar.tipoInstitucion}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Actividades</Typography> 
                    </Grid>
                    <Grid item xs={12}>
                    
                    {    
                        lugar.actividades == null ?
                            <Typography>No hay actividades registradas</Typography> :
                            lugar.actividades.map((actividad) => (
                                <Typography variant="h5">{actividad.nombre}</Typography>
                            ))}

                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Restricciones</Typography> 
                    </Grid>
                    {
                        lugar.restricciones == null ?
                            <Typography variant="h5">No hay restricciones registradas</Typography> :
                                lugar.restricciones.map((restriccion) => (
                                    <Typography variant="h5">{restriccion.nombre}</Typography>
                                ))}
                    <Grid item xs={12}>
                        <Typography variant="h5">Costo</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">${lugar.costo}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Cupo limite</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">{lugar.cupoLimite} personas</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Contacto</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">Tel.56552749</Typography>
                    </Grid>
            </Grid>
            </Grid>
        </Grid>
    )

}