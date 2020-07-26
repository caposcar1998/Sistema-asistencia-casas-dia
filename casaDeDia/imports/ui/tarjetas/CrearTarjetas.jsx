import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';
import TarjetasDeTarjetas from './TarjetasDeTarjetas';
import BorrarTarjeta from './BorrarTarjeta';
import EditarTarjeta from './EditarTarjeta';
import ModalCrearTarjeta from './ModalCrearTarjeta';




const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },

}));

export default function CrearTarjetas() {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [tarjetas, setTarjetas] = useState([])
    const [openEditarTarjeta, setOpenEditarTarjeta] = useState(false);
    const [openBorrarTarjeta, setOpenBorrarTarjeta] = useState(false);
    const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState();

    const handleOpenBorrarTarjeta = (tarjeta) => {
        setTarjetaSeleccionada(tarjeta)
        setOpenBorrarTarjeta(true);
    };

    const handleOpenEditarTarjeta = (casa) => {
        setTarjetaSeleccionada(casa)
        setOpenEditarTarjeta(true);
    };

    useEffect(() => {
        tarjetasServidor();
    }, []);



    const handleCerrarBorrarTarjeta = () => {
        setOpenBorrarTarjeta(false);
    }


    const handleCerrarEditarTarjeta = () => {
        setOpenEditarTarjeta(false);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };




    function tarjetasServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTarjetasServidor",
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTarjetas(res)
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
                        <Button onClick={handleOpenModal} variant="contained" color="primary">Nueva Tarjeta</Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {tarjetas.map((tarjeta) => (
                                <TarjetasDeTarjetas
                                    tarjeta={tarjeta}
                                    handleOpenBorrarTarjeta={handleOpenBorrarTarjeta}
                                    handleOpenEditarTarjeta={handleOpenEditarTarjeta}
                                />
                            ))}
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
            <BorrarTarjeta
                tarjetaSeleccionada={tarjetaSeleccionada}
                openBorrarTarjeta={openBorrarTarjeta}
                handleCerrarBorrarTarjeta={handleCerrarBorrarTarjeta}
                tarjetasServidor={tarjetasServidor}
            />
            <EditarTarjeta
                tarjetaSeleccionada={tarjetaSeleccionada}
                openEditarTarjeta={openEditarTarjeta}
                handleCerrarEditarTarjeta={handleCerrarEditarTarjeta}
                tarjetasServidor={tarjetasServidor}
            />
            <ModalCrearTarjeta
                handleCloseModal={handleCloseModal}
                openModal={openModal}
                tarjetasServidor={tarjetasServidor}
            />
        </>
    )
}