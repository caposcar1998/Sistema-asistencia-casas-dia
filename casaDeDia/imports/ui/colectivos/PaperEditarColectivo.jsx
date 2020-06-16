import React, {useEffect, useState } from 'react';
import { Grid, TextField, Select, Checkbox, MenuItem, Button, Input, ListItemText, LinearProgress } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import CryptoJS from "react-native-crypto-js";
export default function PaperEditarColectivo({colectivosServidor,colectivoSeleccionado, handleCerrarEditarColectivo}) {
        const [nombre, setNombre] = useState('');
        const [descripcion, setDescripcion] = useState('');
        const [tutores, setTutores] = useState([]);
        const [categoria, setCategoria] = useState('');
        const [cupoLimite, setCupoLimite] = useState('');
        const [alert, setAlert] = useState();
        const [snackBarState, setSnackBarState] = useState(); 
        const [open, setOpen] = useState(false);
        const [open2, setOpen2] = useState(false);
        const [tutoresDisponibles, setTutoresDisponible] = useState([]);
        const [message, setMessage] = useState(); 
        const [image, setImage] = useState('')
        const [loading, setLoading] = useState(false)

    useEffect(() => {
        tutoresServidor();
        setNombre(colectivoSeleccionado.nombre);
        setDescripcion(colectivoSeleccionado.descripcion);
        setTutores(colectivoSeleccionado.tutores);
        setCategoria(colectivoSeleccionado.categoria);
        setCupoLimite(colectivoSeleccionado.cupoLimite);
        setImage(colectivoSeleccionado.foto);
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

    const handleChangeTutores = (event) => {
                setTutores(event.target.value);
        };
        function tutoresServidor() { 
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("leerTutor",
                                        (err, res) => {
                                                if (err) {
                                                        reject()
                                                } else {
                                                        setTutoresDisponible(res)
                                                        resolve()
                                                }
                                        });
                        }
                )
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

    /*Constantes para Categoria*/
        const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
        };
        const handleCloseCategoria = () => {
        setOpen2(false);
        };
        const handleOpenCategoria = () => {
        setOpen2(true);
        }       ;
    
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


    function editarColectivo() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarColectivo",
                    colectivoSeleccionado._id,nombre, descripcion, tutores, categoria, cupoLimite,image,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error Editar Colectivo")
                            handleCerrarEditarColectivo()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Edición Correcta")
                            handleCerrarEditarColectivo()
                            colectivosServidor()
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
                                            <TextField id="nombre" label="Colectivo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </Grid>
                        </Grid>
                        
                        <Grid item xs={12}>
                                <Grid item xs={12}>Descripción</Grid>
                                    <Grid item xs={12}>
                                            <TextField id="descripcion" label="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                    </Grid>
                        </Grid>
                        
                        <Grid item xs={12}>
                                <Grid item xs={12}>Tutores</Grid>
                                    <Grid item xs={12}>
                                            <Select
                                                    labelId="tutores"
                                                    id="tutores"
                                                    multiple
                                                    value={tutores}
                                                    onChange={handleChangeTutores}
                                                    input={<Input />}
                                                    renderValue={(selected) => selected.join(', ')}
                                                    MenuProps={MenuProps}
                                            >
                                                    {tutoresDisponibles.map((tutor) => (
                                                            <MenuItem key={tutor.nombre} value={tutor}>
                                                                    <Checkbox checked={tutores.indexOf(tutor) > -1} />
                                                                    <ListItemText primary={CryptoJS.AES.decrypt(tutor.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8)} />
                                                            </MenuItem>
                                                    ))}
                                            </Select>
    
                                    </Grid>
                        </Grid> 
                                        
                        <Grid item xs={12}>
                        <Grid item xs={12}>Categoria</Grid>
                            <Grid item xs={12}>
                                    <Select
                                            labelId="categoria"
                                            id="categoria"
                                            open2={open2}
                                            onClose={handleCloseCategoria}
                                            onOpen={handleOpenCategoria}
                                            value={categoria}
                                            onChange={handleChangeCategoria}
                                    >
                                                     <MenuItem value="">
                                                        <em>None ..</em>
                                                    </MenuItem>
                                                    <MenuItem value={"imagenUrbana"}>Imagen Urbana</MenuItem>
                                                    <MenuItem value={"espaciosVerdes"}>Espacios Verdes</MenuItem>
                                                    <MenuItem value={"especiosAlternativos"}>Espacios Alternativos</MenuItem>
                                                    <MenuItem value={"multimedia"}>Multimedia</MenuItem>
                                                    <MenuItem value={"artesEscenicas"}>Artes Escénicas</MenuItem>
                                                    <MenuItem value={"musica"}>Música</MenuItem>
                                                    <MenuItem value={"artesVisualesPlasticas"}>Artes Vis. y Plásticas</MenuItem>
                                                    <MenuItem value={"literatura"}>Literatura</MenuItem>
                                                    <MenuItem value={"interdisciplinarios"}>Interdisciplinarios</MenuItem>
                                                    <MenuItem value={"patrimonioCulturalONacional"}>Patrimonio Cult.Natural</MenuItem>
                                                    <MenuItem value={"mixtoYMemoriaHistorica"}>Mixto y Memoria Histórica</MenuItem>
                                                    <MenuItem value={"otros"}>Otros</MenuItem>
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
                    <Button variant="contained" onClick={handleCerrarEditarColectivo} color="secondary">Cancelar</Button>
                    <Button variant="contained" onClick={editarColectivo} color="primary">Editar</Button>
                </Grid>

                
            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>

    )
}