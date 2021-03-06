import React, { useState} from 'react';
import { TableCell, IconButton, TextField, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CryptoJS from "react-native-crypto-js";


export default function EmpleadosCasaDeDia({ editable, editCampo, empleado, eliminarEmpleado, editarTrabajador}) {
    const [puestoNuevo, setPuestoNuevo] = useState("");

    function handleEliminarEmpleado(idEliminar, puesto){
        eliminarEmpleado(idEliminar, puesto)
    }

    function handleEditarEmpleado(idEditar, puesto) {
        editarTrabajador(idEditar, puesto, puestoNuevo)
    }

    return (

        <TableRow key={CryptoJS.AES.decrypt(empleado.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}>
            <TableCell>
                <IconButton onClick={() => handleEliminarEmpleado(empleado.idReferencia, empleado.puesto)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton>
                    <EditIcon onClick={editCampo} />
                </IconButton>
            </TableCell>
            <TableCell align="right">{CryptoJS.AES.decrypt(empleado.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)}</TableCell>
            <TableCell align="right">
                {
                    editable ?
                        empleado.puesto :
                        <>
                            <TextField value={puestoNuevo} onChange={(e) => setPuestoNuevo(e.target.value)} />
                            <CheckIcon onClick={() => handleEditarEmpleado(empleado.idReferencia, empleado.puesto)} />
                        </>
                }

            </TableCell>
        </TableRow>
    )

    

}