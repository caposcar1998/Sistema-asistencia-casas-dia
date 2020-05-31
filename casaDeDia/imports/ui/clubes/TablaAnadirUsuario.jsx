import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { MenuItem,Box, Paper, AppBar, Toolbar, Typography, Button, Grid, Select, TextField} from '@material-ui/core';

import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import UsuariosClub from './UsuariosClub';



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



export default function TablaAnadirPersonal({ clubSeleccionado, handleCerrarAnadirUsuario }) {
    const classes = useStyles();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();


    function eliminarUsuario(idEliminar) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarUsuarioDeClub",
                    idEliminar,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al eliminar el usuario")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Usuario eliminado")
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
                        {clubSeleccionado.nombre}
                    </Typography>
                    <Button color="inherit" >Anadir</Button>
                </Toolbar>
            </AppBar>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Eliminar</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">CURP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clubSeleccionado.usuarios.map((usuario) => (
                            <UsuariosClub
                                usuario={usuario}
                                eliminarUsuario={eliminarUsuario}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CrearNuevoUsuario
                handleCerrarAnadirUsuario={handleCerrarAnadirUsuario}
                clubSeleccionado={clubSeleccionado}
            />
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    );
}



function CrearNuevoUsuario({ clubSeleccionado, handleCerrarAnadirUsuario }) {
    const [usuarios, setUsuarios] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();


    function traerUsuarioServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerAdultoMayor",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setUsuarios(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function crearUsuario() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("anadirAdulto",
                    clubSeleccionado._id, personaSeleccionada._id, personaSeleccionada.nombre, personaSeleccionada.curp,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al crear el usuario")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Exito al crear el usuario")
                            resolve()
                        }
                    });
            }
        )
    }


    function cancelarCrear() {
        handleCerrarAnadirUsuario()
    }

    useEffect(() => {
        traerUsuarioServidor();
    }, []);


    return (
        <>
            <Paper>
                <Grid container>

                    <Grid item xs={6}>Registrar</Grid>
                    <Grid item xs={6}>
                        <Select
                            value={personaSeleccionada}
                            onChange={(e) => setPersonaSeleccionada(e.target.value)}
                        >
                            {
                                usuarios == null ?
                                    <MenuItem>Sin personal</MenuItem> :
                                    usuarios.map((persona) => (
                                        <MenuItem value={persona}>{persona.nombre}</MenuItem>
                                    ))}
                        </Select>
                    </Grid>
                    <Box />
                    <Grid item xs={6}>
                        <Button onClick={crearUsuario} variant="contained" color="primary">Crear</Button>
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