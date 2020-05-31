
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import PaperEditarTarjeta from './PaperEditarTarjeta';


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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));

export default function EditarTarjeta({ openEditarTarjeta,tarjetasServidor, tarjetaSeleccionada, handleCerrarEditarTarjeta }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <Modal
            className={classes.posicionModal}
            open={openEditarTarjeta}
            onClose={handleCerrarEditarTarjeta}

        >
            <div style={modalStyle} className={classes.paper}>
                <PaperEditarTarjeta
                    handleCerrarEditarTarjeta={handleCerrarEditarTarjeta}
                    tarjetaSeleccionada={tarjetaSeleccionada}
                    tarjetasServidor={tarjetasServidor} />
            </div>
        </Modal>
    )
}
