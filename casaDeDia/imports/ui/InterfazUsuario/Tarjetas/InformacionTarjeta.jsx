import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, List, ListItem, TableContainer, Table, TableHead, TableRow, Paper, withStyles, TableCell, TableBody } from '@material-ui/core';
import CryptoJS from "react-native-crypto-js";

const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "200px",
        backgroundImage: "url('/fotos/Fondo1.jpg')"
    },
    table: {
        minWidth: 700,
    }
});

export default function InformacionTarjeta({ idTarjeta }) {
    const classes = useStyles();
    const [tarjeta, setTarjeta] = useState();
    const [nombreTarjeta, setNombreTarjeta] = useState();
    const [vigencia, setVigencia] = useState();
    const [cantidadDeposito, setCantidadDeposito] = useState();
    const [tiempoDeposito, setTiempoDeposito] = useState();
    const [banco, setBanco] = useState();
    const [serviciosSalud, setServiciosSalud] = useState([]);   
    const [lugaresAceptados, setLugaresAceptados] = useState([]);
    const [hospital, setHospital] = useState();
    
    useEffect(() => {
        tarjetaServidor();
    }, []);

    function tarjetaServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("leerTarjeta",
                    idTarjeta,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setTarjeta(res.tipo);
                            console.log(tarjeta)
                            if (res.tipo == "dinero") {
                                setTiempoDeposito(CryptoJS.AES.decrypt(res.tiempo, 'secret key 123').toString(CryptoJS.enc.Utf8))
                                setBanco(CryptoJS.AES.decrypt(res.banco, 'secret key 123').toString(CryptoJS.enc.Utf8))
                                setCantidadDeposito(CryptoJS.AES.decrypt(res.cantidad, 'secret key 123').toString(CryptoJS.enc.Utf8))
                                setNombreTarjeta(CryptoJS.AES.decrypt(res.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8))

                            }
                            if (res.tipo == "despensa") {
                                setLugaresAceptados(res.lugaresAceptados)
                                setCantidadDeposito(CryptoJS.AES.decrypt(res.cantidad, 'secret key 123').toString(CryptoJS.enc.Utf8))
                                setNombreTarjeta(CryptoJS.AES.decrypt(res.nombre, 'secret key 123').toString(CryptoJS.enc.Utf8))
                            }
                            if (res.tipo == "salud") {
                                setServiciosSalud(res.servicios)
                                setNombreTarjeta(res.nombre)
                                setHospital(res.hospital)
                            }
                            setVigencia(CryptoJS.AES.decrypt(res.fechaVigencia, 'secret key 123').toString(CryptoJS.enc.Utf8))
                            resolve()
                        }
                    });
            }
        )
    }

    function createData(documento, presentacion) {
        return { documento, presentacion };
    }


    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const rows = [
        createData('Documento que compruebe tu identidad', "Original y Copia"),
        createData('Documento que compruebe tu edad', "Original y Copia"),
        createData('Comprobante de domicilio', "Original y Copia"),
        createData('Entregar 2 fotografías tamaño infantil (blanco y negro o color)', "Original y Copia"),
    ];

    return (
        <Grid container>

            <Grid item xs={12} className={classes.fotoPrincipal}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h1">{nombreTarjeta}</Typography>
                </Grid>
            </Grid>

            <Grid item xs={8}>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>¿Cómo tramitarla?</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <StyledTableRow >
                                        <StyledTableCell component="th" scope="row">
                                        <Typography>Acudir a la delegación más cercana</Typography>
                                        </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        <Typography>Contactar a tu trabajadora social para realizar el trámite desde tu hogar</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <List>
                        <ListItem><Typography></Typography></ListItem>
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Documento Requerido</StyledTableCell>
                                    <StyledTableCell align="right">Presentación</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.documento}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.documento}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.presentacion}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>


            </Grid>
            <Grid item xs={4}>

                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Información de la tarjeta</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    <Typography>{"Vigencia: " + vigencia}</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                                {tarjeta == "dinero" ?
                                <>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                            <Typography>{"Tiempo depósito: Cada " + tiempoDeposito}</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                            <Typography>{"Cantidad depósito: $" + cantidadDeposito}</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                            <Typography>{"Banco: " + banco}</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                                </>    
                                : tarjeta == "salud" ?
                                    <>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row">
                                                    <Typography>{"Hospital: " + hospital}</Typography>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row">
                                                {serviciosSalud.map((servicio) => (
                                                    <Typography >{servicio.nombre}</Typography>
                                                ))}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </> 
                                :
                                    <>
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                <Typography>{"Cantidad depósito: $" + cantidadDeposito}</Typography>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row">
                                                {
                                                lugaresAceptados == [] ?
                                                <Typography >Sin registro</Typography> :            
                                                lugaresAceptados.map((lugar) => (
                                                <Typography >{lugar.nombre}</Typography>
                                                ))}
                                            </StyledTableCell>
                                        </StyledTableRow>                    
                                    </>    
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </Grid>


    )
 }
