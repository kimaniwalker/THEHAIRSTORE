import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetailScreen from './screens/Profile';
import PortfolioScreen from './screens/Portfolio/portfolio';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Logout from './auth/logout';
import BlogAdmin from './admin';
import Contact2 from './screens/ContactUs/contact2';
import Donate from './donate';
import RegisterScreen from './register2';
import Welcome from './welcome';
import StripeRegister from './striperegister';
import CartPage from './store/cart';
import DetailProduct from './store/detailProduct';
import FeaturedProducts from './store/featuredProducts';
import StoreFront from './store/storeFront';
import getHair from './store/products/hair';
import GetLashes from './store/products/lashes';
import GetCosmetics from './store/products/cosmetics';














class Navigation extends Component {
    render() {
        return (
            
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <PrivateRoute exact path="/admin" component={BlogAdmin} />
                        <Route path="/products/:id" component={DetailProduct} />
                        <Route exact path="/cart" component={CartPage}/>
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/portfolio" component={PortfolioScreen} />

                        
                        <Route path="/store" component={StoreFront} />
                        <Route path="/hair" component={getHair} />
                        <Route path="/lashes" component={GetLashes} />
                        <Route path="/cosmetics" component={GetCosmetics} />
                        
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/contact" component={Contact2} />
                        <Route exact path="/payment" component={Donate} /> 
                        <Route path="/striperegister" component={StripeRegister} />
                        
                        <Route path="/me" component={UserDetailScreen} />
                        

                    </Switch>
                </Fragment>
            </Router>
            
        )
    }
}

export default Navigation;