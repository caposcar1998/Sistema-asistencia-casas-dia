import React from 'react';
import  AdministradorTab  from './tabs/AdministradorTab.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "#006400"
  }
}));

export default function App() {
  const classes = useStyles();

  

  return(
    <div className={classes.fondoPagina}>
    <AdministradorTab />
  </div>
);
}
