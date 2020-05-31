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
import AddImage from '../../utilities/AddImage';
import { Accounts } from "meteor/accounts-base";


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
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    }

})); 


export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState(); 
    const [alertMessage, setAlertMessage] = useState({
        type: '',
        message: '',
    });

    function ingresarSistema(){
        Meteor.loginWithPassword(username, password, function(err){
            if(err){
                console.log(err.reason);
                window.alert("Usuario o contraseña incorrectos. Intente de nuevo.")
            }else{
                FlowRouter.go('administrador')

            }
        });
    }
    

    /*function ingresarSistema() {
        setAlertMessage(null)
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarAdministrador",
                    usuario, contrasena,
                    (err, res) => {
                        if (err) {
                            reject()
                            setAlertMessage({
                                type: 'error',
                                message: 'Error'
                            })
                        } else {
                            resolve()
                            setAlertMessage({
                                type: 'success',
                                message: 'Success'
                            })
                            
                            //FlowRouter.go('administrador') 
                        }
                    });

            }

        )
    }*/

  return(

      <>
          <CssBaseline />
          <Container maxWidth="sm">
              <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh' }}
                  color = "yellow"  
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
                                <TextField id="usuario" label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <TextField id="contrasena" label="Contrasena" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        </form>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={ingresarSistema} variant="contained" color="primary">Ingresar</Button>
                            
                        </Grid>
                  </Paper>
                  {alertMessage &&
                    <CustomSnackbars 
                        autoHideDuration={4000} 
                        severityOfAlert={alertMessage.type}
                        message={alertMessage.message}
                    >   
                    </CustomSnackbars>
                  }
                  
                </Grid>
                
          </Container>
      </>
      

      
);
}
