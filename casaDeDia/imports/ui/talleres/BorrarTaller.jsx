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

export default function BorrarTaller({talleresServidor,openBorrarTaller, handleCerrarBorrarTaller, tallerSeleccionado}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState();
    function borrarTaller() { 
        const { _id } = tallerSeleccionado;
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarTaller",
                    _id,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error Al Borrar Taller")
                            handleCerrarBorrarTaller()    
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Taller Eliminado")
                            handleCerrarBorrarTaller()
                            talleresServidor()
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
            open={openBorrarTaller}
            onClose={handleCerrarBorrarTaller}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar Taller</h2>
                <p id="simple-modal-description">
                    ¿Seguro que Deseas Borrar Este Taller?
                </p>
                <Button variant="contained" color="secondary" onClick={handleCerrarBorrarTaller}>Cancelar</Button>
                <Button variant="contained" color="primary" onClick={borrarTaller}>Borrar</Button>
            </div>
            </Modal>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    )
}
