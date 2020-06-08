import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import PaperEditarCentro from './PaperEditarCentro';


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

export default function EditarCentro({centroServidor,centroSeleccionado,openEditarCentro, handleCerrarEditarCentro}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            className={classes.posicionModal}
            open={openEditarCentro}
            onClose={handleCerrarEditarCentro}

        >
                <div style={modalStyle} className={classes.paper}>
                <PaperEditarCentro
                    handleCerrarEditarCentro={handleCerrarEditarCentro}
                    centroSeleccionado={centroSeleccionado}
                    centroServidor={centroServidor} />
            </div>
        </Modal>
    )
}
