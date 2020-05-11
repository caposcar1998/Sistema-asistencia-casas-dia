import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from './tabs/Login.jsx';
import AdministradorPage from './layoutsGenerales/AdministradorPage.jsx';

const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "white"
  }
}));

export default function App() {
  const classes = useStyles();

  

  return(
    <div className={classes.fondoPagina}>
      
      
      
        {  //<Login />
        }
        <AdministradorPage/>
      
    
  </div>
);
}
