import React, {useEffect, useState } from 'react';
import { Grid, TextField, Select, Checkbox, MenuItem, Button, Input, ListItemText } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';


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
        setNombre(adultoSeleccionado.nombre);
        setApellidos(adultoSeleccionado.apellidos);
        setDireccion(adultoSeleccionado.direccion);
        setCurp(adultoSeleccionado.curp);
        setSexo(adultoSeleccionado.sexo);
        setEdad(adultoSeleccionado.edad);
        setCodigoPostal(adultoSeleccionado.codigoPostal);
        setGrupoSanguineo(adultoSeleccionado.grupoSanguineo);
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
                    <Grid item xs={12}>Grupo sanguíneo</Grid>
                    <Grid item xs={12}>
                        <TextField id="grupoSanguineo" value={grupoSanguineo} onChange={(e) => setGrupoSanguineo(e.target.value)} />
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid item xs={12}>Direccion</Grid>
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