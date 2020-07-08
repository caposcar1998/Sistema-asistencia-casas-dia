import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabSuperior from "./tabsGenerales/TabSuperior";
import TabInferior from "./tabsGenerales/TabInferior";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fondo: {
        direction: "column",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    }
}));

export default function UsuariosPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <TabSuperior />
            {props.content}
            
        </div>
    );
}
