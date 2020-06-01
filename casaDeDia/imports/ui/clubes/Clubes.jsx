import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearClub from '../modales/ModaCrearClub';
import TarjetasClubes from './TarjetasClubes';
import BorrarClub from './BorrarClub';
import EditarClub from './EditarClub';
import ModalAnadirPersonal from './ModalAnadirPersonal';
import ModalAnadirUsuario from './ModalAnadirUsuario';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
   
}));

export default function Clubes() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [clubes, setClubes] = useState([])
    const [openEditarClub, setOpenEditarClub] = useState(false);
    const [openBorrarClub, setOpenBorrarClub] = useState(false);
    const [clubSeleccionado, setClubSeleccionado] = useState();
    const [openAnadirEmpleado, setOpenAbrirEmpleado] = useState(false);
    const [openAnadirPersona, setOpenAbrirPersona] = useState(false);

    const handleOpenBorrarClub = (club) => {
        setClubSeleccionado(club)
        setOpenBorrarClub(true);
    };

    const handleOpenEditarClub = (club) => {
        setClubSeleccionado(club)
        setOpenEditarClub(true);
    };

    useEffect(() => {
        clubesServidor();
    }, []);



    const handleCerrarBorrarClub =() => { 
        setOpenBorrarClub(false);
    } 


    const handleCerrarEditarClub = () => {
        setOpenEditarClub(false);
    } 

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenAnadirEmpleado = (club) => {
        setClubSeleccionado(club)
        setOpenAbrirEmpleado(true)
     }

    const handleOpenAnadirUsuario = (club) => {
        setClubSeleccionado(club)
        setOpenAbrirPersona(true)
     }

    const handleCerrarAnadirEmpleado = () => {
        setOpenAbrirEmpleado(false)
     }

    const handleCerrarAnadirUsuario = () => {
        setOpenAbrirPersona(false)
     }

    function clubesServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerClub",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setClubes(res)
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo club</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {clubes.map((club) => (
                            <TarjetasClubes
                                club={club}
                                handleOpenBorrarClub={handleOpenBorrarClub}
                                handleOpenEditarClub={handleOpenEditarClub}
                                handleOpenAnadirEmpleado={handleOpenAnadirEmpleado}
                                handleOpenAnadirUsuario={handleOpenAnadirUsuario}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarClub
                clubSeleccionado={clubSeleccionado}
                openBorrarClub={openBorrarClub}
                handleCerrarBorrarClub={handleCerrarBorrarClub}
                clubesServidor={clubesServidor}
            />
            <EditarClub
                clubSeleccionado={clubSeleccionado}
                openEditarClub={openEditarClub}
                handleCerrarEditarClub={handleCerrarEditarClub}
                clubesServidor={clubesServidor}
            />
             <ModalCrearClub
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                clubesServidor={clubesServidor}
            />
            <ModalAnadirPersonal
                clubSeleccionada={clubSeleccionado}
                handleCerrarAnadirEmpleado={handleCerrarAnadirEmpleado}
                openAnadirEmpleado={openAnadirEmpleado}
            />
            <ModalAnadirUsuario
                clubSeleccionado={clubSeleccionado}
                handleCerrarAnadirUsuario={handleCerrarAnadirUsuario}
                openAnadirPersona={openAnadirPersona}
            />
        </>
    )
}