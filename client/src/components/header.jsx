import React, { Fragment , useState } from 'react';
import '../utils/scss/pages/_header.scss';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton'; 

const Header = () => {

    const [loggedIn,setLoggedIn] = useState(true);
    
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
            <div id="header" className="head fixed-top" onScroll={()=>scrollFunction()}>
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
     <Link to="/store"><i className="fas fa-store  grow p-3"></i></Link>
     <Link to="/cart"><i className="fas fa-bars  grow p-3"></i></Link>
     <Link to="/cart"><i className="fas fa-lock-open  grow p-3"></i></Link>
     <Link to="/cart"><i className="fab fa-facebook  grow p-3"></i></Link>
     <Link to="/cart"><i className="fab fa-instagram  grow p-3"></i></Link>
     <Link to="/cart"><i className="fab fa-snapchat  grow p-3"></i></Link>
</span>
                   
                </nav>

            </div>
            </main>
        </Fragment>
    )
    else return(
        <Fragment>
        <main className="header">
        <div id="header" className="head fixed-top" onScroll={()=>scrollFunction()}>
            <nav className="navbar navbar-expand-md py-3 d-flex justify-content-between">
                <Link to='/'>
                    <img className="grow" src="../../../images/icons/ROSELOGO.png"
                        alt="store"
                        width="75px">
                    </img>
                </Link>

                <h2 className="">Rose Beauty Boutique</h2>
                
<span>
<Link to="/cart"><i className="fas fa-shopping-cart  grow p-2">
</i></Link>
 <Link to="/cart"><i className="fas fa-store  grow p-2"></i></Link>
 <Link to="/cart"><i className="fas fa-bars  grow p-2"></i></Link>
 <Link to="/cart"><i className="fas fa-lock  grow p-2"></i></Link>
</span>
               
            </nav>

        </div>
        </main>
    </Fragment>
    )
}

export default Header;