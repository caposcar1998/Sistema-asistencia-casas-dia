import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';

import MultipleSelect from '../tablasInformacion/SelectDescargas';



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
        height: '100vh',
        width: '100vh'
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "#006400"
    }
}));

export default function Descargas() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    //const [age, setAge] = React.useState('');

    const handleChange = (event, newValue) => {
        //setAge(event.target.value as string);
        setValue(newValue);
    };

    

    /*const seleccionaReporte = () =>(
        <div>
            <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Tipo de Usuario
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Label + placeholder</FormHelperText>
                </FormControl>

        </div>
    );*/

    return (
    
        <div className={classes.root}>
            <Grid>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Descargar Reportes" {...a11yProps(0)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <Grid container item lg={6} >
                <MultipleSelect/>
            </Grid>
            </TabPanel>
            </Grid>
        </div> 
        
    );
}