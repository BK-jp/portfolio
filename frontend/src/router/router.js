import { createBrowserRouter, Navigate, redirect } from "react-router-dom";

import { authenticationCheck } from "js/config";

import App from 'App';
import Login from 'views/Login';

import Portfolio from "views/portfolio/index";
import Profile from "views/portfolio/profile/index";
import Introduce from "views/portfolio/profile/Introduce";
import About from "views/portfolio/profile/About";
import Skill from "views/portfolio/profile/Skill";
import Career from "views/portfolio/profile/Career";

import ErrorPage from "views/error/ErrorPage";

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
                    path: '/portfolio/*',
                    loader: () => (authenticationCheck() ? null : redirect('/')),
                    element: (
                        <Portfolio />
                    ),
                    children: [
                        {
                            path: '',
                            element: <Navigate to="/portfolio/profile/introduce"/>
                        },
                        {
                            path: 'profile/*',
                            element: (
                                <Profile />
                            ),
                            children: [
                                {
                                    path: '',
                                    element: <Navigate to="/portfolio/profile/introduce"/>
                                },
                                {
                                    path: 'introduce',
                                    element: <Introduce />
                                },
                                {
                                    path: 'about',
                                    element: <About/>
                                },
                                {
                                    path: 'skill',
                                    element: <Skill/>
                                },
                                {
                                    path: 'career',
                                    element: <Career/>
                                }
                            ]
                        }
                    ]
                }
            ],
            errorElement: <ErrorPage />
        }
    ]
)