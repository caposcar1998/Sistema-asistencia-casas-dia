
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

export default function BorrarCasaDia({ openBorrarCasaDia, handleCerrarBorrarCasaDia, casaSeleccionada}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState();
    
    function borrarCasaDeDia() { 
        const { _id } = casaSeleccionada;
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarCasaDeDia",
                    _id,
                    (err, res) => {
                        if (err) {
                        setAlert("error")
                        setSnackBarState(true)
                        setMessage("Error al borrar la casa de dia")
                            reject()
                        } else {
                            setAlert("success")
                        setSnackBarState(true)
                        setMessage("Casa de dia eliminada")
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
            open={openBorrarCasaDia}
            onClose={handleCerrarBorrarCasaDia}

        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar casa de dia</h2>
                <p id="simple-modal-description">
                    Seguro deseas borrar esta casa de dia?
                </p>
                <Button variant="contained" color="secondary" >Cancelar</Button>
                <Button variant="contained" color="primary" onClick={borrarCasaDeDia}>Borrar</Button>
            </div>
            </Modal>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    )
}
