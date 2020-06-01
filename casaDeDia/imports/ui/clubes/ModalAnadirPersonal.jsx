
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import TablaAnadirPersonal from './TablaAnadirPersonal';



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
        width: "auto",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));


export default function ModalAnadirPersonal({ openAnadirEmpleado,clubSeleccionado, handleCerrarAnadirEmpleado  }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <Modal
            className={classes.posicionModal}
            open={openAnadirEmpleado}
            onClose={handleCerrarAnadirEmpleado}

        >
            <div style={modalStyle} className={classes.paper}>
                <TablaAnadirPersonal
                    clubSeleccionado={clubSeleccionado}
                    handleCerrarAnadirEmpleado={handleCerrarAnadirEmpleado}
                />
            </div>
        </Modal>
    )
}
 
