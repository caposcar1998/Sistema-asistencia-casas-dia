import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DeckIcon from '@material-ui/icons/Deck';
import HouseIcon from '@material-ui/icons/House';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import StyleIcon from '@material-ui/icons/Style';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PeopleIcon from '@material-ui/icons/People';
import GradeIcon from '@material-ui/icons/Grade';
import WorkIcon from '@material-ui/icons/Work';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EventSeatIcon from '@material-ui/icons/EventSeat'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import RowingIcon from '@material-ui/icons/Rowing';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExploreIcon from '@material-ui/icons/Explore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Accounts } from "meteor/accounts-base";
import { Empleados } from "../../api/empleados/empleados";
import { Instructores } from "../../api/instructores/instructores";
import { Voluntarios } from "../../api/voluntarios/voluntarios";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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

  function adultosMayoresPage() {
    FlowRouter.go("adultosMayores");
  }

  function serviciosPage() {
    FlowRouter.go("servicios");
  }

  function voluntariosPage() {
    FlowRouter.go("voluntarios");
  }

  function instructoresPage() {
    FlowRouter.go("instructores");
  }

  function empleadosPage() {
    FlowRouter.go("empleados");
  }
  function actividadesPage() {
    FlowRouter.go("actividades");
  }
  function tutoresPage() {
    FlowRouter.go("tutores");
  }

  function talleresPage() {
    FlowRouter.go("talleres");
  }

  function colectivosPage() {
    FlowRouter.go("colectivos");
  }

  function convocatoriasPage() {
    FlowRouter.go("convocatorias");
  }

  function centrosPage() {
    FlowRouter.go("centros");
  }

  function cerrarSesion(){
    Meteor.logout();
    FlowRouter.go("login");
  }

  const list = (anchor) => (
    
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
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
        <ListItem button key={"Usuarios"} onClick={usuariosPage}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Usuarios"} />
        </ListItem>
        <ListItem button key={"Adultos Mayores"} onClick={adultosMayoresPage}>
          <ListItemIcon>
            <DirectionsWalkIcon />
          </ListItemIcon>
          <ListItemText primary={"Adultos Mayores"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Asilos"} onClick={asilosPage}>
          <ListItemIcon>
            <DeckIcon />
          </ListItemIcon>
          <ListItemText primary={"Asilos"} />
        </ListItem>
        <ListItem button key={"Casas de dia"} onClick={casasDeDiaPage}>
          <ListItemIcon>
            <HouseIcon />
          </ListItemIcon>
          <ListItemText primary={"Casas de dia"} />
        </ListItem>
        <ListItem button key={"Clubes"} onClick={clubesPage}>
          <ListItemIcon>
            <GolfCourseIcon />
          </ListItemIcon>
          <ListItemText primary={"Clubes"} />
        </ListItem>

        <ListItem button key={"Servicios"} onClick={serviciosPage}>
          <ListItemIcon>
            <RoomServiceIcon />
          </ListItemIcon>
          <ListItemText primary={"Servicios"} />
        </ListItem>
        <ListItem button key={"Actividades"} onClick={actividadesPage}>
          <ListItemIcon>
            <LocalActivityIcon />
          </ListItemIcon>
          <ListItemText primary={"Actividades"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Tarjetas"} onClick={tarjetasPage}>
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText primary={"Tarjetas"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Administrador"} onClick={administradorPage}>
          <ListItemIcon>
            <GradeIcon />
          </ListItemIcon>
          <ListItemText primary={"Adminsitrador"} />
        </ListItem>
        <ListItem button key={"Empleados"} onClick={empleadosPage}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Empleados"} />
        </ListItem>
        <ListItem button key={"Voluntarios"} onClick={voluntariosPage}>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Voluntarios"} />
        </ListItem>
        <ListItem button key={"Instructores"} onClick={instructoresPage}>
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary={"Instructores"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Beneficios"} onClick={beneficiosPage}>
          <ListItemIcon>
            <EventSeatIcon />
          </ListItemIcon>
          <ListItemText primary={"Beneficios"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Tutores"} onClick={tutoresPage}>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary={"Tutores Colectivo"} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Talleres"} onClick={talleresPage}>
          <ListItemIcon>
            <RowingIcon />
          </ListItemIcon>
          <ListItemText primary={"Talleres"} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Colectivos"} onClick={colectivosPage}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={"Colectivos"} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Convocatorias"} onClick={convocatoriasPage}>
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary={"Convocatorias"} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Centros"} onClick={centrosPage}>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary={"Centros"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Cerrar Sesion"} onClick={cerrarSesion}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Cerrar Sesion"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onMouseEnter={toggleDrawer("menu", true)}>{anchor}</Button>
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
}
