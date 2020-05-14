import React from 'react';
import MenuGeneralVoluntario from '../menus/MenuGeneralVoluntario'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "LightGray"
    }
})); 


export default function VoluntarioPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <MenuGeneralVoluntario />
            {props.content}
        </div>
    );
}