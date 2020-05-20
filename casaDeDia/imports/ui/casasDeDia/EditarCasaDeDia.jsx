
import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


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

export default function EditarCasaDia({ casaSeleccionada,openEditarCasaDia, handleCerrarEditarCasaDia }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();


    function editarCasaDia() {
        console.log(casaSeleccionada)
    }

    return (
        <>
        <Modal
            className={classes.posicionModal}
            open={openEditarCasaDia}
            onClose={handleCerrarEditarCasaDia}

        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar casa de dia</h2>
                <p id="simple-modal-description">
                    Seguro deseas borrar esta casa de dia?
                </p>
                    <Button variant="contained" color="secondary" onClick={handleCerrarEditarCasaDia}>Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={editarCasaDia}>Borrar</Button>
            </div>
        </Modal>
            {
                snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            
            </>
    )
}
