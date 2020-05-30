import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearAdultoMayor from '../modales/ModalCrearAdultoMayor';
import TarjetasAdultoMayor from './TarjetasAdultoMayor';
import BorrarAdultoMayor from './BorrarAdultoMayor';
import EditarAdultoMayor from './EditarAdultoMayor';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
   
}));

export default function AdultoMayor() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [adultoMayor, setAdultoMayor] = useState([])
    const [openEditarAdultoMayor, setOpenEditarAdultoMayor] = useState(false);
    const [openBorrarAdultoMayor, setOpenBorrarAdultoMayor] = useState(false);
    const [adultoSeleccionado, setAdultoSeleccionado] = useState();

    const handleOpenBorrarAdultoMayor = (adulto) => {
        setAdultoSeleccionado(adulto)
        setOpenBorrarAdultoMayor(true);
    };

    const handleOpenEditarAdultoMayor = (adulto) => {
        setAdultoSeleccionado(adulto)
        setOpenEditarAdultoMayor(true);
    };

    useEffect(() => {
        adultoMayorServidor();
    }, []);



    const handleCerrarBorrarAdultoMayor =() => { 
        setOpenBorrarAdultoMayor(false);
    } 


    const handleCerrarEditarAdultoMayor = () => {
        setOpenEditarAdultoMayor(false);
    } 

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function adultoMayorServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerAdultoMayor",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setAdultoMayor(res)
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo Adulto Mayor</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {adultoMayor.map((adulto) => (
                            <TarjetasAdultoMayor
                                adulto={adulto}
                                handleOpenBorrarAdultoMayor={handleOpenBorrarAdultoMayor}
                                handleOpenEditarAdultoMayor={handleOpenEditarAdultoMayor}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarAdultoMayor
                adultoSeleccionado={adultoSeleccionado}
                openBorrarAdultoMayor={openBorrarAdultoMayor}
                handleCerrarBorrarAdultoMayor={handleCerrarBorrarAdultoMayor}
                adultoMayorServidor={adultoMayorServidor}
            />
            <EditarAdultoMayor
                adultoSeleccionado={adultoSeleccionado}
                openEditarAdultoMayor={openEditarAdultoMayor}
                handleCerrarEditarAdultoMayor={handleCerrarEditarAdultoMayor}
                adultoMayorServidor={adultoMayorServidor}
            />
            <ModalCrearAdultoMayor
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                adultoMayorServidor={adultoMayorServidor}
            />
        </>
    )
}