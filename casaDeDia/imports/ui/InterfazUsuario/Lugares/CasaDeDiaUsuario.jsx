import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";



export default function CasasDeDiaUsuario({ casaSeleccionada }) {
    const [casasDeDia, setCasasDeDia] = useState([]);

    useEffect(() => {
        casasDeDiaServidor();
    }, []);


    function casasDeDiaServidor() {
        console.log("entra")
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarCasaDeDia",
                    casaSeleccionada,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            console.log(res)
                            setCasasDeDia(res)
                            resolve()
                        }
                    });
            }
        )
    }




    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={12}>
                <Typography variant="h3">{casasDeDia.nombre}</Typography>
            </Grid>
            <Grid item xs={6}>{casasDeDia.foto}</Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <Grid item xs={12}>{casasDeDia.direccion}</Grid>
                    <Grid item xs={12}>Horario</Grid>
                    <Grid item xs={12}>Publico/Privado</Grid></Grid>
                    <Grid item xs={12}>Actividades</Grid>
                    <Grid item xs={12}>Restricciones</Grid>
                    <Grid item xs={12}>Costo</Grid>
                    <Grid item xs={12}>Cupo limite</Grid>
                    <Grid item xs={12}>Contacto</Grid>
            </Grid>

        </Grid>
    )

}