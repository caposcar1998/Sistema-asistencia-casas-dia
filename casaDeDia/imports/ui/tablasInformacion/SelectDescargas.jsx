import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import CsvDownloader from 'react-csv-downloader';
import { Empleados } from "../../api/empleados/empleados";
import { Instructores } from "../../api/instructores/instructores";
import { Voluntarios } from "../../api/voluntarios/voluntarios";
import { AdultosMayores } from "../../api/adultosMayores/adultosMayores";
import { withTracker } from 'meteor/react-meteor-data';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Adultos Mayores',
  'Asilos',
  'Casas de día',
  'Clubes',
  'Servicios',
  'Actividades',
  'Tarjetas',
  'Empleados',
  'Voluntarios',
  'Instructores',
  'Tutores',
  'Beneficios',
  'Talleres',
  'Colectivos',
  'Convocatorias',
  'Centros',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelect({empleados, instructores, voluntarios, adultosmayores}) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  let dataEmpleados = [];
  let dataInstructores = [];
  let dataAdultosMayores = [];
  let data = [];

  const columns = [{
    id: 'first',
    displayName: 'First column'
    }, {
    id: 'second',
    displayName: 'Second column'
    }];
    const datas = [{
      first: 'foo',
      second: 'bar'
      }, {
      first: 'foobar',
      second: 'foobar'
      }];

    const colAdultosMayores = [{
      id: 'primera_am',
      displayName: 'Nombre Completo'
      }, {
      id: 'segunda_am',
      displayName: 'Apellidos'
      }, {
      id: 'tercera_am',
      displayName: 'CURP'
      }, {
      id: 'cuarta_am',
      displayName: 'Sexo'
      }, {
      id: 'quinta_am',
      displayName: 'Edad'
      }, {
      id: 'sexta_am',
      displayName: 'Grupo Sanguineo'
      }, {
      id: 'septima_am',
      displayName: 'Direccion'
      }, {
      id: 'octava_am',
      displayName: 'Codigo Postal'
      }];

      const data1 = {empleados}
      const data2 = {instructores}
      const data3 = {voluntarios}
      const data4 = {adultosmayores}
      
      const colEmpleados = [{
      id: 'primera',
      displayName: 'Nombre Completo'
      }, {
      id: 'segunda',
      displayName: 'Apellidos'
      }, {
      id: 'tercera',
      displayName: 'Email'
      }]

      const ayudaEmpleados = (empleados) => {
        empleados.map(function(empleado){
          data.push(empleado)
        })
      };
      //ayudaEmpleados(data1.empleados)
      //ayudaEmpleados(data2.instructores)
      //ayudaEmpleados(data3.voluntarios)
      ayudaEmpleados(data4.adultosmayores)

      const datas1 = (dat) => dat.map((usuario)=>{
        return({
          primera:usuario.nombre,
          segunda:usuario.apellidos,
          tercera:usuario.email,
        }
        )
      })
      const datas2 = (dat) => dat.map((usuario)=>{
        return({
          primera_am:usuario.nombre,
          segunda_am:usuario.apellidos,
          segunda_am:usuario.curp,
          cuarta_am:usuario.sexo,
          quinta_am:usuario.edad,
          sexta_am:usuario.grupoSanguineo,
          septima_am:usuario.direccion,
          octava_am:usuario.codigoPostal,
        }
        )
      })

      //console.log(datas1(data));
      console.log(datas2(data));

    

  return (
    <div style={{ marginLeft: 70 }}>
      <Grid container item xs={12} spacing={3}> 
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Información del Reporte</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={personName}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Seleccione...</em>
            </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
          <div style={{ marginTop: 70 }}>
            <CsvDownloader
            filename="myfile"
            columns={colAdultosMayores}
            datas={datas2(data)}
            text="Descargar Reporte" />
          
          </div> 
          
      </FormControl>
      </Grid>
      
      
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe("empleados");
  Meteor.subscribe("instructores");
  Meteor.subscribe("voluntarios");
  Meteor.subscribe("adultosMayores");
  return {
      empleados: Empleados.find({}).fetch(),
      instructores: Instructores.find({}).fetch(),
      voluntarios: Voluntarios.find({}).fetch(),
      adultosmayores: AdultosMayores.find({}).fetch(),
  };
})(MultipleSelect);