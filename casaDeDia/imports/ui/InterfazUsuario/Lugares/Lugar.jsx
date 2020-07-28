import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles, TableContainer, Table, TableHead, TableBody, withStyles, TableCell, TableRow, Paper, List, ListItem } from "@material-ui/core";




const useStyles = makeStyles({

    fotoPrincipal: {
        width: "100%",
        height: "100%"
    },
    table: {
    minWidth: 700,
}
});

export default function Lugar({ casaSeleccionada }) {
    const classes = useStyles();
    const [lugar, setLugar] = useState([]);

    useEffect(() => {
        lugarServidor();
    }, []);


    function lugarServidor() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarLugar",
                    casaSeleccionada,
                    (err, res) => {
                        if (err) {
                            reject()
                        } else {
                            setLugar(res)
                            console.log(res)
                            console.log(lugar.restricciones)
                            resolve()
                        }
                    });
            }
        )
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





    return (
        <Grid container>
            <Grid item xs={12} >
                <Grid container alignItems="center" justify="center">
                    <Typography variant="h1">{lugar.nombre}</Typography>
                </Grid>
                
            </Grid>
            <Grid item xs={6}>
                <img src={lugar.foto}  className={classes.fotoPrincipal} />
            </Grid>
            <Grid item xs={6}>

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                
                >


                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Información</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                    <StyledTableRow >
                                        <StyledTableCell component="th" scope="row">
                                        Dirección
                                        </StyledTableCell>
                                    <StyledTableCell align="right">{lugar.direccion}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        Horario
                                        </StyledTableCell>
                                    <StyledTableCell align="right">{lugar.horarioApertura}-{lugar.horarioCierre}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        Tipo de institución:
                                        </StyledTableCell>
                                    <StyledTableCell align="right">{lugar.tipoInstitucion}</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        Actividades:
                                        </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <List>
                                        {
                                            lugar.actividades == null ?
                                                <ListItem>No hay actividades registradas</ListItem> :
                                                lugar.actividades.map((actividad) => (
                                                    <ListItem variant="h5">{actividad.nombre + " Descripción: " + actividad.descripcion}</ListItem>
                                        ))}
                                        </List>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Restricciones:
                                        </StyledTableCell>
                                <StyledTableCell align="right">
                                    <List>
                                        {
                                            lugar.restricciones == null ?
                                                <ListItem>No hay restricciones registradas</ListItem> :
                                                lugar.restricciones.map((restriccion) => (
                                                    <ListItem variant="h5">{restriccion.nombre + " Descripción: " + restriccion.descripcion}</ListItem>
                                                ))}
                                    </List>
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Costo:
                                        </StyledTableCell>
                                <StyledTableCell align="right">{lugar.costo}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Cupo límite:
                                        </StyledTableCell>
                                <StyledTableCell align="right">{lugar.cupoLimite}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Contacto:
                                        </StyledTableCell>
                                <StyledTableCell align="right">Sin información</StyledTableCell>
                            </StyledTableRow>
                        </Table>

                    </TableContainer>


                </Grid>
            </Grid>
        </Grid>
    )

}