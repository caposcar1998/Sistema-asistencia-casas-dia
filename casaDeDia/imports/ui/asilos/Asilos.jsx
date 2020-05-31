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
    const [asilos, setAsilos] = useState([])
    const [openEditarAsilos, setOpenEditarAsilos] = useState(false);
    const [openBorrarAsilos, setOpenBorrarAsilos] = useState(false);
    const [asiloSeleccionado, setAsiloSeleccionado] = useState();
    //const [openAnadirEmpleado, setOpenAbrirEmpleado] = useState(false);
    //const [openAnadirPersona, setOpenAbrirPersona] = useState(false);

    const handleOpenBorrarAsilos = (asilo) => {
        setAsiloSeleccionado(asilo)
        setOpenBorrarAsilos(true);
    };

    const handleOpenEditarAsilos = (asilo) => {
        setAsiloSeleccionado(asilo)
        setOpenEditarAsilos(true);
    };

    useEffect(() => {
        asilosServidor();
    }, []);

    const handleCerrarBorrarAsilos =() => { 
        setOpenBorrarAsilos(false);
    } 


    const handleCerrarEditarAsilos = () => {
        setOpenEditarAsilos(false);
    } 

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    /*const handleOpenAnadirEmpleado = (asilo) => {
        setCasaSeleccionada(asilo)
        setOpenAbrirEmpleado(true)
     }

    const handleOpenAnadirUsuario = (asilo) => {
        setCasaSeleccionada(asilo)
        setOpenAbrirPersona(true)
     }

    const handleCerrarAnadirEmpleado = () => {
        setOpenAbrirEmpleado(false)
     }

    const handleCerrarAnadirUsuario = () => {
        setOpenAbrirPersona(false)
     }*/

    function asilosServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerAsilo",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setAsilos(res)
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
                        {asilos.map((asilo) => (
                            <TarjetasAsilos
                                asilo={asilo}
                                handleOpenBorrarAsilos={handleOpenBorrarAsilos}
                                handleOpenEditarAsilos={handleOpenEditarAsilos}
                                /*handleOpenAnadirEmpleado={handleOpenAnadirEmpleado}
                                handleOpenAnadirUsuario={handleOpenAnadirUsuario}*/
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarAsilos
                asiloSeleccionado={asiloSeleccionado}
                openBorrarAsilos={openBorrarAsilos}
                handleCerrarBorrarAsilos={handleCerrarBorrarAsilos}
                asilosServidor={asilosServidor}
            />
            <EditarAsilos
                asiloSeleccionado={asiloSeleccionado}
                openEditarAsilos={openEditarAsilos}
                handleCerrarEditarAsilos={handleCerrarEditarAsilos}
                asilosServidor={asilosServidor}
            />
            <ModalCrearAsilo
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                asilosServidor={asilosServidor}
            />
            {/*<ModalAnadirPersonal
                casaSeleccionada={casaSeleccionada}
                handleCerrarAnadirEmpleado={handleCerrarAnadirEmpleado}
                openAnadirEmpleado={openAnadirEmpleado}
            />
            <ModalAnadirUsuario
                casaSeleccionada={casaSeleccionada}
                handleCerrarAnadirUsuario={handleCerrarAnadirUsuario}
                openAnadirPersona={openAnadirPersona}
            />*/}
        </>
    )
}