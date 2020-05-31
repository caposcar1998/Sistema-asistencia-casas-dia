import React, { useEffect, useState } from 'react';
import { Typography,Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText, Input, LinearProgress } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


export default function AnadirTarjeta({ tipoTarjeta,tarjetasServidor, handleCloseModal }) {
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

  

    return (

        <>
            {tipoTarjeta == "salud" ? 
                < CrearSalud/> :
                tipoTarjeta == "efectivo" ?
                    <CrearDinero/> :
                tipoTarjeta == "despensa" ?
                        <CrearDespensa /> :
                        <Typography>Selecciona una opcion</Typography>
                    }
        </>
    )
}



function CrearSalud() {
    return <div>SAlud</div>
}

function CrearDinero() {
    return <div>DInero</div>
}

function CrearDespensa() {
    return <div>Despensa</div>
}
