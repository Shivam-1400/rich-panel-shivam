import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,// eslint-disable-line
    NavBtnLink,// eslint-disable-line
} from '../../styles/styles';

const Navbar = () => {
    const { user, logOut } = UserAuth();// eslint-disable-line
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/billing' activeStyle>
                        Billing
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        SignUp
                    </NavLink>

                </NavMenu>

                <button onClick={async () => { await logOut() }}>Log Out</button>

            </Nav>

        </>
    );
};

export default Navbar;