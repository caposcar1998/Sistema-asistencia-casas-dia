import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearCentro from '../modales/ModaCrearCentro';
import TarjetasCentros from './TarjetasCentros';
import BorrarCentro from './BorrarCentro';
import EditarCentro from './EditarCentro';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
}));

export default function Centros() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [centros, setCentros] = useState([])
    const [openEditarCentro, setOpenEditarCentro] = useState(false);
    const [openBorrarCentro, setOpenBorrarCentro] = useState(false);
    const [centroSeleccionado, setCentroSeleccionado] = useState();

    const handleOpenBorrarCentro= (centro) => {
        setCentroSeleccionado(centro)
        setOpenBorrarCentro(true);
    };

    const handleOpenEditarCentro = (centro) => {
        setCentroSeleccionado(centro)
        setOpenEditarCentro(true);
    };

    useEffect(() => {
        centroServidor();
    }, []);



    const handleCerrarBorrarCentro =() => { 
        setOpenBorrarCentro(false);
    } 
    const handleCerrarEditarCentro = () => {
        setOpenEditarCentro(false);
    } 
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    function centroServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerCentro",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCentros(res)
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo Centro</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {centros.map((centro) => (
                            <TarjetasCentros
                                centro={centro}
                                handleOpenBorrarCentro={handleOpenBorrarCentro}
                                handleOpenEditarCentro={handleOpenEditarCentro}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarCentro
                centroSeleccionado={centroSeleccionado}
                openBorrarCentro={openBorrarCentro}
                handleCerrarBorrarCentro={handleCerrarBorrarCentro}
                centroServidor={centroServidor}
            />
            <EditarCentro
                centroSeleccionado={centroSeleccionado}
                openEditarCentro={openEditarCentro}
                handleCerrarEditarCentro={handleCerrarEditarCentro}
                centroServidor={centroServidor}
            />
            <ModalCrearCentro
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                centroServidor={centroServidor}
            />
        </>
    )
}