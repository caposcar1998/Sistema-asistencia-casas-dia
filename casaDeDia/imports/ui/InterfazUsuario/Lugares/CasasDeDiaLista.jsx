import React, { useEffect, useState } from "react";
import { Grid, Typography,  makeStyles } from "@material-ui/core";
import CasasDeDiaUsuario from "./CasaDeDiaUsuario";



const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    }
});

export default function CasasDeDiaLista() {
    const classes = useStyles();

    const [casasDeDia, setCasasDeDia] = useState([])

    useEffect(() => {
        casasDeDiaServidor();
    }, []);

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
        
        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1">Encuentra tu casa de dia</Typography>
                </Grid>
            </Grid>

                <Grid item xs={12}>
                {casasDeDia.map((casa) => (
                    <CasasDeDiaUsuario
                        casa={casa}
                    />
                       
                    ))}

                </Grid>

        </Grid>
    )
 }