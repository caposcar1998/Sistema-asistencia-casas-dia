import React, { useEffect, useState } from 'react';
import { Grid, TextField, Select, Checkbox, MenuItem, Button, Input, ListItemText, Typography } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import { serviciosDisponibles } from '../../utilities/tablasEstaticas/servicios';
import { lugaresAceptadosDespensa } from '../../utilities/tablasEstaticas/lugaresAceptados';


export default function PaperEditarTarjeta({ handleCerrarEditarTarjeta, tarjetaSeleccionada, tarjetasServidor }) {
    


    return (

        <>
            
            {tarjetaSeleccionada.tipo == "salud" ?
                    < EditarSalud
                    tarjetasServidor={tarjetasServidor}
                    handleCerrarEditarTarjeta={handleCerrarEditarTarjeta}
                    tarjetaSeleccionada={tarjetaSeleccionada}
                    /> :
                tarjetaSeleccionada.tipo  == "dinero" ?
                        <EditarDinero
                        tarjetasServidor={tarjetasServidor}
                        handleCerrarEditarTarjeta={handleCerrarEditarTarjeta}
                        tarjetaSeleccionada={tarjetaSeleccionada}
                        /> :
                    tarjetaSeleccionada.tipo  == "despensa" ?
                            <EditarDespensa
                            tarjetasServidor={tarjetasServidor}
                            handleCerrarEditarTarjeta={handleCerrarEditarTarjeta}
                            tarjetaSeleccionada={tarjetaSeleccionada}
                            /> :
                            <Typography>Error al cargar</Typography>
                }
            </>
         
    )
}






function EditarSalud({ tarjetasServidor, handleCloseModal, tarjetaSeleccionada }) {
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();
    const [nombre, setNombre] = useState('');
    const [fechaVigencia, setFechaVigencia] = useState("");
    const [hospital, setHospital] = useState("");
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        tarjetasServidor();
        setNombre(tarjetaSeleccionada.nombre);
        setFechaVigencia(tarjetaSeleccionada.fechaVigencia);
        setHospital(tarjetaSeleccionada.hospital);
        setServicios(tarjetaSeleccionada.servicios);
    }, []);


    function handleChangeServicios(event) {
        setServicios(event.target.value);
    }

    function editarTarjetaSalud() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarSalud",
                    tarjetaSeleccionada._id, nombre, fechaVigencia, hospital, servicios,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al editar tarjeta")
                            handleCloseModal()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Registro correcto")
                            handleCloseModal()
                            tarjetasServidor()
                            resolve()
                        }
                    });
            }
        )
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (

        <>

            <Grid container>
                <Grid item xs={4}>
                    <Grid item xs={12}>Nombre</Grid>
                    <Grid item xs={12}>
                        <TextField id="nombre" label="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>Fecha Vigencia</Grid>
                    <Grid item xs={12}>
                        <TextField id="fechaVigencia" label="fechaVigencia" value={fechaVigencia} onChange={(e) => setFechaVigencia(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Hospital</Grid>
                    <Grid item xs={12}>
                        <TextField id="hospital" label="hospital" value={hospital} onChange={(e) => setHospital(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Servicios</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="servicios"
                            id="servicios"
                            multiple
                            value={servicios}
                            onChange={handleChangeServicios}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {serviciosDisponibles.map((servicio) => (
                                <MenuItem key={servicio} value={servicio}>
                                    <Checkbox checked={servicios.indexOf(servicio) > -1} />
                                    <ListItemText primary={servicio} />
                                </MenuItem>
                            ))}
                        </Select>

                    </Grid>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Button variant="contained" onClick={editarTarjetaSalud} color="primary">Crear</Button>
                </Grid>

            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    )
}

function EditarDinero({ tarjetasServidor, handleCloseModal, tarjetaSeleccionada }) {
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [nombre, setNombre] = useState("");
    const [fechaVigencia, setFechaVigencia] = useState("");
    const [cantidad, setCantidad] = useState();
    const [banco, setBanco] = useState();
    const [tiempo, setTiempo] = useState();
    const [openBanco, setOpenBanco] = useState(false);
    const [openTiempo, setOpenTiempo] = useState(false);


    useEffect(() => {
        tarjetasServidor();
        setNombre(tarjetaSeleccionada.nombre);
        setFechaVigencia(tarjetaSeleccionada.fechaVigencia);
        setCantidad(tarjetaSeleccionada.cantidad);
        setBanco(tarjetaSeleccionada.banco);
        setTiempo(tarjetaSeleccionada.tiempo);
    }, []);


    function editarjetaDinero() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarDinero",
                    tarjetaSeleccionada._id,nombre, fechaVigencia, cantidad, banco, tiempo,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al editar tarjeta")
                            handleCloseModal()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Registro correcto")
                            handleCloseModal()
                            tarjetasServidor()
                            resolve()
                        }
                    });
            }
        )
    }


    const handleChangeBanco = (event) => {
        setBanco(event.target.value);
    };

    const handleCloseBanco = () => {
        setOpenBanco(false);
    };

    const handleOpenBanco = () => {
        setOpenBanco(true);
    };

    const handleChangeTiempo = (event) => {
        setTiempo(event.target.value);
    };

    const handleCloseTiempo = () => {
        setOpenTiempo(false);
    };

    const handleOpenTiempo = () => {
        setOpenTiempo(true);
    };



    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (

        <>

            <Grid container>
                <Grid item xs={4}>
                    <Grid item xs={12}>Nombre</Grid>
                    <Grid item xs={12}>
                        <TextField id="nombre" label="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Fecha vigencia</Grid>
                    <Grid item xs={12}>
                        <TextField id="fechaVigencia" label="fechaVigencia" value={fechaVigencia} onChange={(e) => setFechaVigencia(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Cantidad</Grid>
                    <Grid item xs={12}>
                        <TextField id="cantidad" label="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Banco</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="banco"
                            id="banco"
                            open={openBanco}
                            onClose={handleCloseBanco}
                            onOpen={handleOpenBanco}
                            value={banco}
                            onChange={handleChangeBanco}
                        >
                            <MenuItem value={"Bancomer"}>Bancomer</MenuItem>
                            <MenuItem value={"Banco Azteca"}>Banco Azteca</MenuItem>
                            <MenuItem value={"Santander"}>Santander</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Tiempo deposito</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="tiempo"
                            id="tiempo"
                            open={openTiempo}
                            onClose={handleCloseTiempo}
                            onOpen={handleOpenTiempo}
                            value={tiempo}
                            onChange={handleChangeTiempo}
                        >
                            <MenuItem value={"mes"}>Mes</MenuItem>
                            <MenuItem value={"anio"}>Anio</MenuItem>
                            <MenuItem value={"quincena"}>Quincena</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Button variant="contained" onClick={editarjetaDinero} color="primary">Crear</Button>
                </Grid>

            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    )
}

function EditarDespensa({ tarjetasServidor, handleCloseModal, tarjetaSeleccionada }) {
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [message, setMessage] = useState();
    const [nombre, setNombre] = useState("");
    const [fechaVigencia, setFechaVigencia] = useState("");
    const [cantidad, setCantidad] = useState()
    const [lugaresAceptados, setLugaresAceptados] = useState([]);



    useEffect(() => {
        tarjetasServidor();
        setNombre(tarjetaSeleccionada.nombre);
        setFechaVigencia(tarjetaSeleccionada.fechaVigencia);
        setCantidad(tarjetaSeleccionada.cantidad);
        setLugaresAceptados(tarjetaSeleccionada.lugaresAceptados);
    }, []);

    function handleChangeLugares(event) {
        setLugaresAceptados(event.target.value);
    }

    function editarTarjetaDespensa() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarDespensa",
                    tarjetaSeleccionada._id,nombre, fechaVigencia, cantidad, lugaresAceptados,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al editar tarjeta")
                            handleCloseModal()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Registro correcto")
                            handleCloseModal()
                            tarjetasServidor()
                            resolve()
                        }
                    });
            }
        )
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (

        <>

            <Grid container>
                <Grid item xs={4}>
                    <Grid item xs={12}>Nombre</Grid>
                    <Grid item xs={12}>
                        <TextField id="nombre" label="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>Fecha Vigencia</Grid>
                    <Grid item xs={12}>
                        <TextField id="fechaVigencia" label="fechaVigencia" value={fechaVigencia} onChange={(e) => setFechaVigencia(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Cantidad</Grid>
                    <Grid item xs={12}>
                        <TextField id="cantidad" label="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12}>Lugares aceptados</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="lugaresAceptados"
                            id="lugaresAceptados"
                            multiple
                            value={lugaresAceptados}
                            onChange={handleChangeLugares}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {lugaresAceptadosDespensa.map((lugar) => (
                                <MenuItem key={lugar} value={lugar}>
                                    <Checkbox checked={lugaresAceptados.indexOf(lugar) > -1} />
                                    <ListItemText primary={lugar} />
                                </MenuItem>
                            ))}
                        </Select>

                    </Grid>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Button variant="contained" onClick={editarTarjetaDespensa} color="primary">Crear</Button>
                </Grid>

            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>
    )
}
