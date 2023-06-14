import { createBrowserRouter, redirect } from "react-router-dom";

import { authenticationCheck } from "js/config";

import App from 'App';
import Login from 'views/Login';
import Portfolio from "views/portfolio/index";

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
                    element: <Portfolio />
                }
            ]
        }
    ]
)