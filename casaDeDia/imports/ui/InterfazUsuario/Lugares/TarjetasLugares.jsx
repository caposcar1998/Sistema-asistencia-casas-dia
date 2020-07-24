import React from "react";
import {  Typography, Card, CardActionArea, CardMedia, CardContent, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 200,
    }
});


export default function TarjetasLugares({ lugar, seleccionDeLugar }) {
    const classes = useStyles();
    

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => seleccionDeLugar(lugar)}>
                <CardMedia
                    className={classes.media}
                    image={lugar.foto}
                    title={lugar.nombre}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {lugar.nombre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {lugar.direccion}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}