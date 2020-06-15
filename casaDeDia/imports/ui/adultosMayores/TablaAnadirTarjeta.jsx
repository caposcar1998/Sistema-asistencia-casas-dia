import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { MenuItem, Box, Paper, AppBar, Toolbar, Typography, Button, Grid, Select, TextField } from '@material-ui/core';

import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import TarjetasUsuario from './TarjetasUsuario';



const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function TablaAnadirTarjeta({ adultoSeleccionado, handleCerrarAnadirTarjeta }) {
    const classes = useStyles();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();
    const [editable, setEditable] = useState(true);

    function editCampo() {
        if (editable) {
            setEditable(false)
        }
        if (!editable) {
            setEditable(true)
        }
    }

    function eliminarTarjeta(idEliminar) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarTarjetaDeUsuario",
                    idEliminar,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al eliminar la tarjeta")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Tarjeta eliminada")
                            resolve()
                        }
                    });
            }
        )
    }

    function editarNoTarjeta(idEditar, noTarjeta, noTarjetaNueva) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarTarjetaUsuario",
                    adultoSeleccionado._id, idEditar, noTarjeta, noTarjetaNueva,
                    (err, res) => {
                        if (err) {
                            setAlert("error");
                            setSnackBarState(true);
                            setMessage("Error al editar tarjeta");
                            reject();
                        } else {
                            setAlert("success");
                            setSnackBarState(true);
                            setMessage("TArjeta editado");
                            casasDeDiaServidor();
                            handleCerrarAnadirTarjeta();
                            resolve()
                        }
                    });
            }
        )
    }


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {adultoSeleccionado.nombre}
                    </Typography>
                </Toolbar>
            </AppBar>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Eliminar</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">No. tarjeta</TableCell>
                            <TableCell align="right">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adultoSeleccionado.tarjetas.map((tarjeta) => (
                            <TarjetasUsuario
                                tarjeta={tarjeta}
                                eliminarTarjeta={eliminarTarjeta}
                                adultoSeleccionado={adultoSeleccionado}
                                editarNoTarjeta={editarNoTarjeta}
                                editable={editable}
                                editCampo={editCampo}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CrearNuevaTarjeta
                handleCerrarAnadirTarjeta={handleCerrarAnadirTarjeta}
                adultoSeleccionado={adultoSeleccionado}
            />
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    );
}



function CrearNuevaTarjeta({ adultoSeleccionado, handleCerrarAnadirTarjeta }) {
    const [tarjetas, setTarjetas] = useState([]);
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();
    const [noTarjeta, setNoTarjeta] = useState('');

    function traerTarjetasServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTarjeta",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTarjetas(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function crearTarjeta() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("anadirTarjeta",
                    adultoSeleccionado._id, tarjetaSeleccionada._id, tarjetaSeleccionada.nombre, noTarjeta,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al crear la tarjeta")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Exito al crear la tarjeta")
                            resolve()
                        }
                    });
            }
        )
    }


    function cancelarCrear() {
        handleCerrarAnadirTarjeta()
    }

    useEffect(() => {
        traerTarjetasServidor();
    }, []);


    return (
        <>
            <Paper>
                <Grid container>

                    <Grid item xs={6}>Registrar</Grid>
                    <Grid item xs={6}>
                        <Select
                            value={tarjetaSeleccionada}
                            onChange={(e) => setTarjetaSeleccionada(e.target.value)}
                        >
                            {
                                tarjetas == null ?
                                    <MenuItem>Sin tarjetas</MenuItem> :
                                    tarjetas.map((tarjeta) => (
                                        <MenuItem value={tarjeta}>{tarjeta.nombre}</MenuItem>
                                    ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>Número referencia</Grid>
                    <Grid item xs={6}>
                        <TextField id="noTarjeta" label="noTarjeta"  value={noTarjeta} onChange={(e) => setNoTarjeta(e.target.value)}/>
                    </Grid>
                    <Box />
                    <Grid item xs={6}>
                        <Button onClick={crearTarjeta} variant="contained" color="primary">Crear</Button>
                    </Grid>
                    <Grid item xs={6}><Button onClick={cancelarCrear} variant="contained" color="secondary">Cancelar</Button></Grid>
                </Grid>
            </Paper>
            {
                snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    )
} 