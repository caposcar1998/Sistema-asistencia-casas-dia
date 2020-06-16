import React, { useState } from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CryptoJS from "react-native-crypto-js";

export default function UsuariosClub({ usuario, eliminarUsuario }) {

    function handleEliminarUsuario(idEliminar) {
        eliminarUsuario(idEliminar)
    }


    return (

        <TableRow key={usuario.nombre}>
            <TableCell>
                <IconButton onClick={() => handleEliminarUsuario(usuario.idReferencia)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{CryptoJS.AES.decrypt(usuario.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}</TableCell>
            <TableCell align="right">{CryptoJS.AES.decrypt(usuario.curp, 'secret key 123').toString(CryptoJS.enc.Utf8)}</TableCell>
        </TableRow>
    )



}