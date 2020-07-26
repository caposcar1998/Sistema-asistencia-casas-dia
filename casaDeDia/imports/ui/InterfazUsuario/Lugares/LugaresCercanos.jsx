import React, {useEffect} from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import TarjetasLugares from "./TarjetasLugares";



const useStyles = makeStyles((theme) => ({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    },
    root: {
        maxWidth: 345,
    },
    espacio: {
        marginBottom: theme.spacing(2)
    },
    titulo: {
        color: "white"
    }
}));


export default function LugaresCercanos({codigoPostal}) {
    const classes = useStyles();
    const [casasDia, setCasasDia] = useState([]);
    const [asilos, setAsilos] = useState([]);
    const [clubes, setClubes] = useState([]);

    useEffect(() => {
        encontrarCasasDeDiaServidor();
        encontrarAsilosServidor();
        encontrarClubesServidor();
    }, []);

    function encontrarCasasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("casasDiaPorCodigo",
                    codigoPostal,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCasasDia(res)
                            resolve()
                        }
                    });
            }
        )
     }
    
    function encontrarAsilosServidor() {
        return new Promise(
            (resolve, reject) => {
                codigoPostal,
                Meteor.call("asilosPorCodigo",
                    codigoPostal,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setAsilos(res)
                            resolve()
                        }
                    });
            }
        )
     }

    function encontrarClubesServidor() {
        return new Promise(
            (resolve, reject) => {
                codigoPostal,
                Meteor.call("clubesPorCodigo",
                    codigoPostal,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setClubes(res)
                            resolve()
                        }
                    });
            }
        )
    }


    
    function seleccionDeLugar(casaSeleccionada) {
        ruta = "Lugar/".concat(casaSeleccionada._id)
        FlowRouter.go(ruta)
    }

    return (

        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1" className={classes.titulo}>Servicios cercanos</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography variant="h1">Casas de dia</Typography>
                    </Grid>
                    {casasDia.map((lugar) => (
                        <Grid item xs={6}>
                            <TarjetasLugares
                                lugar={lugar}
                                seleccionDeLugar={seleccionDeLugar}
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Typography variant="h1">Asilos</Typography>
                    </Grid>
                    {asilos.map((lugar) => (
                        <Grid item xs={6}>
                            <TarjetasLugares
                                lugar={lugar}
                                seleccionDeLugar={seleccionDeLugar}
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Typography variant="h1">Clubes</Typography>
                    </Grid>
                    {clubes.map((lugar) => (
                        <Grid item xs={6}>
                            <TarjetasLugares
                                lugar={lugar}
                                seleccionDeLugar={seleccionDeLugar}
                            />
                        </Grid>
                    ))}
                    

                </Grid>
            </Grid>


        </Grid>
    )
 }