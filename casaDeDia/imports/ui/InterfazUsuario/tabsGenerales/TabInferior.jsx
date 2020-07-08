import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#cfd8dc",
        display: "flex",
        direction: "column",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function TabInferior() {
    const classes = useStyles();

    function prueba() {
        FlowRouter.go('administrador')
    }

    return (
        <div className={classes.fondo}>
            Tab inferior
        </div>
    );
}
