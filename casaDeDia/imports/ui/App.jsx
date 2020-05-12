import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  fondoPagina: {
    backgroundColor: "white"
  }
}));

export default function App(props) {
  const classes = useStyles();

  

  return (
    <div>

      {props.content }

      </div>
    
);
}
