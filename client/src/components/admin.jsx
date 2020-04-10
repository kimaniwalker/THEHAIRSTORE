import React, { useState, useEffect, Fragment } from 'react';
import '../../src/utils/scss/pages/_admin.scss'


import ProductStraight from './store/product-straight';
import ProductListing from './store/product-Listing';
import ProductBw from './store/product-bw';
import Header from './header';







const BlogAdmin = () => {

    const [account, setHandleAccount] = useState(false)
    const [user, setUser] = useState([])
    const [balance, setBalance] = useState([])



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

    return (
        <Fragment>

            <div className="">

                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark container-fluid">
                        <div className="container-fluid">

                            <button onClick={handleToggle()} type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-bars"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                        </div>
                    </nav>
                </div>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <span><img src="../../images/footer/logo.png" width="125px"></img></span>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Rose Beauty Boutique</p>



                            <li className="active">
                                <a onClick={() => handleGetToken()} href="#">My Account</a>
                            </li>

                            <li className="active">
                                <a onClick={() => getBalance()} href="#">Charges</a>
                            </li>
                            <li className="active">
                                <a onClick={() => handleBw()} href="#">Create New</a>
                            </li>
                            <li className="active">
                                <a onClick={() => handleBw()} href="#">Deep Wave</a>
                            </li>
                            <li className="active">
                                <a onClick={() => handleBw()} href="#">Loose Wave</a>
                            </li>
                            <li className="active">
                                <a onClick={() => handleBw()} href="#">Hair Accessories</a>
                            </li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Bundle Deals</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Body Wave</a>
                                </li>
                                <li>
                                    <a href="#">Body Wave Closure</a>
                                </li>
                                <li>
                                    <a href="#">Body Wave Frontal</a>
                                </li>
                            </ul>


                        </ul>
                    </nav>


                    <div id="content" className="container-fluid">
                        <div className="row mt-2">
                            <div className="col-md-12">



                                {/* 



*/


                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <h1>Welcome {user.first_name}
                                                    {user.last_name}

                                                </h1>



                                            </div>

                                            <div className="row">
                                                <h2>Your Current Account Balance Is {balance}</h2>
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
export default BlogAdmin;