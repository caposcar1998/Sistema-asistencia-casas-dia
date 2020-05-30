import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearAsilo from '../modales/ModaCrearAsilo';
import TarjetasAsilos from './TarjetasAsilos';
import BorrarAsilos from './BorrarAsilos';
import EditarAsilos from './EditarAsilos';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
   
}));

export default function Asilos() { 
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
                Meteor.call("leerAsilo",
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo asilo</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {casasDeDia.map((casa) => (
                            <TarjetasAsilos
                                casa={casa}
                                handleOpenBorrarCasaDia={handleOpenBorrarCasaDia}
                                handleOpenEditarCasaDia={handleOpenEditarCasaDia}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarAsilos
                casaSeleccionada={casaSeleccionada}
                openBorrarCasaDia={openBorrarCasaDia}
                handleCerrarBorrarCasaDia={handleCerrarBorrarCasaDia}
                casasDeDiaServidor={casasDeDiaServidor}
            />
            <EditarAsilos
                casaSeleccionada={casaSeleccionada}
                openEditarCasaDia={openEditarCasaDia}
                handleCerrarEditarCasaDia={handleCerrarEditarCasaDia}
                casasDeDiaServidor={casasDeDiaServidor}
            />
            <ModalCrearAsilo
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                casasDeDiaServidor={casasDeDiaServidor}
            />
        </>
    )
}