import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages

import App from '../../ui/App';

import VoluntarioPage from '../../ui/layoutsGenerales/VoluntarioPage';
import InstructorPage from '../../ui/layoutsGenerales/InstructorPage';
import AdministradorPage from '../../ui/layoutsGenerales/AdministradorPage';
import EmpleadoPage from '../../ui/layoutsGenerales/EmpleadoPage';

import Login from '../../ui/tabs/Login'
import BeneficiosTab from '../../ui/tabs/BeneficiosTab'
import UsuariosTab from "../../ui/tabs/UsuariosTab"
import TarjetasTab from "../../ui/tabs/TarjetasTab"
import AdministradoresTab from "../../ui/tabs/AdministradoresTab"
import AsilosTab from "../../ui/tabs/AsilosTab"
import CasasDeDiaTab from "../../ui/tabs/CasasDeDiaTab"
import ClubesTab from "../../ui/tabs/ClubesTab"
import AdultosMayoresTab from "../../ui/tabs/AdultosMayoresTab"
import ServiciosTab from "../../ui/tabs/ServiciosTab"
import VoluntariosTab from "../../ui/tabs/VoluntariosTab";
import InstructoresTab from "../../ui/tabs/InstructoresTab";
import EmpleadosTab from "../../ui/tabs/EmpleadosTab";



FlowRouter.route('/', {
    name: 'login',
    action() {
        mount(App, {
            content: <Login />
        })
    }
})

FlowRouter.route('/voluntario', {
    name: 'voluntario',
    action() {
        mount(VoluntarioPage, {
            content: <AsilosTab />
        })
    }
})

FlowRouter.route('/instructor', {
    name: 'instructor',
    action() {
        mount(InstructorPage, {
            content: <AsilosTab />
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
        mount(AdministradorPage, {
            content: <BeneficiosTab />
        })
    }
})


FlowRouter.route('/administrador/tarjetas', {
    name: 'tarjetas',
    action() {
        mount(AdministradorPage, {
            content: <TarjetasTab />
        })
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
        mount(AdministradorPage, {
            content: <AsilosTab />
        })
    }
})

FlowRouter.route('/administrador/casasDeDia', {
    name: 'casasDeDia',
    action() {
        mount(AdministradorPage, {
            content: <CasasDeDiaTab />
        })
    }
})

FlowRouter.route('/administrador/clubes', {
    name: 'clubes',
    action() {
        mount(AdministradorPage, {
            content: <ClubesTab />
        })
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

FlowRouter.route('/administrador/Servicios', {
    name: 'servicios',
    action() {
        mount(AdministradorPage, {
            content: <ServiciosTab />
        })
    }
})

FlowRouter.route('/administrador/Voluntarios', {
    name: 'voluntarios',
    action() {
        mount(AdministradorPage, {
            content: <VoluntariosTab />
        })
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

FlowRouter.route('/empleado', {
    name: 'empleado',
    action() {
        mount(EmpleadoPage, {
            content: <UsuariosTab />
        })
    }
})

FlowRouter.route('/empleado/beneficios', {
    name: 'beneficiosE',
    action() {
        mount(EmpleadoPage, {
            content: <BeneficiosTab />
        })
    }
})


FlowRouter.route('/empleado/tarjetas', {
    name: 'tarjetasE',
    action() {
        mount(EmpleadoPage, {
            content: <TarjetasTab />
        })
    }
})

FlowRouter.route('/empleado/administradores', {
    name: 'administradoresE',
    action() {
        mount(EmpleadoPage, {
            content: <AdministradoresTab />
        })
    }
})

FlowRouter.route('/empleado/asilos', {
    name: 'asilosE',
    action() {
        mount(EmpleadoPage, {
            content: <AsilosTab />
        })
    }
})

FlowRouter.route('/empleado/casasDeDia', {
    name: 'casasDeDiaE',
    action() {
        mount(EmpleadoPage, {
            content: <CasasDeDiaTab />
        })
    }
})

FlowRouter.route('/empleado/clubes', {
    name: 'clubesE',
    action() {
        mount(EmpleadoPage, {
            content: <ClubesTab />
        })
    }
})

FlowRouter.route('/empleado/AdultosMayores', {
    name: 'adultosMayoresE',
    action() {
        mount(EmpleadoPage, {
            content: <AdultosMayoresTab />
        })
    }
})

FlowRouter.route('/empleado/Servicios', {
    name: 'serviciosE',
    action() {
        mount(EmpleadoPage, {
            content: <ServiciosTab />
        })
    }
})

FlowRouter.route('/empleado/Voluntarios', {
    name: 'voluntariosE',
    action() {
        mount(EmpleadoPage, {
            content: <VoluntariosTab />
        })
    }
})

FlowRouter.route('/empleado/Instructores', {
    name: 'instructoresE',
    action() {
        mount(EmpleadoPage, {
            content: <InstructoresTab />
        })
    }
})

FlowRouter.route('/empleado/Empleados', {
    name: 'empleadosE',
    action() {
        mount(EmpleadoPage, {
            content: <EmpleadosTab />
        })
    }
})



