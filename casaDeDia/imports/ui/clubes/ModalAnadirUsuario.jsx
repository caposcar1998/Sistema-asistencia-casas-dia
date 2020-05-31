import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import TablaAnadirUsuario from './TablaAnadirUsuario';



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


export default function ModalAnadirUsuario({ openAnadirPersona, clubSeleccionado, handleCerrarAnadirUsuario }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <Modal
            className={classes.posicionModal}
            open={openAnadirPersona}
            onClose={handleCerrarAnadirUsuario}

        >
            <div style={modalStyle} className={classes.paper}>
                <TablaAnadirUsuario
                    clubSeleccionado={clubSeleccionado}
                    handleCerrarAnadirUsuario={handleCerrarAnadirUsuario}
                />
            </div>
        </Modal>
    )
}

