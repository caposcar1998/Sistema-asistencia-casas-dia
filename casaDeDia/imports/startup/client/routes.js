import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages

import App from '../../ui/App';

import AdministradorPage from '../../ui/layoutsGenerales/AdministradorPage';

import Login from '../../ui/tabs/Login';
import BeneficiosTab from '../../ui/tabs/BeneficiosTab';
import UsuariosTab from "../../ui/tabs/UsuariosTab";
import TarjetasTab from "../../ui/tabs/TarjetasTab";
import AdministradoresTab from "../../ui/tabs/AdministradoresTab";
import AsilosTab from "../../ui/tabs/AsilosTab";
import CasasDeDiaTab from "../../ui/tabs/CasasDeDiaTab";
import ClubesTab from "../../ui/tabs/ClubesTab";
import ServiciosTab from "../../ui/tabs/ServiciosTab";	
import AdultosMayoresTab from "../../ui/tabs/AdultosMayoresTab";
import VoluntariosTab from "../../ui/tabs/VoluntariosTab";
import InstructoresTab from "../../ui/tabs/InstructoresTab";
import EmpleadosTab from "../../ui/tabs/EmpleadosTab";
import ActividadesTab from "../../ui/tabs/ActividadesTab";
import ServiciosHospitalTab from "../../ui/tabs/ServiciosHospitalTab"
import EstablecimientosTab from "../../ui/tabs/EstablecimientosTab"
import RestriccionesTab from "../../ui/tabs/RestriccionesTab"


import TutorTab from "../../ui/tabs/TutoresTab";
import TalleresTab from "../../ui/tabs/TalleresTab";
import ColectivosTab from "../../ui/tabs/ColectivosTab";
import ConvocatoriasTab from "../../ui/tabs/ConvocatoriasTab";

import CentrosTab from "../../ui/tabs/CentrosTab";

import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import Descargas from '../../ui/tabs/Descargas';
import UsuariosPage from '../../ui/InterfazUsuario/UsuariosPage';
import Index from '../../ui/InterfazUsuario/Index';
import CasasDeDiaLista from '../../ui/InterfazUsuario/Lugares/CasasDeDiaLista';
import CasasDeDiaUsuario from '../../ui/InterfazUsuario/Lugares/CasaDeDiaUsuario';





FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(App, {
            content: <Login />
        })
    }
})


FlowRouter.route('/administrador', {
    name: 'administrador',
    action() {
        mount(AdministradorPage, {
            content: <UsuariosTab />
        })
    }
})

FlowRouter.route('/administrador/beneficios', {
    name: 'beneficios',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true){
            mount(AdministradorPage, {
                content: <BeneficiosTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
    }
})


FlowRouter.route('/administrador/tarjetas', {
    name: 'tarjetas',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true){
            mount(AdministradorPage, {
                content: <TarjetasTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
    }
})

FlowRouter.route('/administrador/administradores', {
    name: 'administradores',
    action() {
        mount(AdministradorPage, {
            content: <AdministradoresTab />
        })
    }
})

FlowRouter.route('/administrador/asilos', {
    name: 'asilos',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true){
            mount(AdministradorPage, {
                content: <AsilosTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
        
    }
})

FlowRouter.route('/administrador/casasDeDia', {
    name: 'casasDeDia',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true){
            mount(AdministradorPage, {
                content: <CasasDeDiaTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
        
    }
})

FlowRouter.route('/administrador/clubes', {
    name: 'clubes',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarBeneficios) === true){
            mount(AdministradorPage, {
                content: <ClubesTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
    }
})


FlowRouter.route('/administrador/AdultosMayores', {
    name: 'adultosMayores',
    action() {
        mount(AdministradorPage, {
            content: <AdultosMayoresTab />
        })
    }
})

FlowRouter.route('/administrador/actividades', {
    name: 'actividades',
    action() {
        mount(AdministradorPage, {
            content: <ActividadesTab />

        })
    }
})

FlowRouter.route('/administrador/serviciosHospital', {
    name: 'serviciosHospital',
    action() {
        mount(AdministradorPage, {
            content: <ServiciosHospitalTab />

        })
    }
})

FlowRouter.route('/administrador/establecimientos', {
    name: 'establecimientos',
    action() {
        mount(AdministradorPage, {
            content: <EstablecimientosTab />
        })
        }
})

FlowRouter.route('/administrador/restricciones', {
    name: 'restricciones',
    action() {
        mount(AdministradorPage, {
            content: <RestriccionesTab />


        })
    }
})


FlowRouter.route('/administrador/Voluntarios', {
    name: 'voluntarios',
    action() {
        if((Meteor.user() && Meteor.user().profile.visualizarVoluntario) === true){
            mount(AdministradorPage, {
                content: <VoluntariosTab />
            })
        }else{
            FlowRouter.go('administrador');
        }
        
    }
})

FlowRouter.route('/administrador/Instructores', {
    name: 'instructores',
    action() {
        mount(AdministradorPage, {
            content: <InstructoresTab />
        })
    }
})

FlowRouter.route('/administrador/Empleados', {
    name: 'empleados',
    action() {
        mount(AdministradorPage, {
            content: <EmpleadosTab />
        })
    }
})


FlowRouter.route('/administrador/tutores', {
    name: 'tutores',
    action() {
        mount(AdministradorPage, {
            content: <TutorTab />
        })
    }
})

FlowRouter.route('/administrador/talleres', {
    name: 'talleres',
    action() {
        mount(AdministradorPage, {
            content: <TalleresTab />
        })
    }
})

FlowRouter.route('/administrador/colectivos', {
    name: 'colectivos',
    action() {
        mount(AdministradorPage, {
            content: <ColectivosTab />
        })
    }
})
FlowRouter.route('/administrador/convocatorias', {
    name: 'convocatorias',
    action() {
          mount(AdministradorPage, {
               content: <ConvocatoriasTab />
         })
    }
})

FlowRouter.route('/administrador/centros', {
    name: 'centros',
    action() {
        mount(AdministradorPage, {
            content: <CentrosTab />
        })
    }
})

FlowRouter.route('/administrador/descargas', {
    name: 'descargas',
    action() {
        mount(AdministradorPage, {
            content: <Descargas />
        })
    }
})

FlowRouter.route('/administrador/Servicios', {
    name: 'servicios',
    action() {
        mount(AdministradorPage, {
            content: <ServiciosTab />
        })
    }
})


FlowRouter.route('/', {
    name: 'index',
    action() {
        mount(UsuariosPage, {
            content: <Index />
        })
    }
})

FlowRouter.route('/listaCasaDeDia', {
    name: 'listaCasaDeDia',
    action() {
        mount(UsuariosPage, {
            content: <CasasDeDiaLista />
        })
    }
})

FlowRouter.route('/CasaDeDia/:_id', {
    name: 'CasaDeDia',
    action(params) {
        let {_id } = params
        mount(UsuariosPage, {
            content: <CasasDeDiaUsuario casaSeleccionada={_id} />
        })
    }
})