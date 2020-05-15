import React from 'react';
import { Grid, Paper, TextField, Select, MenuItem } from '@material-ui/core';

export default function AnadirCasasDia() {
        const [age, setAge] = React.useState('');
        const [open, setOpen] = React.useState(false);

        const handleChange = (event) => {
                setAge(event.target.value);
        };

        const handleClose = () => {
                setOpen(false);
        };

        const handleOpen = () => {
                setOpen(true);
        };


return (
        
        <Paper elevation={3}>                    

                <Grid container>                            
                        <Grid item xs={4}>
                                <Grid item xs={12}>Nombre</Grid>
                        <Grid item xs={12}>
                                <TextField />
                        </Grid>
                        </Grid>

                        <Grid item xs={4}>
                                <Grid item xs={12}>Direccion</Grid>
                        <Grid item xs={12}>
                                <TextField />
                        </Grid>
                </Grid>

                                                
                        <Grid item xs={4}>
                                <Grid item xs={12}>Actividades</Grid>
                        <Grid item xs={12}>
                                <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={age}
                                        onChange={handleChange}
                                >
                                        <MenuItem value="">
                                                <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                </Select>
                        </Grid>
                </Grid>

                        <Grid item xs={4}>
                                <Grid item xs={12}>Restricciones</Grid>
                                <Grid item xs={12}>
                                        <TextField />
                                </Grid>
                </Grid>

                        <Grid item xs={4}>
                                <Grid item xs={12}>Horario</Grid>
                        <Grid item xs={12}>
                                <TextField />
                        </Grid>
                </Grid>
                                                                
                        <Grid item xs={4}>
                                <Grid item xs={12}>Horario atencion</Grid>
                        <Grid item xs={12}>
                                <TextField />
                        </Grid>
                </Grid>
                                                                

                <Grid item xs={4}>
                        <Grid item xs={12}>Cupo limite</Grid>
                        <Grid item xs={12}>
                                        <TextField />
                        </Grid>
                                </Grid>
                                
                </Grid>
                                                                        
        </Paper>

)
 }