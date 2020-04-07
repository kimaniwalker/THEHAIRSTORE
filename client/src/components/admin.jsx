import React, { useState,useEffect, Fragment } from 'react';
import '../../src/utils/scss/pages/_admin.scss'


import ProductStraight from './store/product-straight';
import ProductListing from './store/product-Listing';
import ProductBw from './store/product-bw';
import Header from './header';







const BlogAdmin = () => {

    const [all,setAll] = useState(false)
    const [account, setHandleAccount] = useState(false)
    const [straight,setStraight] = useState(false)
    const [bwHair,setbwHair] = useState(false)
    const [user,setUser] = useState('')
    const [userToken,setUserToken] = useState('');
    




    const handleAll = () => {
        setbwHair(false);
        setStraight(false);
        setAll(true);
        console.log('straight');
    }

    const handleAccount = () => {
        setHandleAccount(true);
        setbwHair(false);
        setStraight(false);
        setAll(false);
    }
    
    const handleStraight = () => {
        setAll(false);
        setbwHair(false);
        setStraight(true);
        console.log('straight');
    }

    const handleBw = () => {
        setAll(false);
        setStraight(false);
        setbwHair(true);
        console.log('straight');
    }

 

    const getUser = async() => {

        const AUTH_TOKEN_KEY = 'authtoken';
        let authToken = '';

        if (localStorage) {
            let token = localStorage.getItem(AUTH_TOKEN_KEY);
            if (token && token !== null) {
                authToken = token;
                setUserToken(token)

            }

    
            console.log(token);
            console.log(authToken);
            console.log(userToken);
        }
        
        
    }

    const handleGetToken = async() => {
        try {
            let res = await fetch('/api/users/me', {
                method:'GET',
                headers: new Headers({ "Content-Type": "application/json" , "Authorization": userToken})

            });
            let data = await res.json();
            console.log(data);
            setUser(data);
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
       
        getUser();
        
    }, []);

    

    const handleToggle = () => {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });

        });
    }

    if (straight) {
        return(
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
                        <li>
                            <a onClick={()=>handleAccount()} href="#">My Account</a>
                        </li>
                        
                        <li>
                            <a onClick={()=>handleStraight()} href="#">Charges</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Create New</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Deep Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Loose Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Hair Accessories</a>
                        </li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Bundle Deals</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Body Wave</a>
                                </li>
                                <li>
                                    <a  href="#">Body Wave Closure</a>
                                </li>
                                <li>
                                    <a  href="#">Body Wave Frontal</a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>


                <div id="content" className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <ProductStraight />
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        </Fragment>
        )
    } else if (bwHair) {
        return(
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
                            <li>
                            <a onClick={()=>handleAccount()} href="#">My Account</a>
                        </li>
                        
                        <li>
                            <a onClick={()=>handleStraight()} href="#">Charges</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Create New</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Deep Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Loose Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Hair Accessories</a>
                        </li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Bundle Deals</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Body Wave</a>
                                    </li>
                                    <li>
                                        <a  href="#">Body Wave Closure</a>
                                    </li>
                                    <li>
                                        <a  href="#">Body Wave Frontal</a>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </nav>
    
    
                    <div id="content" className="container-fluid">
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <ProductBw />
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            </Fragment>  
        )
    }
    else if (account) {
        return(
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
                            <li>
                            <a onClick={handleGetToken()} href="#">My Account</a>
                        </li>
                        
                        <li>
                            <a onClick={()=>handleGetToken()} href="#">Charges</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Create New</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Deep Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Loose Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Hair Accessories</a>
                        </li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Bundle Deals</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Body Wave</a>
                                    </li>
                                    <li>
                                        <a  href="#">Body Wave Closure</a>
                                    </li>
                                    <li>
                                        <a  href="#">Body Wave Frontal</a>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </nav>
    
    
                    <div id="content" className="container-fluid">
                        <div className="row mt-2">
                            <div className="col-md-12">
                                


{/* 



*/


    <div className="row">
        <div className="col">
            {user.id}
            {user.first_name}
            {user.last_name}
        </div>
    </div> }


                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            </Fragment>  
        )
    }
    else return (
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
                        <li>
                            <a onClick={()=>handleAccount()} href="#">My Account</a>
                        </li>
                        
                        <li>
                            <a onClick={()=>handleStraight()} href="#">Charges</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Create New</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Deep Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Loose Wave</a>
                        </li>
                        <li>
                            <a onClick={()=>handleBw()} href="#">Hair Accessories</a>
                        </li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Bundle Deals</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Body Wave</a>
                                </li>
                                <li>
                                    <a  href="#">Body Wave Closure</a>
                                </li>
                                <li>
                                    <a  href="#">Body Wave Frontal</a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>


                <div id="content" className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <ProductListing />
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        </Fragment>
        
    )
}

export default BlogAdmin;