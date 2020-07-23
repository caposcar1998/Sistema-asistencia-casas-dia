import React, { useState, useEffect } from "react";
import { Grid, Typography, makeStyles, Card, CardHeader, CardContent, Box } from "@material-ui/core";


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
    }
}));


export default function Convocatorias() {
    const classes = useStyles();
    const [convocatorias, setConvocatorias] = useState([]);

    useEffect(() => {
        tarjetasServidor();
    }, []);


    function tarjetasServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerConvocatoria",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setConvocatorias(res)
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
                    <Typography variant="h1">Convocatorias</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                {convocatorias.map((convocatoria) => (
                    <Card className={classes.root} >
                        <CardHeader
                            title={                               
                                    <Typography variant="h3">{convocatoria.nombre}</Typography>
                            }
                        />
                        <CardContent>
                            <Typography variant="h5" component="p">
                                {"Descripcion: " + convocatoria.descripcion}
                            </Typography>
                            <Box className={classes.espacio}/>
                            <Typography variant="h5">{"Lanzamiento: " + convocatoria.fechaLanzamiento}</Typography>
                            <Box className={classes.espacio}/>
                            <Typography variant="h5">{"Finaliza: " + convocatoria.fechaFinalizacion}</Typography>
                        </CardContent>
                    </Card>
                ))}

            </Grid>

        </Grid>


    )
}