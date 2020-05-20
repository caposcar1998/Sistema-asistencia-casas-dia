import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';
import TarjetasCasasDeDia from '../casasDeDia/TarjetasCasasDeDia';
import BorrarCasaDia from '../casasDeDia/BorrarCasaDia';
import EditarCasaDia from '../casasDeDia/EditarCasaDeDia';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
   
}));

export default function CasasDeDia() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [casasDeDia, setCasasDeDia] = useState([])
    const [openEditarCasaDia, setOpenEditarCasaDia] = useState(false);
    const [openBorrarCasaDia, setOpenBorrarCasaDia] = useState(false);

    const handleOpenBorrarCasaDia = () => {
        setOpenBorrarCasaDia(true);
    };

    const handleOpenEditarCasaDia = () => {
        setOpenEditarCasaDia(true);
    };

    useEffect(() => {
        casasDeDiaServidor();
    }, []);


    const handleAbrirBorrarCasaDia = () => {
        console.log("abrir cerrar");
        setBorrarCasaDia(true);
    }

    const handleCerrarBorrarCasaDia =() => { 
        setBorrarCasaDia(false);
    } 

    const handleAbrirEditarCasaDia = () => {
        console.log("Abrir editar");
        setEditarCasaDia(true);
    }

    const handleCerrarEditarCasaDia = () => {
        setEditarCasaDia(false);
    } 

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function casasDeDiaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerCasasDeDia",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setCasasDeDia(res)
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nueva casa de dia</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {casasDeDia.map((casa) => (
                            <TarjetasCasasDeDia
                                casa={casa}
                                handleOpenBorrarCasaDia={handleOpenBorrarCasaDia}
                                handleOpenEditarCasaDia={handleOpenEditarCasaDia}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarCasaDia
                openBorrarCasaDia={openBorrarCasaDia}
            />
            <EditarCasaDia
                openEditarCasaDia={openEditarCasaDia}
            />
            <ModalCrearCasaDeDia
                handleCloseModal={handleCloseModal}
                openModal={openModal}
            />
        </>
    )
}