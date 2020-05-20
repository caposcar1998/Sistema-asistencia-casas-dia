
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    posicionModal: {
        top: "50%",
        margin: 'auto'
    }

}));

export default function BorrarCasaDia({ openBorrarCasaDia, handleCerrarBorrarCasaDia }) {
    const classes = useStyles();



    return (
        <Modal
            className={classes.posicionModal}
            open={openBorrarCasaDia}
            onClose={handleCerrarBorrarCasaDia}

        >
                <div><h1>Borrar casa de dia</h1></div>
                 
        </Modal>
    )
}
