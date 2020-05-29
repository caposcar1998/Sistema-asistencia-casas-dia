import React, { useState } from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function UsuariosCasaDeDia({ usuario, eliminarUsuario }) {

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
            <TableCell align="right">{usuario.nombre}</TableCell>
            <TableCell align="right">{usuario.curp}</TableCell>
        </TableRow>
    )



}