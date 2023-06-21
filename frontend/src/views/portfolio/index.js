import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "views/include/Footer";

import 'css/Portfolio.css'

function Portfolio(){
    return (
        <div className="main">
            <div className="nav-wrap">
                <nav>
                    <ul>
                        <li>
                            <Link to="/portfolio/test">test</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="page-wrap">
                <Outlet/>
                <Footer/>
            </div>
        </div>
    )
}

export default Portfolio;