import { createBrowserRouter, redirect } from "react-router-dom";

import { authenticationCheck } from "js/config";

import App from 'App';
import Login from 'views/Login';

import Portfolio from "views/portfolio/index";
import Profile from "views/portfolio/profile/index";
import Introduce from "views/portfolio/profile/Introduce";
import About from "views/portfolio/profile/About";

import NotFound from "views/error/NotFound";

export const router = createBrowserRouter (
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    loader: () => (authenticationCheck() ? redirect('/portfolio') : null),
                    element: <Login />
                },
                {
                    path: '/portfolio',
                    loader: () => (authenticationCheck() ? null : redirect('/')),
                    element: (
                        <Portfolio />
                    ),
                    children: [
                        {
                            path: '/portfolio/profile',
                            loader: () => (authenticationCheck() ? null : redirect('/')),
                            element: (
                                <Profile/>
                            ),
                            children: [
                                {
                                    path: '/portfolio/profile/introduce',
                                    loader: () => (authenticationCheck() ? null : redirect('/')),
                                    element: <Introduce/>
                                },
                                {
                                    path: '/portfolio/profile/about',
                                    loader: () => (authenticationCheck() ? null : redirect('/')),
                                    element: <About/>
                                }
                            ]
                        }
                    ]
                }
            ],
            errorElement: <NotFound />
        }
    ]
)