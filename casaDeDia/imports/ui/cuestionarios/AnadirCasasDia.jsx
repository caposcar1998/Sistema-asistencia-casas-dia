import React, {useEffect } from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button, Checkbox, ListItemText,Input  } from '@material-ui/core';
import {listaRestricciones} from "../../utilities/tablasEstaticas/restricciones";

export default function AnadirCasasDia() {
        const [nombre, setNombre] = React.useState('');
        const [direccion, setDireccion] = React.useState('');
        const [actividades, setActividades] = React.useState([]);
        const [restricciones, setRestricciones] = React.useState([]);
        const [horarioApertura, setHorarioApertura] = React.useState('');
        const [horarioCierre, setHorarioCierre] = React.useState('');
        const [cupoLimite, setCupoLimite] = React.useState('');
        const [open, setOpen] = React.useState(false);
        const [actividadesDisponibles, setActividadesDisponible] = React.useState([]);


        useEffect(() => {
                actividadesServidor();
        }, []);


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
        <Grid item xs={4} />
        <Grid item xs={4}>
                <Button variant="contained" onClick={actividadesServidor} color="primary">Crear</Button>                        
        </Grid>
                        
        </Grid>
                                                                
</Paper>

)
 }