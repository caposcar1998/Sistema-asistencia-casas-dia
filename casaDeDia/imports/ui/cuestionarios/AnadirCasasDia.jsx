import React, {useEffect, useState } from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText, Input, LinearProgress  } from '@material-ui/core';
import {listaRestricciones} from "../../utilities/tablasEstaticas/restricciones";
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


export default function AnadirCasasDia() {
        const [nombre, setNombre] = useState('');
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
        const [message, setMessage] = useState(); 
        const [image, setImage] = useState('')
        const [loading, setLoading] = useState(false)

        useEffect(() => {
                actividadesServidor();
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
                                body: data
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

        const handleChangeMultiple = (event) => {
                const { options } = event.target;
                const value = [];
                for (let i = 0, l = options.length; i < l; i += 1) {
                        if (options[i].selected) {
                                value.push(options[i].value);
                        }
                }
                setRestricciones(value);
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

        function crearCasaDeDia() {
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("crearCasaDeDia",
                                        nombre, direccion, actividades, restricciones, horarioApertura, horarioCierre, cupoLimite,codigoPostal,image,
                                        (err, res) => {
                                                if (err) {
                                                        setAlert("error")
                                                        setSnackBarState(true)
                                                        setMessage("Error al crear casa de dia")
                                                        reject()
                                                } else {
                                                        setAlert("success")
                                                        setSnackBarState(true)
                                                        setMessage("Registro correcto")
                                                        resolve()
                                                }
                                        });
                        }
                )        
        }

return (
        
<Paper elevation={3}>                    

        <Grid container>                            
                <Grid item xs={4}>
                        <Grid item xs={12}>Nombre</Grid>
                <Grid item xs={12}>
                        <TextField id="nombre" label="Casa dia" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Grid>
                </Grid>

                <Grid item xs={4}>
                        <Grid item xs={12}>Direccion</Grid>
                <Grid item xs={12}>
                        <TextField id="direccion" label="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Grid>
        </Grid>   
                <Grid item xs={4}>
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
                                        <MenuItem key={actividad.nombre} value={actividad.nombre}>
                                                <Checkbox checked={actividades.indexOf(actividad.nombre) > -1} />
                                                <ListItemText primary={actividad.nombre} />
                                        </MenuItem>
                                ))}
                        </Select>

                </Grid>
       </Grid> 
                <Grid item xs={4}>
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
                        {listaRestricciones.map((restriccion) => (
                                <MenuItem key={restriccion} value={restriccion}>
                                        <Checkbox checked={restricciones.indexOf(restriccion) > -1} />
                                        <ListItemText primary={restriccion} />
                                </MenuItem>
                        ))}
                </Select>

                        </Grid>
        </Grid>
                <Grid item xs={4}>
                        <Grid item xs={12}>Hora apertura</Grid>
                <Grid item xs={12}>
                        <TextField
                        id="apertura"
                        type="time"
                        defaultValue="07:30" 
                        value={horarioApertura}
                        onChange={(e) => setHorarioApertura(e.target.value)}                         
                        />
                </Grid>
        </Grid>                                         
                <Grid item xs={4}>
                        <Grid item xs={12}>Hora cierre</Grid>
                <Grid item xs={12}>
                        <TextField
                                id="cierre"
                                type="time"
                                defaultValue="17:00"
                                value={horarioCierre}
                                onChange={(e) => setHorarioCierre(e.target.value)} 
                        />
                </Grid>
        </Grid>
        <Grid item xs={4}>
                <Grid item xs={12}>Codigo postal</Grid>
                <Grid item xs={12}>
                        <TextField
                                id="codigo"
                                type="number"
                                value={codigoPostal}
                                onChange={(e) => setCodigoPostal(e.target.value)}
                        />
                </Grid>
        </Grid>                   
        <Grid item xs={4}>
                <Grid item xs={12}>Cupo limite</Grid>
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
                <Grid item xs={4}>
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
        <Grid item xs={4} />
        <Grid item xs={4}>
                <Button variant="contained" onClick={crearCasaDeDia} color="primary">Crear</Button>                        
        </Grid>
                        
        </Grid>
                {snackBarState &&
                        <CustomSnackbars type={alert} state={snackBarState} message={message} />
                }                                                      
</Paper>

        
)
 }