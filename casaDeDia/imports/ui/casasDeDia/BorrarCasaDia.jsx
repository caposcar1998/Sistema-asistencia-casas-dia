
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

export default function BorrarCasaDia() {
    const classes = useStyles();
    const [openBorrarCasaDia, setOpenBorrarCasaDia] = React.useState(false);

    const handleOpenBorrarCasaDia = () => {
        setOpenBorrarCasaDia(true);
    };

    const handleCloseBorrarCasaDia = () => {
        setOpenBorrarCasaDia(false);
    };

    return (
        <>
            <button type="button" onClick={handleOpenBorrarCasaDia}>
            Open Modal
      </button>
        <Modal
            className={classes.posicionModal}
            open={openBorrarCasaDia}
                onClose={handleCloseBorrarCasaDia}

        >
                <div><h1>Borrar casa de dia</h1></div>
                 
        </Modal>
            </>
    )
}
