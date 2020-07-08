import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
}));

export default function TabSuperior() {
    const classes = useStyles();

    function loginAdministrador() {
        FlowRouter.go('login')
     }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Delegacion tlalpan
          </Typography>
                    <Button color="inherit" onClick={loginAdministrador}>Acceso</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}