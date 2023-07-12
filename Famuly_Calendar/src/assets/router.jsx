import { BrowserRouter, Navigate, Route, createBrowserRouter } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Users from './Views/Users';
import NotFound from './Views/NotFound';
import Dashbord from './Views/Dashbord';
import DefaultLayout from '../components/DefaultLayout';
import GuestLayout from '../components/GuestLayout';
import { Children } from 'react';



const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        Children: [
            {
                path : '/',
                element: <Navigate to="/Users"/>
            },
           
            {
                path: '/Dashbord',
                element:<Dashbord/>
            }
        ]

    },
    {
        path: '/',
        element: <GuestLayout />,
        Children: [
            {
                path: '/Login',
                element: <Login />
            },
            {
                path: '/Signup',
                element: <Signup />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    },
])
export default router;