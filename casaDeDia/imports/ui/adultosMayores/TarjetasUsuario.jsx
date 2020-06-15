import React, { useState } from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export default function TarjetasUsuario({ tarjeta, eliminarTarjeta, editable, editCampo, adultoSeleccionado, editarNoTarjeta }) {
    const [noTarjetaNuevo, setNoTarjetaNuevo] = useState("");


    function handleEliminarTarjeta(idEliminar) {
        eliminarTarjeta(idEliminar)
    }

    function handleEditarTarjeta(idEditar, noTarjeta) {
        editarNoTarjeta(idEditar, noTarjeta, noTarjetaNuevo)
    }

    return (

        <TableRow key={tarjeta.nombre}>
            <TableCell>
                <IconButton onClick={() => handleEliminarTarjeta(tarjeta.idReferencia)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">{tarjeta.nombre}</TableCell>
            <TableCell align="right">
                {
                    editable ?
                        tarjeta.noTarjeta :
                        <>
                            <TextField value={noTarjetaNuevo} onChange={(e) => setNoTarjetaNuevo(e.target.value)} />
                            <CheckIcon onClick={() => handleEditarTarjeta(tarjeta.idReferencia, tarjeta.noTarjeta)} />
                        </>
                }
            </TableCell>
            <TableCell align="right">
                <EditIcon onClick={editCampo} />
            </TableCell>
        </TableRow>
    )



}