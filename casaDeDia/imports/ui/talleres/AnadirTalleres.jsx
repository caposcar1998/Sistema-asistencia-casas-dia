import React, {useEffect, useState } from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText, Input, LinearProgress  } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import CryptoJS from "react-native-crypto-js";

export default function AnadirTalleres({talleresServidor,handleCloseModal}) {
        const [nombre, setNombre] = useState('');
        const [descripcion, setDescripcion] = useState('');
        const [instructores, setInstructores] = useState([]);
        const [colectivos, setColectivos] = useState([]);
        const [cupoLimite, setCupoLimite] = useState('');
        const [redSocial1, setRedSocial1] = useState('');
        const [redSocial2, setRedSocial2] = useState('');
        const [redSocial3, setRedSocial3] = useState('');
        const [alert, setAlert] = useState();
        const [snackBarState, setSnackBarState] = useState(); 
        const [open, setOpen] = useState(false);
        const [instructoresDisponibles, setInstructoresDisponible] = useState([]);
        const [colectivosDisponibles, setColectivosDisponible] = useState([]);
        const [message, setMessage] = useState();
        const [image, setImage] = useState('');
        const [loading, setLoading] = useState(false);  

        useEffect(() => {
                instructoresServidor();
                colectivosServidor();
        }, []);

        

        const handleChangeInstructores = (event) => {
                setInstructores(event.target.value);
        };
        const handleChangeColectivos = (event) => {
                setColectivos(event.target.value);
        };
        function instructoresServidor() { 
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("leerInstructor",
                                        (err, res) => {
                                                if (err) {
                                                        reject()
                                                } else {
                                                        setInstructoresDisponible(res)
                                                        resolve()
                                                }
                                        });
                        }
                )
        }

        function colectivosServidor() { 
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("leerColectivos",
                                        (err, res) => {
                                                if (err) {
                                                        reject()
                                                } else {
                                                        setColectivosDisponible(res)
                                                        resolve()
                                                }
                                        });
                        }
                )
        }

        /*Constantes para Cupo Límite*/
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
                                fontSize: 20,
                        },
                },
        };


        function crearTaller() {
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("crearTaller",
                                        nombre, descripcion, instructores, colectivos, cupoLimite, image, redSocial1, redSocial2, redSocial3,
                                        (err, res) => {
                                                if (err) {
                                                        setAlert("Error")
                                                        setSnackBarState(true)
                                                        setMessage("Error Al Crear Taller")
                                                        handleCloseModal()
                                                        reject()
                                                } else {
                                                        setAlert("Success")
                                                        setSnackBarState(true)
                                                        setMessage("Registro de Taller Correcto")
                                                        handleCloseModal()
                                                        talleresServidor()
                                                        colectivosServidor()
                                                        resolve()
                                                }
                                        });
                        }
                )        
        }

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
                                body: data,
                        }
                )
                const file = await res.json()

                setImage(file.secure_url) //URL de la imagen para agregarla a Mongo de ser necesario
                setLoading(false)
        }

    return (
    <>                    
            <Grid container>         
                    
                    <Grid item xs={12}>
                            <Grid item xs={12}>Nombre</Grid>
                                <Grid item xs={12}>
                                        <TextField id="nombre" label="Taller" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </Grid>
                    </Grid>
                    
                    <Grid item xs={12}>
                            <Grid item xs={12}>Descripción</Grid>
                                <Grid item xs={12}>
                                        <TextField id="descripcion" label="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                </Grid>
                    </Grid>
                    
                    <Grid item xs={12}>
                            <Grid item xs={12}>Instructores</Grid>
                                <Grid item xs={12}>
                                        <Select
                                                labelId="instructores"
                                                id="instructores"
                                                multiple
                                                value={instructores}
                                                onChange={handleChangeInstructores}
                                                input={<Input />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                        >
                                                {instructoresDisponibles.map((instructor) => (
                                                        <MenuItem key={instructor.nombre} value={instructor}>
                                                                <Checkbox checked={instructores.indexOf(instructor) > -1} />
                                                                <ListItemText primary={CryptoJS.AES.decrypt(instructor.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)} />
                                                        </MenuItem>
                                                ))}
                                        </Select>

                                </Grid>
                    </Grid>

                    <Grid item xs={12}>
                            <Grid item xs={12}>Colectivos</Grid>
                                <Grid item xs={12}>
                                        <Select
                                                labelId="colectivos"
                                                id="colectivos"
                                                multiple
                                                value={colectivos}
                                                onChange={handleChangeColectivos}
                                                input={<Input />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                        >
                                                {colectivosDisponibles.map((colectivo) => (
                                                        <MenuItem key={colectivo.nombre} value={colectivo}>
                                                                <Checkbox checked={colectivos.indexOf(colectivo) > -1} />
                                                                <ListItemText primary={colectivo.nombre} />
                                                        </MenuItem>
                                                ))}
                                        </Select>

                                </Grid>
                    </Grid> 
                                    
                    
                     
                    <Grid item xs={12}>
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
                                                <MenuItem value={50}>40+</MenuItem>
                                        </Select>
                                </Grid>
                                <Grid item xs={12}>
                                <Grid item xs={12}>Seleccionar Imagen</Grid>
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
                    </Grid>
                    <Grid item xs={12}>
                            <Grid item xs={12}>Whatsapp del Taller</Grid>
                                <Grid item xs={12}>
                                        <TextField id="redSocial1" label="+52 1 55 xxxx xxxx" value={redSocial1} onChange={(e) => setRedSocial1(e.target.value)} />
                                </Grid>
                    </Grid>
                    <Grid item xs={12}>
                            <Grid item xs={12}>Facebook del Taller</Grid>
                                <Grid item xs={12}>
                                        <TextField id="redSocial2" label="https://facebook.com/colectivo" value={redSocial2} onChange={(e) => setRedSocial2(e.target.value)} />
                                </Grid>
                    </Grid>
                    <Grid item xs={12}>
                            <Grid item xs={12}>Twitter del Taller:</Grid>
                                <Grid item xs={12}>
                                        <TextField id="redSocial3" label="@XXXX" value={redSocial3} onChange={(e) => setRedSocial3(e.target.value)} />
                                </Grid>
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                    <Button variant="contained" onClick={crearTaller} color="primary">Crear Taller</Button>                        
                    </Grid>  
            </Grid>
                    {snackBarState &&
                            <CustomSnackbars type={alert} state={snackBarState} message={message} />
                    }                                                    
    </>

    )
 }