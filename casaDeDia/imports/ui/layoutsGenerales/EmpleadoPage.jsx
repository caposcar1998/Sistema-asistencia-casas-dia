import React from 'react';
import MenuGeneralEmpleado from '../menus/MenuGeneralEmpleado'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "LightGray"
    }
})); 


export default function EmpleadoPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <MenuGeneralEmpleado />
            {props.content}
        </div>
    );
}