import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabSuperior from "./tabsGenerales/TabSuperior";
import TabInferior from "./tabsGenerales/TabInferior";

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

export default function UsuariosPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <TabSuperior/>
            {props.content}
            <TabInferior/>
        </div>
    );
}
