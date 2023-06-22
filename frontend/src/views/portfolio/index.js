import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "views/include/Footer";

import 'css/Portfolio.css'

function Portfolio(){
    const navigate = useNavigate();

    useEffect(()=>{
        const navWrap = document.getElementById('nav-wrap');
        navWrap.addEventListener('click', function(e){
            if(e.target.tagName != 'NAV') document.getElementById('main').classList.remove('active');
        });

        const linkList = navWrap.querySelectorAll('a');
        
        linkList.forEach((link)=>{
            link.addEventListener('click', function(){
               linkList.forEach((a)=>{
                    a.classList.remove('active');
               });
               this.classList.add('active');
            });
        });

        let pathname = window.location.pathname;
        if(pathname == '/portfolio'){
            navigate(linkList[0].getAttribute('href'), {replace: true});
            pathname = linkList[0].getAttribute('href');
        }
        
        const pathSplit = pathname.split('/');
        linkList.forEach((link)=>{
            if(link.getAttribute('href') == '/'+pathSplit[1]+'/'+pathSplit[2]){
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
        });

        const toggleMain = document.getElementById('toggle-main');
        toggleMain.addEventListener('click', function(){
            document.getElementById('main').classList.toggle('active');
        });
    },[]);

    return (
        <div className="main" id="main">
            <div className="nav-wrap" id="nav-wrap">
                <nav>
                    <ul>
                        <li>
                            <Link to="/portfolio/profile" title="Profile">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="128px" height="128px">    <path d="M 64 1 C 56.8 1 51 6.8 51 14 C 51 21.2 56.8 27 64 27 C 71.2 27 77 21.2 77 14 C 77 6.8 71.2 1 64 1 z M 64 7 C 67.9 7 71 10.1 71 14 C 71 17.9 67.9 21 64 21 C 60.1 21 57 17.9 57 14 C 57 10.1 60.1 7 64 7 z M 56 31 C 48.8 31 43 36.8 43 44 L 43 78 C 43 79.7 44.3 81 46 81 C 47.7 81 49 79.7 49 78 L 49 44 C 49 40.1 52.1 37 56 37 L 72 37 C 75.9 37 79 40.1 79 44 L 79 75 L 76 75 C 74.3 75 73 76.3 73 78 L 73 124 C 73 125.7 74.3 127 76 127 C 77.7 127 79 125.7 79 124 L 79 81 L 82 81 C 83.7 81 85 79.7 85 78 L 85 44 C 85 36.8 79.2 31 72 31 L 56 31 z M 64 81 C 62.3 81 61 82.3 61 84 L 61 124 C 61 125.7 62.3 127 64 127 C 65.7 127 67 125.7 67 124 L 67 84 C 67 82.3 65.7 81 64 81 z M 52 84 C 50.3 84 49 85.3 49 87 L 49 123.90039 C 49 125.60039 50.3 126.90039 52 126.90039 C 53.7 126.90039 55 125.60039 55 123.90039 L 55 87 C 55 85.3 53.7 84 52 84 z"/></svg>
                                <span>Home</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="page-wrap">
                <div className="page">
                    <header>
                        <button className="button" id="toggle-main">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </header>
                    <article>
                        <Outlet/>
                    </article>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;