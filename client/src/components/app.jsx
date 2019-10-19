import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetailScreen from './screens/Profile';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login2';
import Logout from './auth/logout';
import BlogAdmin from './admin';
import Contact2 from './screens/ContactUs/contact2';
import Donate from './donate';
import RegisterScreen from './register2';
import Welcome from './welcome';
import StripeRegister from './striperegister';
import Cart from './store/cart';








class Navigation extends Component {
    render() {
        return (
            
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/cart" component={Cart}/>
                        <Route path="/register" component={RegisterScreen} />
                        <PrivateRoute path="/admin" component={BlogAdmin} />
                        
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