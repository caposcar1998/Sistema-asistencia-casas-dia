
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnadirCasasDia from '../cuestionarios/AnadirCasasDia';
import { Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    posicionModal: {
        top: "50%",
        margin: 'auto'
    }

}));

export default function ModalCrearCasaDeDia({ handleCloseModal, openModal }) {
    const classes = useStyles();


    return (
            <Modal
            className={classes.posicionModal}
            open={openModal}
            onClose={handleCloseModal}
            
        >
            <AnadirCasasDia/>
        </Modal>
    )
}
 
