import React, {useState } from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText, Input, LinearProgress  } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


export default function AnadirCentro({centroServidor,handleCloseModal}) {
        const [nombre, setNombre] = useState('');
        const [calle, setCalle] = useState('');
        const [delegacion, setDelegacion] = useState('');
        const [codigoPostal, setCodigoPostal] = useState('');
        const [numeroTelefonico, setnumeroTelefonico] = useState('');
        const [alert, setAlert] = useState();
        const [snackBarState, setSnackBarState] = useState(); 
        const [open, setOpen] = useState(false);
        const [message, setMessage] = useState(); 
        const [image, setImage] = useState('');
        const [loading, setLoading] = useState(false); 

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

        /*Constantes para Delegacion*/
        const handleChangeDelegacion = (event) => {
                setDelegacion(event.target.value);
        };
        const handleCloseDelegacion = () => {
                setOpen(false);
        };
        const handleOpenDelegacion = () => {
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


        function crearCentro() {
                return new Promise(
                        (resolve, reject) => {
                                Meteor.call("crearCentro",
                                        nombre, calle, delegacion,codigoPostal,numeroTelefonico,image,
                                        (err, res) => {
                                                if (err) {
                                                        setAlert("Error")
                                                        setSnackBarState(true)
                                                        setMessage("Error Al Crear Centro")
                                                        handleCloseModal()
                                                        reject()
                                                } else {
                                                        setAlert("Success")
                                                        setSnackBarState(true)
                                                        setMessage("Registro de Centro Correcto")
                                                        handleCloseModal()
                                                        centroServidor()
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
                                        <TextField id="nombre" label="Centro" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </Grid>
                    </Grid>
                    
                    <Grid item xs={12}>
                            <Grid item xs={12}>Calle</Grid>
                                <Grid item xs={12}>
                                        <TextField id="calle" label="Calle" value={calle} onChange={(e) => setCalle(e.target.value)} />
                                </Grid>
                    </Grid>
                                    
                    <Grid item xs={12}>
                    <Grid item xs={12}>Delegación</Grid>
                        <Grid item xs={12}>
                                <Select
                                        labelId="delegacion"
                                        id="delegacion"
                                        open={open}
                                        onClose={handleCloseDelegacion}
                                        onOpen={handleOpenDelegacion}
                                        value={delegacion}
                                        onChange={handleChangeDelegacion}
                                >
                                                 <MenuItem value="">
                                                    <em>None ..</em>
                                                </MenuItem>
                                                <MenuItem value={"alvaroObregon"}>Álvaro Obregón</MenuItem>
                                                <MenuItem value={"azcapotzalco"}>Azcapotzalco</MenuItem>
                                                <MenuItem value={"benitoJuarez"}>Benito Juárez</MenuItem>
                                                <MenuItem value={"coyoacan"}>Coyoacán</MenuItem>
                                                <MenuItem value={"cuajimalpa"}>Cuajimalpa de Morelos</MenuItem>
                                                <MenuItem value={"cuauhtemoc"}>Cuauhtémoc</MenuItem>
                                                <MenuItem value={"gustavoAMadero"}>Gustavo A. Madero</MenuItem>
                                                <MenuItem value={"iztacalco"}>Iztacalco</MenuItem>
                                                <MenuItem value={"iztapalapa"}>Iztapalapa</MenuItem>
                                                <MenuItem value={"magdalenaContreras"}>Magdalena Contreras</MenuItem>
                                                <MenuItem value={"miguelHidalgo"}>Miguel Hidalgo</MenuItem>
                                                <MenuItem value={"milpaAlta"}>Milpa Alta</MenuItem>
                                                <MenuItem value={"tlahuac"}>Tláhuac</MenuItem>
                                                <MenuItem value={"tlalpan"}>Tlalpan</MenuItem>
                                                <MenuItem value={"venustianoCarranza"}>Venustiano Carranza</MenuItem>
                                                <MenuItem value={"xochimilco"}>Xochimilco</MenuItem>
                                </Select>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                            <Grid item xs={12}>Código Postal</Grid>
                                <Grid item xs={12}>
                                        <TextField id="codigoPostal" label="codigoPostal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                                </Grid>
                    </Grid>

                    <Grid item xs={12}>
                            <Grid item xs={12}>Número Telefónico</Grid>
                                <Grid item xs={12}>
                                        <TextField id="numeroTelefonico" label="numeroTelefonico" value={numeroTelefonico} onChange={(e) => setnumeroTelefonico(e.target.value)} />
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
                    <Grid item xs={12}>
                    <Button variant="contained" onClick={crearCentro} color="primary">Crear Centro</Button>                        
                    </Grid>  
            </Grid>
                    {snackBarState &&
                            <CustomSnackbars type={alert} state={snackBarState} message={message} />
                    }                                                    
    </>

    )
 }