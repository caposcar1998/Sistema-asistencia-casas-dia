import React, {useState } from 'react';
import { Grid, TextField, Button, Input, LinearProgress  } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


export default function AnadirAdultoMayor({ adultoMayorServidor,handleCloseModal}) {
        const [nombre, setNombre] = useState('');
        const [apellidos, setApellidos] = useState('');
        const [direccion, setDireccion] = useState('');
        const [grupoSanguineo, setGrupoSanguineo] = useState('');
        const [curp, setCurp] = useState('');
        const [sexo, setSexo] = useState('');
        const [edad, setEdad] = useState('');
        const [codigoPostal, setCodigoPostal] = useState('');
        const [alert, setAlert] = useState();
        const [snackBarState, setSnackBarState] = useState(); 
        const [message, setMessage] = useState(); 
        const [image, setImage] = useState('')
        const [loading, setLoading] = useState(false)

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

       

        function crearAdultoMayor() {
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("crearAdultoMayor",
                                        nombre, apellidos, curp, sexo, edad, grupoSanguineo, direccion, codigoPostal, image, 
                                        (err, res) => {
                                                if (err) {
                                                        setAlert("error")
                                                        setSnackBarState(true)
                                                        setMessage("Error al crear adulto mayor")
                                                        handleCloseModal()
                                                        reject()
                                                } else {
                                                        setAlert("success")
                                                        setSnackBarState(true)
                                                        setMessage("Registro correcto")
                                                        handleCloseModal()
                                                        adultoMayorServidor()
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
                        <TextField id="nombre" label="Adulto Mayor" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={12}>
                        <Grid item xs={12}>Apellidos</Grid>
                <Grid item xs={12}>
                        <TextField id="apellidos" label="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                </Grid>
                </Grid>
                

                <Grid item xs={12}>
                        <Grid item xs={12}>Direccion</Grid>
                <Grid item xs={12}>
                        <TextField id="direccion" label="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Grid>

                <Grid item xs={12}>
                        <Grid item xs={12}>Curp</Grid>
                <Grid item xs={12}>
                        <TextField id="curp" label="Curp" value={curp} onChange={(e) => setCurp(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={12}>
                        <Grid item xs={12}>Grupo Sanguíneo</Grid>
                <Grid item xs={12}>
                        <TextField id="grupoSanguineo" label="GrupoSanguineo" value={grupoSanguineo} onChange={(e) => setGrupoSanguineo(e.target.value)} />
                </Grid>
                </Grid>

                <Grid item xs={12}>
                        <Grid item xs={12}>Sexo</Grid>
                <Grid item xs={12}>
                        <TextField id="sexo" label="Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} />
                </Grid>
                </Grid>

                <Grid item xs={12}>
                        <Grid item xs={12}>Edad</Grid>
                <Grid item xs={12}>
                        <TextField id="edad" label="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                </Grid>
                </Grid>

                
        </Grid>   

        <Grid item xs={12}>
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
               
        <Grid item xs={4} />
        <Grid item xs={4}>
                <Button variant="contained" onClick={crearAdultoMayor} color="primary">Crear</Button>                        
        </Grid>
                        
        </Grid>
                {snackBarState &&
                        <CustomSnackbars type={alert} state={snackBarState} message={message} />
                }                                                      
</>
        
)
 }