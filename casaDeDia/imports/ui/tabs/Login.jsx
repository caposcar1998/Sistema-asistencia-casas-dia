import React, { useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Paper, Button } from '@material-ui/core';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { makeStyles } from '@material-ui/core/styles';
import CustomSnackbars from '../../utilities/snackbar/CustomSnackbars';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    papel: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
 
    },
    inputRoot: {
        fontSize: 30
    },
    labelRoot: {
        fontSize: 20,
        color: "red",
        "&$labelFocused": {
            color: "purple"
        }
    },
    labelFocused: {}

})); 


export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState(); 
    const [snackBarState, setSnackBarState] = useState(); 
    const [alert, setAlert] = useState();
    const [message, setMessage] = useState(); 

    function ingresarSistema(){
        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                setAlert("error")
                setSnackBarState(true)
                setMessage("Error al ingresar")
            } else {
                setAlert("success")
                setSnackBarState(true)
                setMessage("Ingreso correcto")
                FlowRouter.go('administrador')

            }
        });
    }
    


  return(

      <>
          <CssBaseline />

              <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh' }}
               > 
                  <Paper className={classes.papel}>
                    
                    
                    
                    <Grid item xs={12}>
                      <Typography variant={xs = "h5", lg = "h3"}>Administración de casas de día para adultos mayores</Typography>   
                    </Grid>
                    <Grid item xs={12}>
                          <Typography variant={xs = "h5", lg = "h3"}>Administrador</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <form className={classes.root} noValidate autoComplete="off">
                              <TextField
                                  InputProps={{ classes: { root: classes.inputRoot } }}
                                  InputLabelProps={{
                                      classes: {
                                          root: classes.labelRoot,
                                          focused: classes.labelFocused
                                      }
                                  }}
                                  id="usuario" label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                              <TextField
                                  InputProps={{ classes: { root: classes.inputRoot } }}
                                  InputLabelProps={{
                                      classes: {
                                          root: classes.labelRoot,
                                          focused: classes.labelFocused
                                      }
                                  }}
                                  id="contrasena" label="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </form>
                        <Grid>
                            <p>Al entrar a este sistema, estás aceptando los términos y condiciones de la Alcaldia de Tlalpan</p>
                        </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={ingresarSistema} variant="contained" color="primary">Ingresar</Button>
                            
                        </Grid>
                  </Paper>
                  {snackBarState &&
                      <CustomSnackbars type={alert} state={snackBarState} message={message}  />
                  }
                  
                </Grid>
                
         
      </>
      

      
);
}
