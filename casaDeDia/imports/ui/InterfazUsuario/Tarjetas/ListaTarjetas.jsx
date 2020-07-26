import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import TarjetasInfoTarjetas from "./TarjetasInfoTarjetas";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";


const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    },
    titulo: {
        color: "white"
    }
});




export default function ListaTarjetas() {
    const classes = useStyles();
    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        tarjetasServidor();
    }, []);


    function tarjetasServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTarjetasServidor",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTarjetas(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function entrarPantallaInformacionTarjeta(tarjetaSeleccionada) {
        ruta = "Tarjeta/".concat(tarjetaSeleccionada)
        FlowRouter.go(ruta)
    }

    return (
        
        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1" className={classes.titulo}>Tarjetas de apoyo</Typography>
                </Grid>
            </Grid>


            <Grid item xs={12}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                <Grid item xs={4}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Apoyo economico</Typography>
                    </Grid>
                        <Grid item xs={12}>
                            {tarjetas.map((tarjeta) => (
                                tarjeta.tipo == "dinero" ?
                                    <TarjetasInfoTarjetas tarjeta={tarjeta}
                                    entrarPantallaInformacionTarjeta={entrarPantallaInformacionTarjeta}
                                    />
                                    :
                                    null
                            ))}
                        </Grid>    
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Salud</Typography>
                            <Grid item xs={12}>
                                {tarjetas.map((tarjeta) => (
                                    tarjeta.tipo == "salud" ?
                                        <TarjetasInfoTarjetas
                                        tarjeta={tarjeta}
                                        entrarPantallaInformacionTarjeta={entrarPantallaInformacionTarjeta}/>
                                        :
                                        null
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Despensa</Typography>
                            <Grid item xs={12}>
                                {tarjetas.map((tarjeta) => (
                                    tarjeta.tipo == "despensa" ?
                                        <TarjetasInfoTarjetas tarjeta={tarjeta}
                                        entrarPantallaInformacionTarjeta={entrarPantallaInformacionTarjeta}
                                        />
                                        :
                                        null
                                ))}
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            </Grid>
        


        )
 }