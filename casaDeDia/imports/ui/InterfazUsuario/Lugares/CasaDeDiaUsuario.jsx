import React from "react";
import {  Typography, Card, CardActionArea, CardMedia, CardContent, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});


export default function CasasDeDiaUsuario({ casa }) {
    const classes = useStyles();

    return (
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
    )

}