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
import { Servicios } from "../../api/servicios/servicios";
import { Actividades } from '../../api/actividades/actividades';
import { CasasDeDia } from "../../api/casasDeDia/casasDeDia";
import { Asilos } from "../../api/asilos/asilos";
import { Clubes } from "../../api/clubes/clubes";
import {listaRestricciones} from "../../utilities/tablasEstaticas/restricciones";

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

function MultipleSelect({empleados, instructores, voluntarios, adultosmayores, servicios,actividades,casasDeDia,asilos,clubes}) {
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

  /*const columns = [{
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
      }];*/

    const colAdultosMayores = [{
      id: 'primera_am',
      displayName: 'Nombre Completo'
      },{
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

    const colServicios = [{
      id: 'primera_s',
      displayName: 'Tipo de Servicio'
      },{
      id: 'segunda_s',
      displayName: 'Nombre'
      }, {
      id: 'tercera_s',
      displayName: 'Telefono'
      }, {
      id: 'cuarta_s',
      displayName: 'Dirección'
      }, {
      id: 'quinta_s',
      displayName: 'Fecha de Registro'
      }, {
      id: 'sexta_s',
      displayName: 'Vigente'
      }, {
      id: 'septima_s',
      displayName: 'Red Social 1'
      }, {
      id: 'octava_s',
      displayName: 'Red Social 2'
      }, {
      id: 'novena_s',
      displayName: 'Red Social 3'
      }]

      const colActividades = [{
        id: 'primera_ac',
        displayName: 'Nombre'
        },{
        id: 'segunda_ac',
        displayName: 'Fecha Inicio'
        }, {
        id: 'tercera_ac',
        displayName: 'Fecha Fin'
        }, {
        id: 'cuarta_ac',
        displayName: 'Hora'
        }, {
        id: 'quinta_ac',
        displayName: 'Descripción'
        }, {
        id: 'sexta_ac',
        displayName: 'Dirección'
        }]

      const data1 = {empleados}
      const data2 = {instructores}
      const data3 = {voluntarios}
      const data4 = {adultosmayores}
      const data5 = {servicios}
      const data6 = {actividades}
      const data7 = {casasDeDia}
      const data8 = {asilos}
      const data9 = {clubes}

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

      function ayudaEmpleados(empleados){
          empleados.map(function(empleado){
          return(data.push(empleado))
        })
      };
      //ayudaEmpleados({empleados}.empleados)
      //ayudaEmpleados(data2.instructores)
      //ayudaEmpleados(data3.voluntarios)
      //ayudaEmpleados(data4.adultosmayores)
      //ayudaEmpleados(data5.servicios)
      //ayudaEmpleados(data6.actividades);
      //ayudaEmpleados(data7.casasDeDia)
      //ayudaEmpleados(data8.asilos)
      //ayudaEmpleados(data9.clubes)

      const datas1 = (dat,tipo,info) => dat.map((usuario)=>{
        if(tipo === 'Empleados' || tipo === 'Voluntarios' || tipo === 'Instructores'){
          return({
            primera:usuario.nombre,
            segunda:usuario.apellidos,
            tercera:usuario.email,
          })
        }else if(tipo === 'Adultos Mayores'){
          return({
            primera_am:usuario.nombre,
            segunda_am:usuario.apellidos,
            tercera_am:usuario.curp,
            cuarta_am:usuario.sexo,
            quinta_am:usuario.edad,
            sexta_am:usuario.grupoSanguineo,
            septima_am:usuario.direccion,
            octava_am:usuario.codigoPostal,
          })
        }else if(tipo === 'Servicios'){
          return({
            primera_s:usuario.tipoServicio,
            segunda_s:usuario.nombre,
            tercera_s:usuario.telefono,
            cuarta_s:usuario.direccion,
            quinta_s:usuario.fechaRegistro,
            sexta_s:usuario.vigente,
            septima_s:usuario.redSocial1,
            octava_s:usuario.redSocial2,
            novena_s:usuario.redSocial3,
          })
        }else if(tipo === 'Actividades'){
          return({
            primera_ac:usuario.nombre,
            segunda_ac:usuario.fechaInicio,
            tercera_ac:usuario.fechaFinal,
            cuarta_ac:usuario.hora,
            quinta_ac:usuario.descripcion,
            sexta_ac:usuario.direccion,
          })
        }else if(tipo === 'Casas de día' || tipo === 'Asilos' || tipo === 'Clubes'){
          return({
            primera_cd:usuario.nombre,
            segunda_cd:usuario.direccion,
            tercera_cd:(usuario.actividades.map((actividad)=>{
              return(actividad.nombre)
            }).join('; ')).replace(',',' y '),
            cuarta_cd:(usuario.restricciones.map((restriccion)=>{
              return(restriccion+' ')
            }).join('; ')).replace(',',' y '),
            quinta_cd:usuario.horarioApertura,
            sexta_cd:usuario.horarioCierre,
            septima_cd:usuario.cupoLimite,
            octava_cd:usuario.codigoPostal,
          })
        }
        
      })

      const colCasasDeDia = [{
        id: 'primera_cd',
        displayName: 'Nombre'
        },{
        id: 'segunda_cd',
        displayName: 'Dirección'
        }, {
        id: 'tercera_cd',
        displayName: 'Actividades'
        },{
          id: 'cuarta_cd',
          displayName: 'Restricciones '
        }, {
        id: 'quinta_cd',
        displayName: 'Horario Apertura'
        }, {
        id: 'sexta_cd',
        displayName: 'Horario Cierre'
        }, {
        id: 'septima_cd',
        displayName: 'Cupo Límite'
        }, {
        id: 'octava_cd',
        displayName: 'Código Postal'
        }];

      //console.log(datas1(data));
      //console.log(datas2(data));
      //console.log(datas3(data));
      //console.log(datas4(data));
      //console.log(datas1(data,'Clubes',{clubes}.clubes))
     
      console.log(datas1(data,'Empleados'))

      const csvD = (tipo) => {
        if(tipo === 'Adultos Mayores'){
          ayudaEmpleados({adultosmayores}.adultosmayores)
          return(
            <CsvDownloader
            filename="Reporte Adultos Mayores"
            columns={colAdultosMayores}
            datas={datas1(data,'Adultos Mayores')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Empleados'){
          ayudaEmpleados({empleados}.empleados)
          return(
            <CsvDownloader
            filename="Reporte Empleados"
            columns={colEmpleados}
            datas={datas1(data,'Empleados')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Voluntarios'){
          ayudaEmpleados({voluntarios}.voluntarios)
          return(
            <CsvDownloader
            filename="Reporte Voluntarios"
            columns={colEmpleados}
            datas={datas1(data,'Voluntarios')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Instructores'){
          ayudaEmpleados({instructores}.instructores)
          return(
            <CsvDownloader
            filename="Reporte Instructores"
            columns={colEmpleados}
            datas={datas1(data,'Instructores')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Asilos'){
          ayudaEmpleados({asilos}.asilos)
          return(
            <CsvDownloader
            filename="Reporte Asilos"
            columns={colCasasDeDia}
            datas={datas1(data,'Asilos')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Casas de día'){
          ayudaEmpleados({casasDeDia}.casasDeDia)
          return(
            <CsvDownloader
            filename="Reporte Casas de Día"
            columns={colCasasDeDia}
            datas={datas1(data,'Casas de día')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Clubes'){
          ayudaEmpleados({clubes}.clubes)
          return(
            <CsvDownloader
            filename="Reporte Clubes"
            columns={colCasasDeDia}
            datas={datas1(data,'Clubes')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Actividades'){
          ayudaEmpleados({actividades}.actividades)
          return(
            <CsvDownloader
            filename="Reporte Actividades"
            columns={colActividades}
            datas={datas1(data,'Actividades')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Servicios'){
          ayudaEmpleados({servicios}.servicios)
          return(
            <CsvDownloader
            filename="Reporte Servicios"
            columns={colServicios}
            datas={datas1(data,'Servicios')}
            text="Descargar Reporte" />
          )
        }
      }

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
        {console.log(personName)}
          <div style={{ marginTop: 70 }}>
            {/*<button onClick={csvDownload(personName)}>
              Descargar Reporte
            </button>
            {personName === 'Adultos Mayores' ? 
            (<CsvDownloader
            filename="Reporte Adultos Mayores"
            columns={colAdultosMayores}
            datas={datas1(data,'Adultos Mayores',{adultosmayores})}
            text="Descargar Reporte" />):''}*/}
            {csvD(personName)}
            
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
  Meteor.subscribe("servicios");
  Meteor.subscribe("actividades");
  Meteor.subscribe("casasDeDia");
  Meteor.subscribe("asilos");
  Meteor.subscribe("clubes");
  return {
      empleados: Empleados.find({}).fetch(),
      instructores: Instructores.find({}).fetch(),
      voluntarios: Voluntarios.find({}).fetch(),
      adultosmayores: AdultosMayores.find({}).fetch(),
      servicios: Servicios.find({}).fetch(),
      actividades: Actividades.find({}).fetch(),
      casasDeDia: CasasDeDia.find({}).fetch(),
      asilos: Asilos.find({}).fetch(),
      clubes: Clubes.find({}).fetch(),
  };
})(MultipleSelect);