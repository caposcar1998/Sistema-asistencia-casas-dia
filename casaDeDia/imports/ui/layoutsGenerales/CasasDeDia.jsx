import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button} from '@material-ui/core';
import ModalCrearCasaDeDia from '../modales/ModaCrearCasaDeDia';
import TarjetasCasasDeDia from '../casasDeDia/TarjetasCasasDeDia';


const useStyles = makeStyles((theme) => ({
    fondo: {
        backgroundColor: "#006400"
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function CasasDeDia() { 
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [casasDeDia, setCasasDeDia] = useState([])


    useEffect(() => {
        casasDeDiaServidor();
    }, []);


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
                            <TarjetasCasasDeDia casa={casa} classes={classes}/>
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