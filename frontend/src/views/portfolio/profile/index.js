import React from "react"
import { NavLink, Outlet } from "react-router-dom";

const Profile = ()=>{
    return (
        <>
            <div className="link-wrap">
                <ul id="inner-link">
                    <li>
                        <NavLink to="/portfolio/profile/introduce" className={({isActive}) =>
                            isActive ? 'active' : ''
                        }>自己紹介</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/profile/skill" className={({isActive}) =>
                            isActive ? 'active' : ''
                        }>スキル</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/profile/about" className={({isActive}) =>
                            isActive ? 'active' : ''
                        }>履歴書</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/profile/career" className={({isActive}) =>
                            isActive ? 'active' : ''
                        }>職務経歴書</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

export default Profile;