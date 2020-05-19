import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';
import TarjetasCasasDeDia from '../casasDeDia/TarjetasCasasDeDia';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
   
}));

export default function CasasDeDia() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [casasDeDia, setCasasDeDia] = useState([])
    const [borrarCasaDia, setBorrarCasaDia] = useState(false);
    const [editarCasaDIa, setEditarCasaDia] = useState(false);

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
                                handleAbrirBorrarCasaDia={handleAbrirBorrarCasaDia}
                                handleAbrirEditarCasaDia={handleAbrirEditarCasaDia}
                                />
                    ))}
                        </Grid>  
            </Grid>
                </Paper>
        </Grid>
            <ModalCrearCasaDeDia
                handleCloseModal={handleCloseModal}
                openModal={openModal}
            />
        </>
    )
}