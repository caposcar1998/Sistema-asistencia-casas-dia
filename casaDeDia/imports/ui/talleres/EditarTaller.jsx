import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import PaperEditarTaller from './PaperEditarTaller';


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
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontSize: 20,
        color: 'black',
    },

}));

export default function EditarTaller({talleresServidor,tallerSeleccionado,openEditarTaller, handleCerrarEditarTaller}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            className={classes.posicionModal}
            open={openEditarTaller}
            onClose={handleCerrarEditarTaller}

        >
                <div style={modalStyle} className={classes.paper}>
                <PaperEditarTaller
                    handleCerrarEditarTaller={handleCerrarEditarTaller}
                    tallerSeleccionado={tallerSeleccionado}
                    talleresServidor={talleresServidor} />
            </div>
        </Modal>
    )
}
