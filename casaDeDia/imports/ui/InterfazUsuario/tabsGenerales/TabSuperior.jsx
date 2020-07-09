import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    tabGeneral: {
        backgroundColor: "#1D813B"
    },
    icono: {
        height: "100px"
    }
}));

export default function TabSuperior() {
    const classes = useStyles();

    function loginAdministrador() {
        FlowRouter.go('login')
     }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.tabGeneral}>
                <Toolbar>
                    <img src={"/fotos/tlalpanIcono.png"} className={classes.icono}/>
                    <Typography variant="h6" className={classes.title}>
                        Delegacion tlalpan
          </Typography>
                    <Button color="inherit" onClick={loginAdministrador}>Acceso</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}