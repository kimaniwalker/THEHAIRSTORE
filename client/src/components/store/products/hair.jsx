import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../utils/scss/pages/_admin.scss'
import ProductStraight from '../product-straight';
import ProductBw from '../product-bw';
import ProductLooseWave from '../product-lw';
import ProductDeepWave from '../product-dw';
import ProductHairAccessories from '../product-hairaccessories';



const GetHair = () => {

    const [account, setHandleAccount] = useState(false)
    const [user, setUser] = useState([])
    const [balance, setBalance] = useState([])
    const [hair, setHair] = useState(false);
    const [straight, setStraight] = useState(true);
    const [bodyw, setBw] = useState(false);
    const [deepw, setDw] = useState(false);
    const [loosew, setLw] = useState(false);
    const [bundle, setBundle] = useState(false);
    const [hairAccess, setHairAccess] = useState(false);



    const getBalance = async () => {

        try {
            let res = await fetch('/api/donate/balance', {

                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let data = await res.json();
            console.log(data.balance.available[0].amount);
            setBalance(data.balance.available[0].amount);
            console.log(balance);


        } catch (e) {
            console.log(e)
        }





    }

    const handleGetToken = async () => {

        const AUTH_TOKEN_KEY = 'authtoken';
        let authToken = '';

        try {

            if (localStorage) {
                let token = localStorage.getItem(AUTH_TOKEN_KEY);
                if (token && token !== null) {
                    authToken = token;
                }


                console.log(token);
                console.log(authToken);


            }

            let res = await fetch('/api/users/me', {
                method: 'GET',
                headers: new Headers({ "Content-Type": "application/json", "Authorization": localStorage.getItem(AUTH_TOKEN_KEY) })

            });
            let data = await res.json();
            console.log(data);
            setUser(data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleStraight = () => {
        setBw(false);
        setDw(false);
        setLw(false);
        setBundle(false);
        setHairAccess(false);
        setStraight(true);

    }

    const handleBw = () => {
        setBw(true);
        setDw(false);
        setLw(false);
        setBundle(false);
        setHairAccess(false);
        setStraight(false);
    }

    const handleDw = () => {
        setBw(false);
        setDw(true);
        setLw(false);
        setBundle(false);
        setHairAccess(false);
        setStraight(false);
    }

    const handleLw = () => {
        setBw(false);
        setDw(false);
        setLw(true);
        setBundle(false);
        setHairAccess(false);
        setStraight(false);
    }

    const handleBundle = () => {
        setBw(false);
        setDw(false);
        setLw(false);
        setBundle(true);
        setHairAccess(false);
        setStraight(false);
    }

    const handleHairAccess = () => {
        setBw(false);
        setDw(false);
        setLw(false);
        setBundle(false);
        setHairAccess(true);
        setStraight(false);
    }

    useEffect(() => {
        handleGetToken();
        getBalance();




    }, []);



    const handleToggle = () => {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });

        });
    }

    if (straight) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>


                            <ul className="list-unstyled components">

                                <a href="#homeSubmenu" data-toggle="collapse"
                                 aria-expanded="false" className="dropdown-toggle">Lashes</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">

                                    <li className="active">
                                        <a onClick={() => handleStraight()} href="#">Mink Lashes</a>
                                    </li>

                                </ul>


                            </ul>


                            <ul className="list-unstyled components">

                                <a href="#homeSubmenu2" data-toggle="collapse2"
                                 aria-expanded="false" className="dropdown-toggle">Lashes</a>
                                <ul className="collapse2 list-unstyled" id="homeSubmenu2">

                                    <li className="active">
                                        <a onClick={() => handleStraight()} href="#">Mink Lashes</a>
                                    </li>

                                </ul>


                            </ul>



                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductStraight />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    } else if (deepw) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>

                            <ul className="list-unstyled components">
                                <p>Rose Beauty Boutique</p>


                                <li className="active">
                                    <a onClick={() => handleStraight()} href="#">Straight</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleBw()} href="#">Body Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleDw()} href="#">Deep Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleLw()} href="#">Loose Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleHairAccess()} href="#">Hair Accessories</a>
                                </li>

                                <li className="active">
                                    <a onClick={() => handleBundle()} href="#">Bundle Deals</a>
                                </li>





                            </ul>
                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductDeepWave />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        )
    }

    else if (bodyw) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>

                            <ul className="list-unstyled components">
                                <p>Rose Beauty Boutique</p>


                                <li className="active">
                                    <a onClick={() => handleStraight()} href="#">Straight</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleBw()} href="#">Body Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleDw()} href="#">Deep Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleLw()} href="#">Loose Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleHairAccess()} href="#">Hair Accessories</a>
                                </li>

                                <li className="active">
                                    <a onClick={() => handleBundle()} href="#">Bundle Deals</a>
                                </li>





                            </ul>
                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductBw />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }

    else if (loosew) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>

                            <ul className="list-unstyled components">
                                <p>Rose Beauty Boutique</p>


                                <li className="active">
                                    <a onClick={() => handleStraight()} href="#">Straight</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleBw()} href="#">Body Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleDw()} href="#">Deep Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleLw()} href="#">Loose Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleHairAccess()} href="#">Hair Accessories</a>
                                </li>

                                <li className="active">
                                    <a onClick={() => handleBundle()} href="#">Bundle Deals</a>
                                </li>





                            </ul>
                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductLooseWave />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        )
    }

    else if (bundle) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>

                            <ul className="list-unstyled components">
                                <p>Rose Beauty Boutique</p>


                                <li className="active">
                                    <a onClick={() => handleStraight()} href="#">Straight</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleBw()} href="#">Body Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleDw()} href="#">Deep Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleLw()} href="#">Loose Wave</a>
                                </li>
                                <li className="active">
                                    <a onClick={() => handleHairAccess()} href="#">Hair Accessories</a>
                                </li>

                                <li className="active">
                                    <a onClick={() => handleBundle()} href="#">Bundle Deals</a>
                                </li>





                            </ul>
                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductBundles />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }

    else if (hairAccess) {
        return (
            <Fragment>

                <div className="">

                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top container-fluid navbarSpecial">

                            <div className="container-fluid">

                                <h2 className="lightL">Rose Beauty Boutique</h2>

                                <span>
                                    <Link to="/cart"><i className="fas fa-shopping-cart  grow p-2 lightL">
                                    </i></Link>
                                    <Link to="/cart"><i className="fas fa-lock-open  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-facebook  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-instagram  grow p-3 lightL"></i></Link>
                                    <Link to="/cart"><i className="fab fa-snapchat  grow p-3 lightL"></i></Link>
                                    <button to="" onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn">
                                        <i className="fas fa-bars lightL grow p-2"> </i>
                                    </button>
                                </span>

                            </div>
                        </nav>
                    </div>
                    <div className="wrapper">
                        <nav id="sidebar">


                            <div className="sidebar-header">
                                <span><img id="sidebarCollapse" src="../../images/icons/roselogo.png" width="80px"></img></span>
                            </div>

                            <ul className="list-unstyled components">
                                <p>Rose Beauty Boutique</p>



                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hair</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">

                                    <li className="active">
                                        <a onClick={() => handleStraight()} href="#">Straight</a>
                                    </li>
                                    <li className="active">
                                        <a onClick={() => handleBw()} href="#">Body Wave</a>
                                    </li>
                                    <li className="active">
                                        <a onClick={() => handleDw()} href="#">Deep Wave</a>
                                    </li>
                                    <li className="active">
                                        <a onClick={() => handleLw()} href="#">Loose Wave</a>
                                    </li>
                                    <li className="active">
                                        <a onClick={() => handleHairAccess()} href="#">Hair Accessories</a>
                                    </li>

                                    <li className="active">
                                        <a onClick={() => handleBundle()} href="#">Bundle Deals</a>
                                    </li>

                                </ul>





                            </ul>
                        </nav>


                        <div id="content" className="container-fluid">
                            <div className="row mt-2">
                                <div className="col-md-12">

                                    {
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <ProductHairAccessories />
                                                </div>
                                            </div>
                                        </div>


                                    }


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        )
    }
}
export default GetHair;