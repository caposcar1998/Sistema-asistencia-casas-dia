import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TablaPacientes from '../tablasInformacion/TablaPacientes';
import TablaPromociones from '../tablasInformacion/TablaPromociones';
import TablaTarjeta from '../tablasInformacion/TablaTarjeta';
import TablaAsilo from '../tablasInformacion/TablaAsilo';
import TablaCasaDeDia from '../tablasInformacion/TablaCasaDeDia';
import TablaAdministrador from '../tablasInformacion/TablaAdministrador'

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "#006400"
    }
}));

export default function AdministradorTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Registrar paciente" {...a11yProps(0)} />
                    <Tab label="Registrar beneficio" {...a11yProps(1)} />
                    <Tab label="Registrar Tarjeta" {...a11yProps(2)} />
                    <Tab label="Registrar Asilo" {...a11yProps(3)} />
                    <Tab label="Registrar casa de dia" {...a11yProps(4)} />
                    <Tab label="Registrar administrador" {...a11yProps(5)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TablaPacientes/>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <TablaPromociones />
      </TabPanel>
            <TabPanel value={value} index={2}>
                <TablaTarjeta/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TablaAsilo/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TablaCasaDeDia />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <TablaAdministrador />
            </TabPanel>
        </div>
    );
}