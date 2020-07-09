import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardActionArea, CardMedia, makeStyles, CardContent } from "@material-ui/core";



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
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
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={casa.foto}
                                    title={casa.nombre}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {casa.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {casa.direccion}   
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}

                </Grid>

        </Grid>
    )
 }