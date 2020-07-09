import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "#1D813B"
    },
    foto: {
        width: "200px"
    }
}));

export default function TabInferior() {
    const classes = useStyles();

    return (

        <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Grid container>
                <Grid item xs={3}>
                    <img src={"/fotos/gobiernoMexico.jpeg"} className={classes.foto} />
                </Grid>
                <Grid item xs={3}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h2">Enlaces</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">http://www.gob.com.mx</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">http://www.tlalpan.cdmx.gob.mx/</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={3}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h2">Contactanos</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">56552749</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">tlalpan@tlalpan.mx</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={3}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Redes sociales
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <FacebookIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TwitterIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={4}>
                                    <InstagramIcon fontSize="large" />
                                </Grid>
                            </Grid>
                            
                        </Grid>
                       
                        
                    </Grid>
                </Grid>

            </Grid>
            
            </AppBar>

    );
}