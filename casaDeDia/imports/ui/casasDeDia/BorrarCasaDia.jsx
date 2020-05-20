
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnadirCasasDia from '../cuestionarios/AnadirCasasDia';
import { Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    posicionModal: {
        top: "50%",
        margin: 'auto'
    }

}));

export default function BorrarCasaDia({ openBorrarCasaDia }) {
    const classes = useStyles();


    const handleCloseBorrarCasaDia = () => {
        setOpenBorrarCasaDia(false);
    };

    return (
        <Modal
            className={classes.posicionModal}
            open={openBorrarCasaDia}
                onClose={handleCloseBorrarCasaDia}

        >
                <div><h1>Borrar casa de dia</h1></div>
                 
        </Modal>
    )
}
