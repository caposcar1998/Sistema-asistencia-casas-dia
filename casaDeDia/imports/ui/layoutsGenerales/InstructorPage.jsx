import React from 'react';
import MenuGeneralInstructor from '../menus/MenuGeneralInstructor'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "LightGray"
    }
})); 


export default function InstructorPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.fondo}>
            <MenuGeneralInstructor />
            {props.content}
        </div>
    );
}