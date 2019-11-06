import React, { Fragment } from 'react';
import '../utils/scss/pages/_header.scss';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';

const Header = () => {
    
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 350) {
            $("#header").removeClass("head")
            $("#header").addClass("sticky");
        }
        else {
            $("#header").removeClass("sticky");
            $("#header").addClass("head");
        }
    });
    
    
    return (
        <Fragment>
            <main className="header">
            <div id="header" className="head fixed-top" onScroll={()=>scrollFunction()}>
                <nav className="navbar navbar-expand-md py-3 d-flex justify-content-between">
                    <Link to='/'>
                        <img className="grow" src="../../../images/icons/icon.png"
                            alt="store"
                            width="75px">
                        </img>
                    </Link>

                    <h2 className="">Rose Beauty Boutique</h2>
                    

                   <Link to="/cart"><i className="fas fa-shopping-cart fa-2x grow"></i></Link>
                </nav>

            </div>
            </main>
        </Fragment>
    )
}

export default Header;