import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Layouts and Pages

import AdministradorPage from "../../ui/layoutsGenerales/AdministradorPage"
import App from '../../ui/App'
import Login from '../../ui/tabs/Login'


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
        mount(App, {
            content: <AdministradorPage />
        })
    }
})
