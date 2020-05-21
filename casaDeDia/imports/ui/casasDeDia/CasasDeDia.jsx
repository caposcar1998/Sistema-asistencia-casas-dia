import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';
import TarjetasCasasDeDia from './TarjetasCasasDeDia';
import BorrarCasaDia from './BorrarCasaDia';
import EditarCasaDia from './EditarCasaDeDia';


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
    const [casaSeleccionada, setCasaSeleccionada] = useState();

    const handleOpenBorrarCasaDia = (casa) => {
        setCasaSeleccionada(casa)
        setOpenBorrarCasaDia(true);
    };

    const handleOpenEditarCasaDia = (casa) => {
        setCasaSeleccionada(casa)
        setOpenEditarCasaDia(true);
    };

    useEffect(() => {
        casasDeDiaServidor();
    }, []);



    const handleCerrarBorrarCasaDia =() => { 
        setOpenBorrarCasaDia(false);
    } 


    const handleCerrarEditarCasaDia = () => {
        setOpenEditarCasaDia(false);
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
                casaSeleccionada={casaSeleccionada}
                openBorrarCasaDia={openBorrarCasaDia}
                handleCerrarBorrarCasaDia={handleCerrarBorrarCasaDia}
                casasDeDiaServidor={casasDeDiaServidor}
            />
            <EditarCasaDia
                casaSeleccionada={casaSeleccionada}
                openEditarCasaDia={openEditarCasaDia}
                handleCerrarEditarCasaDia={handleCerrarEditarCasaDia}
                casasDeDiaServidor={casasDeDiaServidor}
            />
            <ModalCrearCasaDeDia
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                casasDeDiaServidor={casasDeDiaServidor}
            />
        </>
    )
}