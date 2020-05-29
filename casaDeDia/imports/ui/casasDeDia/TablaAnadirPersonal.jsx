import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box,Paper, IconButton, AppBar, Toolbar, Typography, Button, Grid, TextField, Select, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import CheckIcon from '@material-ui/icons/Check';


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



export default function TablaAnadirPersonal({ casaSeleccionada, handleCerrarAnadirEmpleado }) {
    const classes = useStyles();
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState(); 
    const [puestoNuevo, setPuestoNuevo] = useState("");


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
                Meteor.call("borrarEmpleadoDeCasa",
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
                            resolve()
                        }
                    });
            }
        )
    }
    
    function editarTrabajador(idEditar, puesto ) {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarEmpleadoDeCasa",
                    casaSeleccionada._id,idEditar, puesto, puestoNuevo,
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
                        {casaSeleccionada.nombre}
          </Typography>
                    <Button color="inherit" >Anadir</Button>
                </Toolbar>
            </AppBar>
        
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Eliminar</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Funcion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {casaSeleccionada.empleados.map((empleado) => (
                        <TableRow key={empleado.nombre}>
                            <TableCell>
                                <IconButton onClick={() => eliminarEmpleado(empleado.idReferencia, empleado.puesto)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <EditIcon onClick={editCampo} />
                                </IconButton>
                            </TableCell>
                            <TableCell align="right">{empleado.nombre}</TableCell>
                            <TableCell align="right">
                                {
                                    editable ?
                                        empleado.puesto :
                                        <>
                                            <TextField value={puestoNuevo} onChange={(e) => setPuestoNuevo(e.target.value)} />
                                            <CheckIcon onClick={() =>editarTrabajador(empleado.idReferencia, empleado.puesto)} />
                                            </>
                                }
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>

            <CrearNuevoUsuario casaSeleccionada={casaSeleccionada}
                handleCerrarAnadirEmpleado={handleCerrarAnadirEmpleado}
            />
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            } 
            </>
    );
}

function CrearNuevoUsuario({ casaSeleccionada, handleCerrarAnadirEmpleado }) {
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
                Meteor.call("anadirUsuario",
                    casaSeleccionada._id,personaSeleccionada._id, personaSeleccionada.nombre, puesto,
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