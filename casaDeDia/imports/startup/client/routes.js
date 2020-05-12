import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages

import App from '../../ui/App'
import Login from '../../ui/tabs/Login'
import BeneficiosTab from '../../ui/tabs/BeneficiosTab'
import AdministradorPage from '../../ui/layoutsGenerales/AdministradorPage'


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
            content: <BeneficiosTab />
        })
    }
})
