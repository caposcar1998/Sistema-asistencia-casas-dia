import React, { useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Paper, Button } from '@material-ui/core';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { withHistory } from 'react-router-dom';
import AdministradorPage from '../layoutsGenerales/AdministradorPage';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    papel: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    }
})); 


export default function Login() {
    const classes = useStyles();
    const [usuario, setUsuario] = useState();
    const [contrasena, setContrasena] = useState();


    function ingresarSistema() {
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarAdministrador",
                    usuario, contrasena,
                    (err, res) => {
                        if (err) {
                            reject()
                            alert("usuario no registrado")
                        } else {
                            resolve()
                            alert("bn") 
                            FlowRouter.go('administrador')
                        }
                    });

            }

        )
     }


  return(

      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
              <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh' }}
              >
                  <Paper className={classes.papel}>
                  <Grid item xs={12}>
                      <Typography>Adminsitracion de casas de dia para adultos mayores</Typography>   
                  </Grid>
                  <Grid item xs={12}>
                      <Typography>Administrador</Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <form className={classes.root} noValidate autoComplete="off">
                              <TextField id="usuario" label="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                              <TextField id="contrasena" label="Contrasena" type="password" onChange={(e) => setContrasena(e.target.value)}/>
                      </form>
                      </Grid>
                      <Grid item xs={12}>
                          <Button onClick={ingresarSistema} variant="contained" color="primary">Ingresar</Button>
                      </Grid>
                  </Paper>
                  
                </Grid>

              
          </Container>
      </React.Fragment>
      
      
      
);
}
