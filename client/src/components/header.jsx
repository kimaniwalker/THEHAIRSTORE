import React, { Fragment } from 'react';
import '../utils/scss/pages/_header.scss';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';

const Header = () => {
    return (
        <Fragment>
            <main className="header">
                <nav className="navbar navbar-expand-md py-3 d-flex justify-content-between">
                    <Link to='/'>
                        <img src="../../../images/icons/icon.png"
                            alt="store"
                            width="75px">
                        </img>
                    </Link>

                    <h2 className="text-light">Rose Beauty Boutique</h2>
                    

                    <AuthButton />
                </nav>

            </main>
        </Fragment>
    )
}

export default Header;