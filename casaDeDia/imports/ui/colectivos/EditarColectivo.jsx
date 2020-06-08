import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import PaperEditarColectivo from './PaperEditarColectivo';


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

export default function EditarColectivo({colectivosServidor,colectivoSeleccionado,openEditarColectivo, handleCerrarEditarColectivo}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            className={classes.posicionModal}
            open={openEditarColectivo}
            onClose={handleCerrarEditarColectivo}

        >
                <div style={modalStyle} className={classes.paper}>
                <PaperEditarColectivo
                    handleCerrarEditarColectivo={handleCerrarEditarColectivo}
                    colectivoSeleccionado={colectivoSeleccionado}
                    colectivosServidor={colectivosServidor} />
            </div>
        </Modal>
    )
}
