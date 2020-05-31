import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography, Select, MenuItem } from '@material-ui/core';
import AnadirTarjeta from './AnadirTarjeta';


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

export default function ModalCrearTarjeta({ handleCloseModal, openModal, tarjetasServidor }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [tipoTarjeta, setTipoTarjeta] = useState('');
    const [open, setOpen] = useState(false);
    

    const handleCloseTarjeta = () => {
        setOpen(false);
    };

    const handleOpenTipoTarjeta = () => {
        setOpen(true);
    };

    const handleChangeTipoTarjeta = (event) => {
        setTipoTarjeta(event.target.value);
    };

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}

        >
            <div style={modalStyle} className={classes.paper} >
                <Select
                    labelId="tipoTarjeta"
                    open={open}
                    onClose={handleCloseTarjeta}
                    onOpen={handleOpenTipoTarjeta}
                    value={tipoTarjeta}
                    onChange={handleChangeTipoTarjeta}
                >
                    <MenuItem value={"efectivo"}>Efectivo</MenuItem>
                    <MenuItem value={"salud"}>Salud</MenuItem>
                    <MenuItem value={"despensa"}>Despensa</MenuItem>
                </Select>
                <AnadirTarjeta
                    handleCloseModal={handleCloseModal}
                    tarjetasServidor={tarjetasServidor}
                    tipoTarjeta={tipoTarjeta}
                />
            </div>
        </Modal>
    )
}

