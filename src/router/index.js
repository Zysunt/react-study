import { Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Rich from '../pages/rich'
import City from '../pages/city'
import Order from '../pages/order'
import User from '../pages/user'
import BikeMap from '../pages/bikemap'

import UI from '../pages/ui'
import Button from '../pages/ui/pages/button'
import Modals from '../pages/ui/pages/modals'
import Messages from '../pages/ui/pages/messages'
import Carousel from '../pages/ui/pages/carousel'

import Table from '../pages/tables'
import Basic from '../pages/tables/basic'
import High from '../pages/tables/high'

const routes = [
    {
        path: '/',
        exact: true,
        // component: Home
        render: () => <Redirect to='/home' />
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/ui',
        component: UI,
        routes: [
            {
                path: '/ui/buttons',
                component: Button
            },
            {
                path: '/ui/modals',
                component: Modals
            },
            {
                path: '/ui/messages',
                component: Messages
            },
            {
                path: '/ui/carousel',
                component: Carousel
            },
        ]
    },
    {
        path: '/table',
        component: Table,
        routes: [
            {
                path: '/table/basic',
                component: Basic
            },
            {
                path: '/table/high',
                component: High
            }
        ]
    },
    {
        path: '/rich',
        component: Rich
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/bikemap',
        component: BikeMap
    },
]

export default routes