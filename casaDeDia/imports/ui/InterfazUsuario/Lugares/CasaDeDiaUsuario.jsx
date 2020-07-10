import React from "react";
import { Typography, Card, CardActionArea, CardMedia, CardContent, makeStyles } from "@material-ui/core";


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
        <div>{casa}</div>
    )

}