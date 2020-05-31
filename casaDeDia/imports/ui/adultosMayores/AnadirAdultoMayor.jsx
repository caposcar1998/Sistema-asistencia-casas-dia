import React, {useEffect, useState } from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText, Input, LinearProgress  } from '@material-ui/core';
import {listaRestricciones} from "../../utilities/tablasEstaticas/restricciones";
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
        const [apodo, setApodo] = useState('');
        const [contrasena, setContrasena] = useState('');
        const [alert, setAlert] = useState();
        const [snackBarState, setSnackBarState] = useState(); 
        const [message, setMessage] = useState(); 

        
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
                                        nombre, apellidos,curp, sexo, edad, grupoSanguineo, direccion, codigoPostal, apodo, contrasena,
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

return (
        
<>                    

        <Grid container>                            
                <Grid item xs={4}>
                        <Grid item xs={12}>Nombre</Grid>
                <Grid item xs={12}>
                        <TextField id="nombre" label="Adulto Mayor" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={4}>
                        <Grid item xs={12}>Apellidos</Grid>
                <Grid item xs={12}>
                        <TextField id="apellidos" label="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                </Grid>
                </Grid>
                

                <Grid item xs={4}>
                        <Grid item xs={12}>Direccion</Grid>
                <Grid item xs={12}>
                        <TextField id="direccion" label="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Grid>

                <Grid item xs={4}>
                        <Grid item xs={12}>Curp</Grid>
                <Grid item xs={12}>
                        <TextField id="curp" label="Curp" value={curp} onChange={(e) => setCurp(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={4}>
                        <Grid item xs={12}>Grupo Sanguíneo</Grid>
                <Grid item xs={12}>
                        <TextField id="grupoSanguineo" label="GrupoSanguineo" value={grupoSanguineo} onChange={(e) => setGrupoSanguineo(e.target.value)} />
                </Grid>
                </Grid>

                <Grid item xs={4}>
                        <Grid item xs={12}>Sexo</Grid>
                <Grid item xs={12}>
                        <TextField id="sexo" label="Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} />
                </Grid>
                </Grid>

                <Grid item xs={4}>
                        <Grid item xs={12}>Edad</Grid>
                <Grid item xs={12}>
                        <TextField id="edad" label="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={4}>
                        <Grid item xs={12}>Apodo</Grid>
                <Grid item xs={12}>
                        <TextField id="apodo" label="Apodo" value={apodo} onChange={(e) => setApodo(e.target.value)} />
                </Grid>
                </Grid>


                <Grid item xs={4}>
                        <Grid item xs={12}>Contrasena</Grid>
                <Grid item xs={12}>
                        <TextField id="contrasena" label="Contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </Grid>
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