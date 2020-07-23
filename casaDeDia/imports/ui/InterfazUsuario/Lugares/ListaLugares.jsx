import React, { useEffect, useState } from "react";
import { Grid, Typography,  makeStyles } from "@material-ui/core";
import TarjetasLugares from "./TarjetasLugares";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";



const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    }
});

export default function ListaLugares({lugar}) {
    const classes = useStyles();
    const [tipoLugar, seTipoLugar] = useState([])

    useEffect(() => {
        if (lugar == "casas") {
            casasDeDiaServidor();
        }
        if (lugar == "asilos") {
            asilosServidor();
        }
        if (lugar == "clubes") {
            clubesServidor();
        }
        if (lugar == "colectivos") {
            colectivosServidor();
        }

        
    }, []);


    function seleccionDeLugar(casaSeleccionada) {
        ruta = "Lugar/".concat(casaSeleccionada._id)
        FlowRouter.go(ruta)
    }

    function casasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerCasasDeDia",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            seTipoLugar(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function asilosServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerAsilo",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            seTipoLugar(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function clubesServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerClubes",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            seTipoLugar(res)
                            resolve()
                        }
                    });
            }
        )
    }


    function colectivosServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerColectivos",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            seTipoLugar(res)
                            resolve()
                        }
                    });
            }
        )
    }

    return (
        
        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1">{lugar}</Typography>
                </Grid>
            </Grid>

                <Grid item xs={12}>
                {tipoLugar.map((lugar) => (
                    <TarjetasLugares
                        lugar={lugar}
                        seleccionDeLugar={seleccionDeLugar}
                    />
                       
                    ))}

                </Grid>

        </Grid>
    )
 }