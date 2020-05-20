
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    posicionModal: {
        top: "50%",
        margin: 'auto'
    }

}));

export default function EditarCasaDia({ openEditarCasaDia, handleCerrarEditarCasaDia }) {
    const classes = useStyles();


    return (
        <Modal
            className={classes.posicionModal}
            open={openEditarCasaDia}
            onClose={handleCerrarEditarCasaDia}

        >
            <div><h1>Editar casa de dia</h1></div>

        </Modal>
    )
}
