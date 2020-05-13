import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages

import App from '../../ui/App'
import Login from '../../ui/tabs/Login'
import BeneficiosTab from '../../ui/tabs/BeneficiosTab'
import AdministradorPage from '../../ui/layoutsGenerales/AdministradorPage'
import UsuariosTab from "../../ui/tabs/UsuariosTab"
import TarjetasTab from "../../ui/tabs/TarjetasTab"
import AdministradoresTab from "../../ui/tabs/AdministradoresTab"
import AsilosTab from "../../ui/tabs/AsilosTab"
import CasasDeDiaTab from "../../ui/tabs/CasasDeDiaTab"
import ClubesTab from "../../ui/tabs/ClubesTab"
import AdultosMayoresTab from "../../ui/tabs/AdultosMayoresTab"
import ServiciosTab from "../../ui/tabs/ServiciosTab"
import VoluntariosTab from "../../ui/tabs/VoluntariosTab";

FlowRouter.route('/', {
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

