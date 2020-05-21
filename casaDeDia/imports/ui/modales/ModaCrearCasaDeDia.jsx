
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnadirCasasDia from '../casasDeDia/AnadirCasasDia';
import { Modal } from '@material-ui/core';


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

export default function ModalCrearCasaDeDia({ handleCloseModal, openModal, casasDeDiaServidor }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
            <Modal

            open={openModal}
            onClose={handleCloseModal}
            
        >
            <div style={modalStyle} className={classes.paper} >
                <AnadirCasasDia handleCloseModal={handleCloseModal} casasDeDiaServidor={casasDeDiaServidor} />
            </div>
        </Modal>
    )
}
 
