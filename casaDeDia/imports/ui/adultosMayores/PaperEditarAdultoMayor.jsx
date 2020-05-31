import React, {useEffect, useState } from 'react';
import { Grid, TextField, Select, Checkbox, MenuItem, Button, Input, ListItemText } from '@material-ui/core';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';
import { listaRestricciones } from '../../utilities/tablasEstaticas/restricciones';


export default function PaperEditarAdultoMayor({ adultoMayorServidor,adultoSeleccionado, handleCerrarEditarAdultoMayor }) {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [grupoSanguineo, setGrupoSanguineo] = useState('');
    const [curp, setCurp] = useState('');
    const [sexo, setSexo] = useState('');
    const [edad, setEdad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [apodo, setApodo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [alert, setAlert] = useState();
    const [snackBarState, setSnackBarState] = useState(); 
    const [message, setMessage] = useState(); 


    useEffect(() => {
        setNombre(adultoSeleccionado.nombre);
        setApellidos(adultoSeleccionado.apellidos);
        setDireccion(adultoSeleccionado.direccion);
        setCurp(adultoSeleccionado.curp);
        setSexo(adultoSeleccionado.sexo);
        setEdad(adultoSeleccionado.edad);
        setCodigoPostal(adultoSeleccionado.codigoPostal);
        setApodo(adultoSeleccionado.apodo);
        setGrupoSanguineo(adultoSeleccionado.grupoSanguineo);
        setContrasena(adultoSeleccionado.contrasena);
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


    function editarAdultoMayor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("editarAdultoMayor",
                    adultoSeleccionado._id,nombre, apellidos, curp, sexo, edad, grupoSanguineo, direccion, codigoPostal, 
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