import React from 'react';
import  AdministradorTab  from './tabs/AdministradorTab.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Login from './tabs/Login.jsx';

const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "white"
  }
}));

export default function App() {
  const classes = useStyles();

  

  return(
    <div className={classes.fondoPagina}>
      <Login />
      {
        //<AdministradorTab />
      }
    
  </div>
);
}
