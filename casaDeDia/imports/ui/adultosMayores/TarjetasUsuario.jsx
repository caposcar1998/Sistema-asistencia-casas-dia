import React, { useState } from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CryptoJS from "react-native-crypto-js";


export default function TarjetasUsuario({ tarjeta, eliminarTarjeta }) {


    function handleEliminarTarjeta(idEliminar) {
        eliminarTarjeta(idEliminar)
    }

 

    return (

        <TableRow key={CryptoJS.AES.decrypt(tarjeta.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}>
            <TableCell>
                <IconButton onClick={() => handleEliminarTarjeta(tarjeta.idReferencia)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{CryptoJS.AES.decrypt(tarjeta.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}</TableCell>
           
        </TableRow>
    )



}