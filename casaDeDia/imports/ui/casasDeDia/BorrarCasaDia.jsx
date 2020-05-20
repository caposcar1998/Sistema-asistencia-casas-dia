
import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';


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

export default function BorrarCasaDia({ openBorrarCasaDia, handleCerrarBorrarCasaDia }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);


    return (
        <Modal
            className={classes.posicionModal}
            open={openBorrarCasaDia}
            onClose={handleCerrarBorrarCasaDia}

        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar casa de dia</h2>
                <p id="simple-modal-description">
                    Seguro deseas borrar esta casa de dia?
                </p>
                <Button variant="contained" color="secondary" >Cancelar</Button>
                <Button variant="contained" color="primary">Borrar</Button>
            </div>
                 
        </Modal>
    )
}
