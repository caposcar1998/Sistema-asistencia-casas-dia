import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box,Paper, AppBar, Toolbar, Typography, Button, Grid, TextField, Select, MenuItem } from '@material-ui/core';

import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';

import EmpleadosClub from './EmpleadosClub';


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



export default function TablaAnadirPersonal({ clubesServidor,clubSeleccionado, handleCerrarAnadirEmpleado }) {
    const classes = useStyles();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState(); 
    const [editable, setEditable] = useState(true); 

    function editCampo() {
        if (editable){
            setEditable(false)
        }
        if (!editable) {
            setEditable(true)
         }
     }

    function eliminarEmpleado(idEliminar,puesto) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("borrarEmpleadoDeClub",
                    idEliminar, puesto, 
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al eliminar empleados")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Empleado eliminado")
                            handleCerrarAnadirEmpleado()
                            clubesServidor()
                            resolve()
                        }
                    });
            }
        )
    }
    
    function editarTrabajador(idEditar, puesto, puestoNuevo ) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarEmpleadoDeClub",
                    clubSeleccionado._id,idEditar, puesto, puestoNuevo,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al editar empleados")
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Empleado editado")
                            clubesServidor()
                            handleCerrarAnadirEmpleado()
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
                </Toolbar>
            </AppBar>
        
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Eliminar</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Función</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clubSeleccionado.empleados.map((empleado) => (
                        <EmpleadosClub
                            empleado={empleado}
                            eliminarEmpleado={eliminarEmpleado}
                            editarTrabajador={editarTrabajador}
                            editCampo={editCampo}
                            editable={editable}
                        />
                    ))}
                </TableBody>
            </Table>
            </TableContainer>

            <CrearNuevoUsuario clubSeleccionado={clubSeleccionado}
                handleCerrarAnadirEmpleado={handleCerrarAnadirEmpleado}
                clubesServidor={clubesServidor}
            />
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    );
}

function CrearNuevoUsuario({ clubesServidor,clubSeleccionado, handleCerrarAnadirEmpleado }) {
    const [personal, setPersonal] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState();
    const [puesto, setPuesto] = useState();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();


    function traerPersonalServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerEmpleado",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setPersonal(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function crearUsuario() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("anadirUsuarioClub",
                    clubSeleccionado._id,personaSeleccionada._id, personaSeleccionada.nombre, puesto,
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
                            clubesServidor()
                            handleCerrarAnadirEmpleado()
                            resolve()
                        }
                    });
            }
        )
    }


    function cancelarCrear() {
        handleCerrarAnadirEmpleado()
    }

    useEffect(() => {
        traerPersonalServidor();
    }, []);


    return (
        <>
        <Paper>
            <Grid container>

                    <Grid item xs={6}>Empleado</Grid>
                <Grid item xs={6}>
                    <Select
                        value={puesto}
                        onChange={(e) => setPersonaSeleccionada(e.target.value)}
                    >
                        {
                            personal == null ?
                                <MenuItem>Sin personal</MenuItem> :
                            personal.map((persona) => (
                            <MenuItem value={persona}>{persona.nombre}</MenuItem>
                        ))}
                    </Select>
                    </Grid>
                    <Box/>
                    <Grid item xs={6}>
                        <Typography>Puesto</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField id="puesto" label="puesto" value={puesto} onChange={(e) => setPuesto(e.target.value)} />
                    </Grid>
                <Grid item xs={6}>
                        <Button onClick={crearUsuario} variant="contained" color="primary">Crear</Button>
                </Grid>
                    <Grid item xs={6}><Button onClick={cancelarCrear}  variant="contained" color="secondary">Cancelar</Button></Grid>
            </Grid>
        </Paper>
        {
        snackBarState &&
        <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
            </>
    )} 