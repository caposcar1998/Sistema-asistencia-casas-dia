import React from 'react';
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

export default function AdministradorPage() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

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
                <ListItem>
                    <ListItemText primary={"Usuarios"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Asilos"}>
                    <ListItemText primary={"Asilos"}  />
                </ListItem>
                <ListItem button key={"Casas de dia"}>
                    <ListItemText primary={"Casas de dia"} />
                </ListItem>
                <ListItem button key={"Asilos"}>
                    <ListItemText primary={"Asilos"} />
                </ListItem>
                <ListItem button key={"Clubes"}>
                    <ListItemText primary={"Clubes"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Tarjetas"}>
                    <ListItemText primary={"Tarjetas"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key={"Voluntarios"}>
                    <ListItemText primary={"Voluntarios"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer('left', true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}