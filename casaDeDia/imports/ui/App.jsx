import React from 'react';
import  AdministradorTab  from './tabs/AdministradorTab.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Login from './tabs/Login.jsx';
import MostrarBeneficios from './componenetes/MostrarBeneficios.jsx';

const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "white"
  }
}));

export default function App() {
  const classes = useStyles();

  

  return(
    <div className={classes.fondoPagina}>
      
      
      {
        //<MostrarBeneficios/>
        <Login />
        //<AdministradorTab />
      }
    
  </div>
);
}
