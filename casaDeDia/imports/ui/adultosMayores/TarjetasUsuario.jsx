import React, { useState } from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function TarjetasUsuario({ tarjeta, eliminarTarjeta }) {


    function handleEliminarTarjeta(idEliminar) {
        eliminarTarjeta(idEliminar)
    }

 

    return (

        <TableRow key={tarjeta.nombre}>
            <TableCell>
                <IconButton onClick={() => handleEliminarTarjeta(tarjeta.idReferencia)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{tarjeta.nombre}</TableCell>
           
        </TableRow>
    )



}