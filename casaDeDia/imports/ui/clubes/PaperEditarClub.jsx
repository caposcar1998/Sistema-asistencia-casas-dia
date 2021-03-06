import React, {useEffect, useState } from 'react';
import { Grid, TextField, Select, Checkbox, MenuItem, Button, Input, ListItemText, LinearProgress } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


export default function PaperEditarClub({ clubesServidor,clubSeleccionado, handleCerrarEditarClub }) {
    const [nombre, setNombre]  = useState('');
    const [direccion, setDireccion] = useState('');
    const [actividades, setActividades] = useState([]);
    const [restricciones, setRestricciones] = useState([]);
    const [horarioApertura, setHorarioApertura] = useState('');
    const [horarioCierre, setHorarioCierre] = useState('');
    const [cupoLimite, setCupoLimite] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState();
    const [open, setOpen] = useState(false);
    const [actividadesDisponibles, setActividadesDisponible] = useState([]);
    const [restriccionesDisponibles, setRestriccionesDisponible] = useState([]);
    const [message, setMessage] = useState();
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [costo, setCosto] = useState();
    const [tipoInstitucion, setTipoInstitucion] = useState();
    const [openTipo, setOpenTipo] = useState(false);

    useEffect(() => {
        actividadesServidor();
        restriccionesServidor();
        setNombre(clubSeleccionado.nombre);
        setDireccion(clubSeleccionado.direccion);
        setActividades(clubSeleccionado.actividades);
        setHorarioApertura(clubSeleccionado.horarioApertura);
        setHorarioCierre(clubSeleccionado.horarioCierre);
        setCupoLimite(clubSeleccionado.cupoLimite);
        setCodigoPostal(clubSeleccionado.codigoPostal);
        setImage(clubSeleccionado.foto);
        setCosto(clubSeleccionado.costo);
        setTipoInstitucion(clubSeleccionado.tipoInstitucion);
    }, []);


    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'prueba_image')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzue2mlpl/image/upload',
            {
                method: 'POST',
                fontSize: 20,
                body: data,
            }
        )
        const file = await res.json()

        setImage(file.secure_url) //URL de la imagen para agregarla a Mongo de ser necesario
        setLoading(false)
    }

    const handleChangeCupoLimite = (event) => {
        setCupoLimite(event.target.value);
    };

    const handleCloseCupoLimite = () => {
        setOpen(false);
    };

    const handleOpenCupoLimite = () => {
        setOpen(true);
    };

    const handleChangeTipoInstitucion = (event) => {
        setTipoInstitucion(event.target.value);
    };

    const handleCloseTipoInstitucion = () => {
        setOpenTipo(false);
    };

    const handleOpenTipoInstitucion = () => {
        setOpenTipo(true);
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

    const handleChangeRestricciones = (event) => {
        setRestricciones(event.target.value);
    };



    const handleChangeActividades = (event) => {
        setActividades(event.target.value);
    };


    function actividadesServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerActividad",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setActividadesDisponible(res)
                            resolve()
                        }
                    });
            }
        )
    }

    function restriccionesServidor() { 
        return new Promise(
                (resolve, reject) => {
                        Meteor.call("leerRestriccion",
                                (err, res) => {
                                        if (err) {
                                                reject()
                                        } else {
                                                setRestriccionesDisponible(res)
                                                resolve()
                                        }
                                });
                }
        )
    }

    function editarClub() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarClub",
                    clubSeleccionado._id,nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite, codigoPostal,tipoInstitucion,costo ,image,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al crear club")
                            handleCerrarEditarClub()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Registro correcto")
                            handleCerrarEditarClub()
                            clubesServidor()
                            resolve()
                        }
                    });
            }
        )
    }

    return (

        <>

            <Grid container>
                <Grid item xs={12}>
                    <Grid item xs={12}>Nombre</Grid>
                    <Grid item xs={12}>
                        <TextField id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid item xs={12}>Dirección</Grid>
                    <Grid item xs={12}>
                        <TextField id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Actividades</Grid>
                    <Grid item xs={12}>

                        <Select
                            labelId="actividades"
                            id="actividades"
                            multiple
                            value={actividades}
                            onChange={handleChangeActividades}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {actividadesDisponibles.map((actividad) => (
                                <MenuItem key={actividad.nombre} value={actividad}>
                                    <Checkbox checked={actividades.indexOf(actividad) > -1} />
                                    <ListItemText primary={actividad.nombre} />
                                </MenuItem>
                            ))}
                        </Select>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Restricciones</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="restricciones"
                            id="restricciones"
                            multiple
                            value={restricciones}
                            onChange={handleChangeRestricciones}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {restriccionesDisponibles.map((restriccion) => (
                                <MenuItem key={restriccion.nombre} value={restriccion}>
                                    <Checkbox checked={restricciones.indexOf(restriccion) > -1} />
                                    <ListItemText primary={restriccion.nombre} />
                                </MenuItem>
                            ))}
                        </Select>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Hora apertura</Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="apertura"
                            type="time"
                            value={horarioApertura}
                            onChange={(e) => setHorarioApertura(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Hora cierre</Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="cierre"
                            type="time"
                            value={horarioCierre}
                            onChange={(e) => setHorarioCierre(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Código postal</Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="codigo"
                            type="number"
                            value={codigoPostal}
                            onChange={(e) => setCodigoPostal(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Cupo límite</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="cupoLimite"
                            id="cupoLimite"
                            open={open}
                            onClose={handleCloseCupoLimite}
                            onOpen={handleOpenCupoLimite}
                            value={cupoLimite}
                            onChange={handleChangeCupoLimite}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Tipo institución</Grid>
                    <Grid item xs={12}>
                        <Select
                            labelId="tipoInstitucion"
                            id="tipoInstitucion"
                            open={openTipo}
                            onClose={handleCloseTipoInstitucion}
                            onOpen={handleOpenTipoInstitucion}
                            value={tipoInstitucion}
                            onChange={handleChangeTipoInstitucion}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Público"}>Público</MenuItem>
                            <MenuItem value={"Privado"}>Privado</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12}>Costo</Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="costo"
                            type="number"
                            value={costo}
                            onChange={(e) => setCosto(e.target.value)}
                        />
                    </Grid>
                </Grid>  
                <Grid item xs={12}>
                    <Grid item xs={12}>Seleccionar foto</Grid>
                    <Grid item xs={12}>
                        <Input
                            type="file"
                            name="file"
                            onChange={uploadImage}
                            color="primary"
                        />
                        {loading ? (
                            <LinearProgress />
                        ) : (
                                <img src={image} style={{ width: '300px' }} />
                            )}
                    </Grid>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={8}>
                    <Button variant="contained" onClick={handleCerrarEditarClub} color="secondary">Cancelar</Button>
                    <Button variant="contained" onClick={editarClub} color="primary">Editar</Button>
                </Grid>

            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>

    )
}