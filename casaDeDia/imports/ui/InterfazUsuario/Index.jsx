import React from "react";
import { Grid, Typography, Card, CardActionArea, CardMedia, makeStyles, CardContent, TextField, Button } from "@material-ui/core";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";



const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    gridGeneral: {
        marginTop: theme.spacing(2)
    }

}));

export default function Index() {
    const classes = useStyles();


    function entrarLugar(lugar) {
        ruta = "lugarInteres/".concat(lugar)
        FlowRouter.go(ruta)
    }

    return (
        <Grid container
            direction="row"
            className={classes.gridGeneral}
            >

            <Grid item xs={10}>

                <Grid container>

                <Grid item xs={12}>
                    <Typography variant="h2">
                        Lugares de interes
                </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    
                    <Grid item xs={6}>
                        <Card className={classes.root}>
                                <CardActionArea onClick={() => entrarLugar("casas")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/gobiernoMexico.jpeg"
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


                    <Grid item xs={6}>

                        <Card className={classes.root}>
                            <CardActionArea onClick={() => entrarLugar("asilos")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/gobiernoMexico.jpeg"
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
                                    image="/fotos/gobiernoMexico.jpeg"
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
                    <Grid item xs={6}>

                        <Card className={classes.root}>
                                <CardActionArea onClick={() => entrarLugar("colectivos")}>
                                <CardMedia
                                    className={classes.media}
                                    image="/fotos/gobiernoMexico.jpeg"
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
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Apoyo al adulto mayor
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={6}>

                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/fotos/gobiernoMexico.jpeg"
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
                        <Grid item xs={6}>

                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/fotos/gobiernoMexico.jpeg"
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

                    </Grid>
                
                </Grid>
                
                </Grid>

            <Grid item xs={2}>
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
                                    <TextField />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button>Buscar</Button>
                                </Grid>


                            </CardContent>

                        </Card>

                    </Grid>

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
