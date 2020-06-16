
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

export default function BorrarClub({ clubesServidor,openBorrarClub, handleCerrarBorrarClub, clubSeleccionado}) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState();

    function borrarClub() { 
        const { _id } = clubSeleccionado;
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarClub",
                    _id,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al borrar el club")
                            handleCerrarBorrarClub()    
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Club eliminado")
                            handleCerrarBorrarClub()
                            clubesServidor()
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
            open={openBorrarClub}
            onClose={handleCerrarBorrarClub}

        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Borrar club</h2>
                <p id="simple-modal-description">
                    ¿Seguro deseas borrar este club?
                </p>
                <Button variant="contained" color="secondary" onClick={handleCerrarBorrarClub}>Cancelar</Button>
                <Button variant="contained" color="primary" onClick={borrarClub}>Borrar</Button>
            </div>
            </Modal>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    )
}
