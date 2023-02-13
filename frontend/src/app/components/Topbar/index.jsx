
import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../sharing/context/auth";
import * as T from './TopbarStyles'

export const Topbar = () => {
    const { user } = useContext(AuthContext)

    return(
        <T.Container>
           <T.Menu>
                <Link to='/about'>
                    <T.Nav>Sobre nós</T.Nav>
                </Link>
                <Link to={user ? '/myaccount' : '/login'}>
                    <T.Nav>
                        <div className="center">
                            <T.IconUser/><span>@leonan</span>
                        </div>
                    </T.Nav>
                </Link>
            </T.Menu>
        </T.Container>
    )
}