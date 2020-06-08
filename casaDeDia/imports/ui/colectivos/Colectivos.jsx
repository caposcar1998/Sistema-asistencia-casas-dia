import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearColectivo from '../modales/ModaCrearColectivo';
import TarjetasColectivos from './TarjetasColectivos';
import BorrarColectivo from './BorrarColectivo';
import EditarColectivo from './EditarColectivo';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
}));

export default function Colectivos() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [colectivos, setColectivos] = useState([])
    const [openEditarColectivo, setOpenEditarColectivo] = useState(false);
    const [openBorrarColectivo, setOpenBorrarColectivo] = useState(false);
    const [colectivoSeleccionado, setColectivoSeleccionado] = useState();

    const handleOpenBorrarColectivo= (colectivo) => {
        setColectivoSeleccionado(colectivo)
        setOpenBorrarColectivo(true);
    };

    const handleOpenEditarColectivo = (colectivo) => {
        setColectivoSeleccionado(colectivo)
        setOpenEditarColectivo(true);
    };

    useEffect(() => {
        colectivosServidor();
    }, []);



    const handleCerrarBorrarColectivo =() => { 
        setOpenBorrarColectivo(false);
    } 
    const handleCerrarEditarColectivo = () => {
        setOpenEditarColectivo(false);
    } 
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function colectivosServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerColectivos",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setColectivos(res)
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
                <Button onClick={handleOpenModal} variant="contained" color="primary">Nuevo Colectivo</Button>
            </Grid>
        
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                        {colectivos.map((colectivo) => (
                            <TarjetasColectivos
                                colectivo={colectivo}
                                handleOpenBorrarColectivo={handleOpenBorrarColectivo}
                                handleOpenEditarColectivo={handleOpenEditarColectivo}
                                />
                    ))}
                        </Grid>  
                    </Grid>
                    
                </Paper>
            </Grid>
            <BorrarColectivo
                colectivoSeleccionado={colectivoSeleccionado}
                openBorrarColectivo={openBorrarColectivo}
                handleCerrarBorrarColectivo={handleCerrarBorrarColectivo}
                colectivosServidor={colectivosServidor}
            />
            <EditarColectivo
                colectivoSeleccionado={colectivoSeleccionado}
                openEditarColectivo={openEditarColectivo}
                handleCerrarEditarColectivo={handleCerrarEditarColectivo}
                colectivosServidor={colectivosServidor}
            />
            <ModalCrearColectivo
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                colectivosServidor={colectivosServidor}
            />
        </>
    )
}