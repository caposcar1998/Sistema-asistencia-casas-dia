import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnadirTalleres from '../talleres/AnadirTalleres';
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

export default function ModalCrearTaller({ handleCloseModal, openModal, talleresServidor }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
            <Modal

            open={openModal}
            onClose={handleCloseModal}
            
        >
            <div style={modalStyle} className={classes.paper} >
                <AnadirTalleres handleCloseModal={handleCloseModal} talleresServidor={talleresServidor} />
            </div>
        </Modal>
    )
}
 
