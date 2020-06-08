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

export default function BorrarColectivo({colectivosServidor,openBorrarColectivo, handleCerrarBorrarColectivo, colectivoSeleccionado}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState();
    function borrarColectivo() { 
        const { _id } = colectivoSeleccionado;
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarColectivo",
                    _id,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error Al Borrar Colectivo")
                            handleCerrarBorrarColectivo()    
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Colectivo Eliminado")
                            handleCerrarBorrarColectivo()
                            colectivosServidor()
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
            open={openBorrarColectivo}
            onClose={handleCerrarBorrarColectivo}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar Colectivo</h2>
                <p id="simple-modal-description">
                    ¿Seguro que Deseas Borrar Este Colectivo?
                </p>
                <Button variant="contained" color="secondary" onClick={handleCerrarBorrarColectivo}>Cancelar</Button>
                <Button variant="contained" color="primary" onClick={borrarColectivo}>Borrar</Button>
            </div>
            </Modal>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    )
}
