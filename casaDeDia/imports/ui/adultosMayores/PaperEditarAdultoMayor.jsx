import React, {useEffect, useState } from 'react';
import { Grid, TextField, Button, Input, LinearProgress } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import CryptoJS from "react-native-crypto-js";


export default function PaperEditarAdultoMayor({ adultoMayorServidor,adultoSeleccionado, handleCerrarEditarAdultoMayor }) {
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

    useEffect(() => {
        // Decrypt
        let bytes  = CryptoJS.AES.decrypt(adultoSeleccionado.apellidos, 'secret key 123');
        let apellidos_adulto = bytes.toString(CryptoJS.enc.Utf8);
        let bytes2  = CryptoJS.AES.decrypt(adultoSeleccionado.curp, 'secret key 123');
        let curp_adulto = bytes2.toString(CryptoJS.enc.Utf8);
        let bytes3  = CryptoJS.AES.decrypt(adultoSeleccionado.direccion, 'secret key 123');
        let direccion_adulto = bytes3.toString(CryptoJS.enc.Utf8);
        let bytes4  = CryptoJS.AES.decrypt(adultoSeleccionado.grupoSanguineo, 'secret key 123');
        let grupoSanguineo_adulto = bytes4.toString(CryptoJS.enc.Utf8);
        let bytes5  = CryptoJS.AES.decrypt(adultoSeleccionado.nombre, 'secret key 123');
        let nombre_adulto = bytes5.toString(CryptoJS.enc.Utf8);
        let bytes6  = CryptoJS.AES.decrypt(adultoSeleccionado.sexo, 'secret key 123');
        let sexo_adulto = bytes6.toString(CryptoJS.enc.Utf8);
        let bytes7  = CryptoJS.AES.decrypt(adultoSeleccionado.edad, 'secret key 123');
        let edad_adulto = bytes7.toString(CryptoJS.enc.Utf8);
        let bytes8  = CryptoJS.AES.decrypt(adultoSeleccionado.codigoPostal, 'secret key 123');
        let codigoPostal_adulto = bytes8.toString(CryptoJS.enc.Utf8);
        
        setNombre(nombre_adulto);
        setApellidos(apellidos_adulto);
        setDireccion(direccion_adulto);
        setCurp(curp_adulto);
        setSexo(sexo_adulto);
        setEdad(edad_adulto);
        setCodigoPostal(codigoPostal_adulto);
        setGrupoSanguineo(grupoSanguineo_adulto);
        setImage(adultoSeleccionado.foto);
    }, []);


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


    function editarAdultoMayor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarAdultoMayor",
                    adultoSeleccionado._id,nombre, apellidos, curp, sexo, edad, grupoSanguineo, direccion, codigoPostal,image,
                    (err, res) => {
                        if (err) {
                            setAlert("error")
                            setSnackBarState(true)
                            setMessage("Error al editar aladulto mayor")
                            handleCerrarEditarAdultoMayor()
                            reject()
                        } else {
                            setAlert("success")
                            setSnackBarState(true)
                            setMessage("Registro correcto")
                            handleCerrarEditarAdultoMayor()
                            adultoMayorServidor()
                            resolve()
                        }
                    });
            }
        )
    }

    return (

        <>

            <Grid container>
                <Grid item xs={4}>
                    <Grid item xs={12}>Nombre</Grid>
                    <Grid item xs={12}>
                        <TextField id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Grid>
                </Grid>


                <Grid item xs={4}>
                    <Grid item xs={12}>Apellidos</Grid>
                    <Grid item xs={12}>
                        <TextField id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                    </Grid>
                </Grid>


                <Grid item xs={4}>
                    <Grid item xs={12}>Grupo Sanguíneo</Grid>
                    <Grid item xs={12}>
                        <TextField id="grupoSanguineo" value={grupoSanguineo} onChange={(e) => setGrupoSanguineo(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>Dirección</Grid>
                    <Grid item xs={12}>
                        <TextField id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>Curp</Grid>
                    <Grid item xs={12}>
                        <TextField id="curp" value={curp} onChange={(e) => setCurp(e.target.value)} />
                    </Grid>
                </Grid>


                <Grid item xs={4}>
                    <Grid item xs={12}>Sexo</Grid>
                    <Grid item xs={12}>
                        <TextField id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} />
                    </Grid>
                </Grid>


                <Grid item xs={4}>
                    <Grid item xs={12}>Edad</Grid>
                    <Grid item xs={12}>
                        <TextField id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </Grid>
                </Grid>
                
                
                <Grid item xs={4}>
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
                <Grid item xs={8}>
                    <Button variant="contained" onClick={handleCerrarEditarAdultoMayor} color="secondary">Cancelar</Button>
                    <Button variant="contained" onClick={editarAdultoMayor} color="primary">Editar</Button>
                </Grid>

            </Grid>
            {snackBarState &&
                <CustomSnackbars type={alert} state={snackBarState} message={message} />
            }
        </>

    )
}