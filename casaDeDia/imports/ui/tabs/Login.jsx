import React, { useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { Paper, Button } from '@material-ui/core';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { makeStyles } from '@material-ui/core/styles';
import { withHistory } from 'react-router-dom';
import AdministradorPage from '../layoutsGenerales/AdministradorPage';
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
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    }

})); 


export default function Login() {
    const classes = useStyles();
    const [usuario, setUsuario] = useState();
    const [contrasena, setContrasena] = useState(); 
    const [alert, setAlert] = useState(); 
    const [state, setState] = useState(); 
    const [message, setMessage] = useState(); 

    function ingresarSistema() {
        setAlert(null)
        setState(false)
        return new Promise(
            (resolve, reject) => {
                Meteor.call("encontrarAdministrador",
                    usuario, contrasena,
                    (err, res) => {
                        if (err) {
                            reject()
                            setAlert("error")
                            setState(true)
                            setMessage("Error al ingresar")
                        } else {
                            resolve()
                            setAlert("success")
                            setState(true)
                            setMessage("Éxito")
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
                                <TextField id="usuario" label="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                                <TextField id="contrasena" label="Contrasena" type="password" onChange={(e) => setContrasena(e.target.value)}/>
                        </form>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={ingresarSistema} variant="contained" color="primary">Ingresar</Button>
                            
                        </Grid>
                  </Paper>
                  {state &&
                  <CustomSnackbars type={alert} state={state} message={message}/>
                  }
                </Grid>
                
          </Container>
      </React.Fragment>
      

      
);
}
