import React, { useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom";

const Profile = ()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        const linkList = document.getElementById('inner-link').querySelectorAll('a');

        linkList.forEach((link)=>{
            link.addEventListener('click', function(){
               linkList.forEach((a)=>{
                    a.classList.remove('active');
               });
               this.classList.add('active');
            });
        });

        let pathname = window.location.pathname;
        if(pathname == '/portfolio/profile'){
            navigate(linkList[0].getAttribute('href'), {replace: true});
            pathname = linkList[0].getAttribute('href');
        }

        const pathSplit = pathname.split('/');
        linkList.forEach((link)=>{
            if(link.getAttribute('href') == '/'+pathSplit[1]+'/'+pathSplit[2]+'/'+pathSplit[3]){
                link.classList.add('active');
            }else{
                link.classList.remove('active');
            }
        });
    }, []);

    return (
        <>
            <div className="link-wrap">
                <ul id="inner-link">
                    <li>
                        <Link to="/portfolio/profile/introduce">自己紹介</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/profile/about">履歴書</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

export default Profile;