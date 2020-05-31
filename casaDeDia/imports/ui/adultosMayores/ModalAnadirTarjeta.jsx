
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import TablaAnadirTarjeta from './TablaAnadirTarjeta';




function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme) => ({

    paper: {
        position: 'absolute',
        width: "auto",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));


export default function ModalAnadirPersonal({ adultoSeleccionado, handleCerrarAnadirTarjeta, openAnadirTarjeta }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <Modal
            className={classes.posicionModal}
            open={openAnadirTarjeta}
            onClose={handleCerrarAnadirTarjeta}

        >
            <div style={modalStyle} className={classes.paper}>
                <TablaAnadirTarjeta
                    adultoSeleccionado={adultoSeleccionado}
                    handleCerrarAnadirTarjeta={handleCerrarAnadirTarjeta}
                />
            </div>
        </Modal>
    )
}
