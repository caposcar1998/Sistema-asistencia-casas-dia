import React, {useState  }  from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DeckIcon from "@material-ui/icons/Deck";
import HouseIcon from "@material-ui/icons/House";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import StyleIcon from "@material-ui/icons/Style";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PeopleIcon from "@material-ui/icons/People";
import GradeIcon from "@material-ui/icons/Grade";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import RowingIcon from "@material-ui/icons/Rowing";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExploreIcon from "@material-ui/icons/Explore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Meteor } from 'meteor/meteor';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Tracker } from 'meteor/tracker'
import GetAppIcon from '@material-ui/icons/GetApp';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

Tracker.autorun(()=>{

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    menu: {
        height: "100vh",
        maxHeight: "auto"
    },
    menuBar: {
        backgroundColor: "#006400"
    },
    menuText: {
        color: "white",
        fontSize: "x-large",
        position: "absolute",
        top: "50%",
        transform: "rotate(-90deg)",
        textAlign: "center"
    }
});


export default function ContenidoMenuGeneral({handleCambioPagina}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const usuario = Meteor.user() && Meteor.user().profile.visualizarAdultoMayor;


     const [abrirLocalizaciones, setAbrirLocalizaciones] = React.useState(true);

     const [abrirRecusosHumanos, setAbrirRecusosHumanos] = React.useState(true);

     const [abrirColectivos, setAbrirColectivos] = React.useState(true);

    
    const desplazamientoLocalizaciones = () => {
        setAbrirLocalizaciones(!abrirLocalizaciones);
    };

    const desplazamientoRecusosHumanos = () => {
        setAbrirRecusosHumanos(!abrirRecusosHumanos);
    };

    const desplazamientoColectivos = () => {
        setAbrirColectivos(!abrirColectivos);
    };

    const usuarioLogeado = Meteor.userId();

    const [pagina, setPagina] = useState("administrador");

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    
    const cambioRuta = ruta => {
        handleCambioPagina(ruta)
     }

    function cerrarSesion(){
        Meteor.logout();
        cambioRuta("login");
    }


    const list = (anchor) =>(
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            //onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            onMouseLeave={toggleDrawer(anchor, false)}
        >
            <List
                component="nav"
                //aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div">
                        Bienvenido
          </ListSubheader>
                }
            >
                {((Meteor.user() && Meteor.user().profile.generarReportes) === true) ? (<ListItem button key={"Reportes"} onClick={() =>cambioRuta("descargas")}>
                    <ListItemIcon>
                        <GetAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Reportes"} />
                </ListItem>):''}
                
                
                {/*<ListItem button key={"Usuarios"} onClick={() =>cambioRuta("administrador")}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Usuarios"} />
            </ListItem>*/}
                {((Meteor.user() && Meteor.user().profile.visualizarAdultoMayor) === true) ? (<ListItem button key={"Adultos Mayores"} onClick={() => cambioRuta("adultosMayores")}>
                    <ListItemIcon>
                        <DirectionsWalkIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Adultos Mayores"} />
            </ListItem>):''}
                
            </List>
            <Divider />
            <List>
                <ListItem button onClick={desplazamientoLocalizaciones}>
                    <ListItemText primary={"Localizaciones"} />
                    {abrirLocalizaciones ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Collapse in={abrirLocalizaciones} timeout="auto" unmountOnExit>
            <List>
            {((Meteor.user() && Meteor.user().profile.visualizarAsilo) === true) ? (
            <ListItem button key={"Asilos"} onClick={() => cambioRuta('asilos')}>
                    <ListItemIcon>
                        <DeckIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Asilos"} />
                </ListItem>):''}
                {((Meteor.user() && Meteor.user().profile.visualizarCasasDeDia) === true) ?(<ListItem button key={"Casas de dia"} onClick={() => cambioRuta('casasDeDia')}>
                    <ListItemIcon>
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Casas de dia"} />
                </ListItem>):''}
                {((Meteor.user() && Meteor.user().profile.visualizarClubes) === true) ? (<ListItem button key={"Clubes"} onClick={() => cambioRuta('clubes')}>
                    <ListItemIcon>
                        <GolfCourseIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Clubes"} />
                </ListItem>):''}
                {((Meteor.user() && Meteor.user().profile.visualizarServicios) === true) ? (<ListItem button key={"Servicios"} onClick={() => cambioRuta('servicios')}>
                    <ListItemIcon>
                        <RoomServiceIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Servicios"} />
                </ListItem>):''}
            </List>
            </Collapse>
                {((Meteor.user() && Meteor.user().profile.visualizarActividades) === true) ? (<ListItem button key={"Actividades"} onClick={() => cambioRuta('actividades')}>
                    <ListItemIcon>
                        <LocalActivityIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Actividades"} />
                </ListItem>):''}
                {(((Meteor.user() && Meteor.user().profile.visualizarRestricciones) !== true)) ? '': (<Divider />)}
                {((Meteor.user() && Meteor.user().profile.visualizarRestricciones) === true) ? (<ListItem button key={"Restricciones"} onClick={() => cambioRuta('restricciones')}>
                    <ListItemIcon>
                        <AssignmentLateIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Restricciones"} />
                </ListItem>):''}
            
            {(((Meteor.user() && Meteor.user().profile.visualizarTarjetas) !== true)) ? '': (<Divider />)}
            <List>
            {((Meteor.user() && Meteor.user().profile.visualizarTarjetas) === true) ? (<ListItem button key={"Tarjetas"} onClick={() => cambioRuta('tarjetas')}>
                    <ListItemIcon>
                        <StyleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Tarjetas"} />
                </ListItem>):''}
            </List>
            <Collapse in={abrirLocalizaciones} timeout="auto" unmountOnExit>
            {(((Meteor.user() && Meteor.user().profile.visualizarAsilo) !== true) && 
            ((Meteor.user() && Meteor.user().profile.visualizarCasasDeDia) !== true) && 
            ((Meteor.user() && Meteor.user().profile.visualizarClues) !== true) &&
            ((Meteor.user() && Meteor.user().profile.visualizarServicios) !== true) &&
            ((Meteor.user() && Meteor.user().profile.visualizarRestricciones) !== true) &&
            ((Meteor.user() && Meteor.user().profile.visualizarActividades) !== true)) ? '': (<Divider />)}
            </Collapse>
            
            <List>
                <ListItem button onClick={desplazamientoRecusosHumanos}>
                    <ListItemText primary={"Recursos Humanos"} />
                    {abrirRecusosHumanos ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Collapse in={abrirRecusosHumanos} timeout="auto" unmountOnExit>
            <List>
                {/*<ListItem button key={"Administrador"} onClick={() => cambioRuta('administrador')}>
                    <ListItemIcon>
                        <GradeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Adminsitrador"} />
                </ListItem>*/}
                {((Meteor.user() && Meteor.user().profile.visualizarEmpleados) === true) ? (<ListItem button key={"Empleados"} onClick={() => cambioRuta('empleados')}>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Empleados"} />
                </ListItem>):''}
                {((Meteor.user() && Meteor.user().profile.visualizarVoluntario) === true) ? (<ListItem button key={"Voluntarios"} onClick={() => cambioRuta('voluntarios')}>
                    <ListItemIcon>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Voluntarios"} />
                </ListItem>):''}
                
                {((Meteor.user() && Meteor.user().profile.visualizarInstructor) === true) ? (<ListItem button key={"Instructores"} onClick={() => cambioRuta('instructores')}>
                    <ListItemIcon>
                        <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Instructores"} />
                </ListItem>):''}
            </List>
            </Collapse>
            <Collapse in={abrirRecusosHumanos} timeout="auto" unmountOnExit>
            {(((Meteor.user() && Meteor.user().profile.visualizarVoluntario) !== true) && 
            ((Meteor.user() && Meteor.user().profile.visualizarVoluntario) !== true) && 
            ((Meteor.user() && Meteor.user().profile.visualizarInstructor) !== true)) ? '': (<Divider />)} 
            </Collapse>

            
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true) ? (<ListItem button key={"Beneficios"} onClick={() => cambioRuta('beneficios')}>
                    <ListItemIcon>
                        <EventSeatIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Beneficios"} />
                </ListItem>):''}
            </List>    
            {(((Meteor.user() && Meteor.user().profile.visualizarBeneficios) !== true)) ? '': (<Divider />)}
            <List>
                <ListItem button onClick={desplazamientoColectivos}>
                    <ListItemText primary={"Colectivos"} />
                    {abrirColectivos ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </List>
            <Collapse in={abrirColectivos} timeout="auto" unmountOnExit>
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarTutores) === true) ? (<ListItem button key={"Tutores"} onClick={() => cambioRuta('tutores')}>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Tutores Colectivo"} />
                </ListItem>):''}
            </List>
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarTalleres) === true) ? (<ListItem button key={"Talleres"} onClick={() => cambioRuta('talleres')}>
                    <ListItemIcon>
                        <RowingIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Talleres"} />
                </ListItem>):''}
            </List>
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarColectivos) === true) ? (<ListItem button key={"Colectivos"} onClick={() => cambioRuta('colectivos')}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Colectivos"} />
                </ListItem>):''}
            </List>
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarConvocatorias) === true) ? (<ListItem button key={"Convocatorias"} onClick={() => cambioRuta('convocatorias')}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Convocatorias"} />
                </ListItem>):''}
            </List>
            <List>
                {((Meteor.user() && Meteor.user().profile.visualizarCentros) === true) ? (<ListItem button key={"Centros"} onClick={() => cambioRuta('centros')}>
                    <ListItemIcon>
                        <ExploreIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Centros"} />
                </ListItem>):''}
            </List>
            </Collapse>
            <Divider />
            <List>
                <ListItem button key={"Cerrar Sesión"} onClick={() => cerrarSesion()}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Cerrar Sesión"} />
                </ListItem>
            </List>
        </div>
    );
    

    

    
    if(usuarioLogeado !== null){
        return (
            <div className={classes.menuBar}>
                <span className={classes.menuText}>MENU</span>
                {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onMouseEnter={toggleDrawer("left", true)} className={classes.menu} ></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }else{

        return(cambioRuta('login'));

    }
}

});
