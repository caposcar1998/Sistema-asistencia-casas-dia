import React from 'react';
import MenuGeneralAdministrador from '../menus/MenuGeneralAdministrador'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "LightGray"
    }
})); 


export default function AdministradorPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <MenuGeneralAdministrador />
            {props.content}
        </div>
    );
}