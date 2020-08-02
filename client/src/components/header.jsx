import React, { Fragment, useState, useEffect } from 'react';
import '../utils/scss/pages/_header.scss';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';
import * as userService from "../services/user";

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        userService.checkLogin().then(loggedIn => {
            if (loggedIn) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

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


    if (loggedIn) return (
        <Fragment>
            <main className="header">
                <div id="header" className="head fixed-top" onScroll={() => scrollFunction()}>
                    <nav className="navbar navbar-expand-md py-3 d-flex justify-content-between">
                        <Link to='/'>
                            <img className="grow" src="../../../images/icons/ROSELOGO.png"
                                alt="store"
                                width="75px">
                            </img>
                        </Link>

                        <h2 className="d-none">Rose Beauty Boutique</h2>

                        <span>
                            <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2">
                            </i></Link>
                            <Link to="/"><i className="fas fa-store  grow p-3"></i></Link>
                            <Link to="/admin"><i className="fas fa-lock-open  grow p-3"></i></Link>
                            <a href="https://www.facebook.com/rosebeautyboutiqueco"><i className="fab fa-facebook  grow p-3"></i></a>
                            <a href="https://www.instagram.com/shoprosebeautyco"><i className="fab fa-instagram  grow p-3"></i></a>
                            <Link to="/"><i className="fab fa-snapchat  grow p-3"></i></Link>
                        </span>

                    </nav>

                </div>
            </main>
        </Fragment>
    )
    else return (
        <Fragment>
            <main className="header">
                <div id="header" className="head fixed-top" onScroll={() => scrollFunction()}>
                    <nav className="navbar navbar-expand-md py-3 d-flex justify-content-between">
                        <Link to='/'>
                            <img className="grow" src="../../../images/icons/ROSELOGO.png"
                                alt="store"
                                width="75px">
                            </img>
                        </Link>


                        <span>
                            <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2">
                            </i></Link>
                            <Link to="/"><i className="fas fa-store  grow p-3"></i></Link>
                            <Link to="/login"><i className="fas fa-lock  grow p-3"></i></Link>
                            <a href="https://www.facebook.com/rosebeautyboutiqueco"><i className="fab fa-facebook  grow p-3"></i></a>
                            <a href="https://www.instagram.com/shoprosebeautyco"><i className="fab fa-instagram  grow p-3"></i></a>
                            <Link to="/"><i className="fab fa-snapchat  grow p-3"></i></Link>
                        </span>

                    </nav>

                </div>
            </main>
        </Fragment>
    )
}

export default Header;