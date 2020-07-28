import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
    },
    links: {
        color: "white"
    }
}));

export default function TabInferior() {
    const classes = useStyles();

    

    return (

        <AppBar position="sticky" color="primary" className={classes.appBar}>
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
                            <Button href="http://www.gob.com.mx">
                                <Typography variant="h5" className={classes.links}>gob.com.mx</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button href="http://www.tlalpan.cdmx.gob.mx/">
                                <Typography variant="h5" className={classes.links}>tlalpan.cdmx.gob.mx</Typography>
                            </Button>
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
                            <Typography variant="h5">(55) 5483-1500 </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">Emergencias: 911</Typography>
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
                                <Grid item xs={3}>
                                    <Button href="https://www.facebook.com/TlalpanAl/">
                                        <FacebookIcon fontSize="large" className={classes.links} />
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button href="https://twitter.com/TlalpanAl">
                                        <TwitterIcon fontSize="large" className={classes.links}/>
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button href="https://www.instagram.com/tlalpanal/">
                                        <InstagramIcon fontSize="large" className={classes.links}/>
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button href="https://www.youtube.com/channel/UCZd70pbf0O1JYnq3aty_M_A/videos">
                                        <YouTubeIcon fontSize="large" className={classes.links}/>
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                       
                        
                    </Grid>
                </Grid>

            </Grid>
            
            </AppBar>

    );
}