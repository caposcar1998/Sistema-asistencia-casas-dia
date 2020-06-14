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
import { Actividades } from '../../api/actividades/actividades';
import { CasasDeDia } from "../../api/casasDeDia/casasDeDia";
import { Asilos } from "../../api/asilos/asilos";
import { Clubes } from "../../api/clubes/clubes";
import { Centros } from "../../api/centros/centros"
import { Convocatorias } from "../../api/convocatorias/convocatorias"
import { Colectivos } from "../../api/colectivos/colectivos"
import { Talleres } from "../../api/talleres/talleres";
import { Tutores } from "../../api/tutores/tutores";
import { Promociones } from '../../api/promociones/promociones';
import { Establecimientos } from '../../api/establecimientos/establecimientos';
import { ServiciosHospital } from '../../api/serviciosHospital/serviciosHospital';
import {listaRestricciones} from "../../utilities/tablasEstaticas/restricciones";
import { Servicios } from "../../api/servicios/servicios";
import CryptoJS from "react-native-crypto-js";

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
  'Establecimientos',
  'ServiciosHospital',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelect({empleados, instructores, voluntarios, adultosmayores, servicios,actividades,casasDeDia,asilos,clubes,centros,convocatorias,tutores,colectivos,talleres,promociones,establecimientos,serviciosHospital}) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  let data = [];

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
      //console.log({centros}.centros);
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

      const colCentros = [{
        id: 'cuarta_c',
        displayName: 'Nombre'},{
        id: 'primera_c',
        displayName: 'Calle'},{
        id: 'segunda_c',
        displayName: 'Delegacion'},{
        id: 'tercera_c',
        displayName: 'Codigo Postal'},{
        id: 'cuarta_c',
        displayName: 'Numero Telefonico',
      }];

      const colConvocatorias = [{
        id: 'primera_con',
        displayName: 'Nombre'},{
        id: 'segunda_con',
        displayName: 'Fecha de Lanzamiento'},{
        id: 'tercera_con',
        displayName: 'Fecha de Finalizacion'}
      ];

      const colColectivos = [{
        id: 'primera_col',
        displayName: 'Nombre'
      },{
        id: 'segunda_col',
        displayName: 'Descripcion'
      },{
        id: 'tercera_col',
        displayName: 'Categoria'
      },{
        id: 'cuarta_col',
        displayName: 'Tutores'
      }
      ];

      const colTalleres = [
        {id: 'primera_t',
        displayName: 'Cupo'},
        {id: 'segunda_t',
        displayName: 'Nombre'},
        {id: 'tercera_t',
        displayName: 'Instructores'},
        {id: 'cuarta_t',
        displayName: 'Colectivos'}
      ];

      const colTutores = [
        {id: 'primera_tu',
        displayName: 'Nombre'},
        {id: 'segunda_tu',
        displayName: 'Apellido'},
        {id: 'tercera_tu',
        displayName: 'Fecha de nacimiento'},
        {id: 'cuarta_tu',
        displayName: 'Telefono'},
        {id: 'quinta_tu',
        displayName: 'Direccion'},
        {id: 'sexta_tu',
        displayName: 'Curp'},
      ];

      const colPromociones = [
        {id: 'primera_p',
        displayName: 'Establecimiento'},
        {id: 'segunda_p',
        displayName: 'Telefono'},
        {id: 'tercera_p',
        displayName: 'Descripcion'},
        {id: 'cuarta_p',
        displayName: 'Direcciom'},
        {id: 'quinta_p',
        displayName: 'Restricciones'},
        {id: 'sexta_p',
        displayName: 'Fecha de inicio'},
        {id: 'septima_p',
        displayName: 'Fecha final'},
      ];

      const colEstablecimientos = [
        {id: 'primera_es',
        displayName: 'Nombre'},
        {id: 'segunda_es',
        displayName: 'Descripcion'},
        {id: 'tercera_es',
        displayName: 'Direccion'},
      ];

      const colServiciosHospital = [
        {id: 'primera_sh',
        displayName: 'Nombre'},
        {id: 'segunda_sh',
        displayName: 'Vigencia'},
        {id: 'tercera_sh',
        displayName: 'Descripcion'},
        {id: 'cuarta_sh',
        displayName: 'Laboratorio'},
      ];

      function ayudaEmpleados(empleados){
          empleados.map(function(empleado){
          return(data.push(empleado))
        })
      };

      const datas1 = (dat,tipo,info) => dat.map((usuario)=>{
        if(tipo === 'Empleados' || tipo === 'Voluntarios' || tipo === 'Instructores'){
          return({
            primera:usuario.nombre,
            segunda:usuario.apellidos,
            tercera:usuario.email,
          })
        }else if(tipo === 'Adultos Mayores'){
          // Decrypt
          let bytes  = CryptoJS.AES.decrypt(usuario.apellidos, 'secret key 123');
          let apellidos_adulto = bytes.toString(CryptoJS.enc.Utf8);
          let bytes2  = CryptoJS.AES.decrypt(usuario.curp, 'secret key 123');
          let curp_adulto = bytes2.toString(CryptoJS.enc.Utf8);
          let bytes3  = CryptoJS.AES.decrypt(usuario.direccion, 'secret key 123');
          let direccion_adulto = bytes3.toString(CryptoJS.enc.Utf8);
          return({
            primera_am:usuario.nombre,
            segunda_am:apellidos_adulto,
            tercera_am:curp_adulto,
            cuarta_am:usuario.sexo,
            quinta_am:usuario.edad,
            sexta_am:usuario.grupoSanguineo,
            septima_am:direccion_adulto.replace(/,/g,'  '),
            octava_am:usuario.codigoPostal,
          })
        } else if (tipo === 'Servicios') {
          return ({
            primera_s: usuario.tipoServicio,
            segunda_s: usuario.nombre,
            tercera_s: usuario.telefono,
            cuarta_s: usuario.direccion,
            quinta_s: usuario.fechaRegistro,
            sexta_s: usuario.vigente,
            septima_s: usuario.redSocial1,
            octava_s: usuario.redSocial2,
            novena_s: usuario.redSocial3,
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
        }else if(tipo === 'Actividades'){
          return({
            primera_ac:usuario.nombre,
            segunda_ac:usuario.fechaInicio,
            tercera_ac:usuario.fechaFinal,
            cuarta_ac:usuario.hora,
            quinta_ac:usuario.descripcion,
            sexta_ac:usuario.direccion,
          })
        }else if(tipo === 'Centros'){
          return({
            cuarta_c:usuario.nombre,
            primera_c:usuario.calle,
            segunda_c:usuario.delegacion,
            tercera_c:usuario.codigoPostal,
            cuarta_c:usuario.numeroTelefonico,
          })
        }else if(tipo === 'Convocatorias'){
          return({
            primera_con:usuario.nombre,
            segunda_con:usuario.fechaLanzamiento,
            tercera_con:usuario.fechaFinalizacion,
          })
        }else if(tipo === 'Colectivos'){
          return({
            primera_col:usuario.nombre,
            segunda_col:usuario.descripcion,
            tercera_col:usuario.categoria,
            cuarta_col:(usuario.tutores.map((tutor)=>{
              return(tutor.nombre+' '+tutor.apellido+' ')
            }).join('; ')).replace(',',' y '),
          })
        }else if(tipo === 'Talleres'){
          return({
            primera_t:usuario.cupoLimite,
            segunda_t:usuario.nombre,
            tercera_t:usuario.instructor,
            cuarta_t:(usuario.colectivos.map((col)=>{
              return(col.nombre+' ')
            }).join('; ')).replace(',',' y '),
          })
        }else if(tipo === 'Tutores'){
          return({
            primera_tu:usuario.nombre,
            segunda_tu:usuario.apellido,
            tercera_tu:usuario.fechaNacimiento,
            cuarta_tu:usuario.telefono,
            quinta_tu:usuario.direccion,
            sexta_tu:usuario.curp,
          })
        }
        else if(tipo === 'Beneficios'){
          return({
            primera_p:usuario.nombre,
            segunda_p:usuario.telefono,
            tercera_p:usuario.descripcion,
            cuarta_p:usuario.direccion,
            quinta_p:usuario.restricciones,
            sexta_p:usuario.fechaInicio,
            septima_p:usuario.fechaFinal,
          })
        }
        else if(tipo === 'Establecimientos'){
          return({
            primera_es:usuario.nombre,
            segunda_es:usuario.descripcion,
            tercera_es:usuario.direccion,
          })
        }else if(tipo === 'ServiciosHospital'){
          return({
            primera_sh:usuario.nombre,
            segunda_sh:usuario.vigencia,
            tercera_sh:usuario.descripcion,
            cuarta_sh:usuario.laboratorio,
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
        }else if(tipo === 'Centros'){
          ayudaEmpleados({centros}.centros)
          return(
            <CsvDownloader
            filename="Reporte Centros"
            columns={colCentros}
            datas={datas1(data,'Centros')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Convocatorias'){
          ayudaEmpleados({convocatorias}.convocatorias)
          return(
            <CsvDownloader
            filename="Reporte Convocatorias"
            columns={colConvocatorias}
            datas={datas1(data,'Convocatorias')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Colectivos'){
          ayudaEmpleados({colectivos}.colectivos)
          return(
            <CsvDownloader
            filename="Reporte Colectivos"
            columns={colColectivos}
            datas={datas1(data,'Colectivos')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Talleres'){
          ayudaEmpleados({talleres}.talleres)
          return(
            <CsvDownloader
            filename="Reporte Talleres"
            columns={colTalleres}
            datas={datas1(data,'Talleres')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Tutores'){
          ayudaEmpleados({tutores}.tutores)
          return(
            <CsvDownloader
            filename="Reporte Tutores"
            columns={colTutores}
            datas={datas1(data,'Tutores')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Beneficios'){
          ayudaEmpleados({promociones}.promociones)
          return(
            <CsvDownloader
            filename="Reporte Beneficios"
            columns={colPromociones}
            datas={datas1(data,'Beneficios')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'Establecimientos'){
          ayudaEmpleados({establecimientos}.establecimientos)
          return(
            <CsvDownloader
            filename="Reporte Establecimientos"
            columns={colEstablecimientos}
            datas={datas1(data,'Establecimientos')}
            text="Descargar Reporte" />
          )
        }else if(tipo === 'ServiciosHospital'){
          ayudaEmpleados({serviciosHospital}.serviciosHospital)
          return(
            <CsvDownloader
            filename="Reporte Servicios Hospitales"
            columns={colServiciosHospital}
            datas={datas1(data,'ServiciosHospital')}
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
  Meteor.subscribe("actividades");
  Meteor.subscribe("casasDeDia");
  Meteor.subscribe("asilos");
  Meteor.subscribe("clubes");
  Meteor.subscribe("centros");
  Meteor.subscribe("convocatorias");
  Meteor.subscribe("colectivos");
  Meteor.subscribe("talleres");
  Meteor.subscribe("tutores");
  Meteor.subscribe("promociones");
  Meteor.subscribe("establecimientos");
  Meteor.subscribe("serviciosHospital");
  Meteor.subscribe("servicios");
  return {
      empleados: Empleados.find({}).fetch(),
      instructores: Instructores.find({}).fetch(),
      voluntarios: Voluntarios.find({}).fetch(),
      adultosmayores: AdultosMayores.find({}).fetch(),
      actividades: Actividades.find({}).fetch(),
      casasDeDia: CasasDeDia.find({}).fetch(),
      asilos: Asilos.find({}).fetch(),
      clubes: Clubes.find({}).fetch(),
      servicios: Servicios.find({}).fetch(),
      centros: Centros.find({}).fetch(),
      convocatorias: Convocatorias.find({}).fetch(),
      colectivos: Colectivos.find({}).fetch(),
      talleres : Talleres.find({}).fetch(),
      tutores: Tutores.find({}).fetch(),
      promociones: Promociones.find({}).fetch(),
      establecimientos: Establecimientos.find({}).fetch(),
      serviciosHospital: ServiciosHospital.find({}).fetch(),
  };
})(MultipleSelect);