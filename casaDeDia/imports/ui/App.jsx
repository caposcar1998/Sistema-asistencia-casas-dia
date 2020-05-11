import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from './tabs/Login.jsx';
import AdministradorPage from './layoutsGenerales/AdministradorGeneralMenu.jsx';

const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "white"
  }
}));

export default function App(props) {
  const classes = useStyles();

  

  return(
      props.content
);
}
