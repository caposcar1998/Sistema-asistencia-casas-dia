import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearTaller from '../modales/ModaCrearTaller';
import TarjetasTalleres from './TarjetasTalleres';
import BorrarTaller from './BorrarTaller';
import EditarTaller from './EditarTaller';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
}));

export default function Talleres() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [talleres, setTalleres] = useState([])
    const [openEditarTaller, setOpenEditarTaller] = useState(false);
    const [openBorrarTaller, setOpenBorrarTaller] = useState(false);
    const [tallerSeleccionado, setTallerSeleccionado] = useState();

    const handleOpenBorrarTaller= (taller) => {
        setTallerSeleccionado(taller)
        setOpenBorrarTaller(true);
    };

    const handleOpenEditarTaller = (taller) => {
        setTallerSeleccionado(taller)
        setOpenEditarTaller(true);
    };

    useEffect(() => {
        talleresServidor();
    }, []);



    const handleCerrarBorrarTaller =() => { 
        setOpenBorrarTaller(false);
    } 
    const handleCerrarEditarTaller = () => {
        setOpenEditarTaller(false);
    } 
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    function talleresServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTalleres",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTalleres(res)
                            resolve()
                        }
                    });
            }
        )
    }


    return (
        <>
            <Grid container className={classes.fondo}>
            <Paper>
            <Grid item xs={12}>
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo Taller</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {talleres.map((taller) => (
                            <TarjetasTalleres
                                taller={taller}
                                handleOpenBorrarTaller={handleOpenBorrarTaller}
                                handleOpenEditarTaller={handleOpenEditarTaller}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarTaller
                tallerSeleccionado={tallerSeleccionado}
                openBorrarTaller={openBorrarTaller}
                handleCerrarBorrarTaller={handleCerrarBorrarTaller}
                talleresServidor={talleresServidor}
            />
            <EditarTaller
                tallerSeleccionado={tallerSeleccionado}
                openEditarTaller={openEditarTaller}
                handleCerrarEditarTaller={handleCerrarEditarTaller}
                talleresServidor={talleresServidor}
            />
            <ModalCrearTaller
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                talleresServidor={talleresServidor}
            />
        </>
    )
}