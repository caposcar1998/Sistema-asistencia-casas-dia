import React, {useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function MenuGeneralAdministrador() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [pagina, setPagina] = useState("administrador")

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function usuariosPage() {
        FlowRouter.go("administrador");
    }

    function beneficiosPage() {
        FlowRouter.go("beneficios");
    }

    function tarjetasPage() {
        FlowRouter.go("tarjetas");
    }

    function administradorPage() {
        FlowRouter.go("administradores");
    }

    function asilosPage() {
        FlowRouter.go("asilos");
    }

    function casasDeDiaPage() {
        FlowRouter.go("casasDeDia");
    }

    function clubesPage() {
        FlowRouter.go("clubes");
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={"Usuarios"} onClick={usuariosPage} >
                    <ListItemText primary={"Usuarios"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Asilos"} onClick={asilosPage} >
                    <ListItemText primary={"Asilos"} />
                </ListItem>
                <ListItem button key={"Casas de dia"} onClick={casasDeDiaPage}>
                    <ListItemText primary={"Casas de dia"} />
                </ListItem>
                <ListItem button key={"Clubes"} onClick={clubesPage}>
                    <ListItemText primary={"Clubes"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Tarjetas"} onClick={tarjetasPage}>
                    <ListItemText primary={"Tarjetas"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Voluntarios"}>
                    <ListItemText primary={"Voluntarios"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Administrador"} onClick={administradorPage}>
                    <ListItemText primary={"Adminsitrador"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Bemeficios"} onClick={beneficiosPage}>
                    <ListItemText primary={"Bemeficios"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {['menu'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer('menu', true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}