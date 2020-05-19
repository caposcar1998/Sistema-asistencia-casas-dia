
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

export default function ModalCrearCasaDeDia() {
    const classes = useStyles();

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <>
            <button type="button" onClick={handleOpenModal}>
            Open Modal
      </button>
            <Modal
            className={classes.posicionModal}
            open={openModal}
            onClose={handleCloseModal}
            
        >
            <AnadirCasasDia/>
        </Modal>
        </>
    )
 }