import React from "react";
import { Grid, Typography, Card, CardActionArea, CardMedia, makeStyles, CardContent, TextField, Button, Box } from "@material-ui/core";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { useState } from "react";



const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 500,
    },
    media: {
        height: 200,
    },
    gridGeneral: {
        marginTop: theme.spacing(2)
    },
    segundoGrid: {
        paddingRight: theme.spacing(6)
    },
    espaciosGenerales: {
        marginBottom: theme.spacing(5)
    }

}));

export default function Index() {
    const classes = useStyles();
    const [codigoPostal, setCodigoPostal] = useState();

    function entrarLugar(lugar) {
        ruta = "lugarInteres/".concat(lugar)
        FlowRouter.go(ruta)
    }

    function busquedaCodigoPostal(codigoPostal) {
        ruta = "busquedaCodigoPostal/".concat(codigoPostal)
        FlowRouter.go(ruta)
    }
    
    function buscarTarjetas() {
        FlowRouter.go("listaTarjetas");
    }

    function buscarConvocatorias() {
        FlowRouter.go("convocatorias");
    }

    function buscarBeneficios() {
        FlowRouter.go("beneficiosUsuario");
    }



    return (
        <Grid container
            direction="row"
            className={classes.gridGeneral}
            >

            <Grid item xs={10}>

                <Grid container>

                <Grid item xs={12} className={classes.espaciosGenerales}>
                    <Typography variant="h2">
                        Lugares de interes
                </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    
                    <Grid item xs={6} className={classes.espaciosGenerales}>
                        <Card className={classes.root}>
                                <CardActionArea onClick={() => entrarLugar("casas")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/FotoCasasDia.jpg"
                                    title="Casas de dia"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Casas de dia
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    

                    <Grid item xs={6} className={classes.espaciosGenerales}> 

                        <Card className={classes.root}>
                            <CardActionArea onClick={() => entrarLugar("asilos")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/asilosFoto.jpg"
                                    title="Asilos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Asilos
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item xs={6}>

                        <Card className={classes.root}>
                                <CardActionArea onClick={() => entrarLugar("clubes")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/CLubesFOto.jpg"
                                    title="Clubes"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Clubes
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    <Grid item xs={6} className={classes.espaciosGenerales}>

                        <Card className={classes.root}>
                                <CardActionArea onClick={() => entrarLugar("colectivos")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/FotoCOlectivos.jpg"
                                    title="Colectivos"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Colectivos
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={12} className={classes.espaciosGenerales}>
                            <Typography variant="h2">
                                Apoyo al adulto mayor
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={6}>

                            <Card className={classes.root}>
                                <CardActionArea onClick={buscarTarjetas}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/fotos/tarjetasFoto.webp"
                                        title="Tarjetas"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Tarjetas
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                        <Grid item xs={6} className={classes.espaciosGenerales}>

                            <Card className={classes.root}>
                                <CardActionArea onClick={buscarConvocatorias}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/fotos/COnvocatorias.jpg"
                                        title="Convocatorias"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Convocatorias
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>

                        <Grid item xs={6}>

                            <Card className={classes.root}>
                                <CardActionArea onClick={buscarBeneficios}>
                                    <CardMedia
                                        className={classes.media}
                                        image="/fotos/beneficios.jpg"
                                        title="Beneficios"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Beneficios
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>

                    </Grid>
                
                </Grid>
                
                </Grid>

            <Grid item xs={2} className={classes.segundoGrid}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">

                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Busqueda rapida
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Encuentra servicios disponibles con tu codigo postal
                                </Typography>
                                <Grid item xs={12}>
                                    <TextField id="codigoPostal" label="Codigo Postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={() => busquedaCodigoPostal(codigoPostal)}>Buscar</Button>
                                </Grid>


                            </CardContent>

                        </Card>

                    </Grid>

                    <Box className={classes.espaciosGenerales}/>

                    <Grid item xs={12}>

                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="Claudiashein"
                            options={{ height: 500 }}
                        />

                    </Grid>

                </Grid>

            </Grid>

        </Grid>

        
    );
}
