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

export default function BorrarCentro({centroServidor,openBorrarCentro, handleCerrarBorrarCentro, centroSeleccionado}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState();
    function borrarCentro() { 
        const { _id } = centroSeleccionado;
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarCentro",
                    _id,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error Al Borrar Centro")
                            handleCerrarBorrarCentro()    
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Centro Eliminado")
                            handleCerrarBorrarCentro()
                            centroServidor()
                            resolve()
                        }
                    });
            }
        )
    }
    return (
        <>
        <Modal
            className={classes.posicionModal}
            open={openBorrarCentro}
            onClose={handleCerrarBorrarCentro}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar Centro</h2>
                <p id="simple-modal-description">
                    ¿Seguro que Deseas Borrar Este Centro?
                </p>
                <Button variant="contained" color="secondary" onClick={handleCerrarBorrarCentro}>Cancelar</Button>
                <Button variant="contained" color="primary" onClick={borrarCentro}>Borrar</Button>
            </div>
            </Modal>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    )
}
