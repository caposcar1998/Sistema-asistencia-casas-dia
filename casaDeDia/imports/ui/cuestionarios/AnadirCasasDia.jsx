import React from 'react';
import { Grid, Paper, TextField, Select, MenuItem, Button } from '@material-ui/core';

export default function AnadirCasasDia() {
        const [nombre, setNombre] = React.useState('');
        const [direccion, setDireccion] = React.useState('');
        const [actividades, setActividades] = React.useState([]);
        const [restricciones, setRestricciones] = React.useState([]);
        const [horarioApertura, setHorarioApertura] = React.useState('');
        const [horarioCierre, setHorarioCierre] = React.useState('');
        const [cupoLimite, setCupoLimite] = React.useState('');
        const [open, setOpen] = React.useState(false);

        const handleChangeCupoLimite = (event) => {
                setCupoLimite(event.target.value);
        };

        const handleCloseCupoLimite = () => {
                setOpen(false);
        };

        const handleOpenCupoLimite = () => {
                setOpen(true);
        };


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
                        <TextField />
                </Grid>
        </Grid>
                <Grid item xs={4}>
                        <Grid item xs={12}>Restricciones</Grid>
                        <Grid item xs={12}>
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
                <Button variant="contained" color="primary">Crear</Button>                        
        </Grid>
                        
        </Grid>
                                                                
</Paper>

)
 }