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


export default function Beneficios() {
    const classes = useStyles();
    const [promociones, setPromociones] = useState([]);



    useEffect(() => {
        promocionesServidor();
    }, []);


    function promocionesServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerPromocion",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setPromociones(res)
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
                    <Typography variant="h1">Promociones</Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                {promociones.map((promocion) => (
                    <Card className={classes.root} >
                        <CardHeader
                            title={
                                <Typography variant="h3">{promocion.nombre}</Typography>
                            }
                        />
                        <CardContent>
                            <Typography variant="h5" component="p">
                                {"Descripcion: " + promocion.descripcion}
                            </Typography>
                            <Box className={classes.espacio} />
                            <Typography variant="h5">{"Lanzamiento: " + promocion.fechaInicio}</Typography>
                            <Box className={classes.espacio} />
                            <Typography variant="h5">{"Finaliza: " + promocion.fechaFinal}</Typography>
                            <Box className={classes.espacio} />
                            <Typography variant="h6">{"Descripcion: " + promocion.descripcion}</Typography>
                            <Box className={classes.espacio} />
                            {promocion.acumulable == true ?
                                <Typography variant="h6">Acumulable: Si</Typography>
                            :
                                <Typography variant="h6">Acumulable: No</Typography>

                            }
                            
                            <Box className={classes.espacio} />
                            <Typography variant="h6">{"Restricciones: " + promocion.restricciones}</Typography>
                        </CardContent>
                    </Card>
                ))}

            </Grid>

        </Grid>


    )
}