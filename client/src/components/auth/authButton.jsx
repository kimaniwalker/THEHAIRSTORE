import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

import '../../utils/scss/pages/_authButton';

const AuthButton = (props) => {


    
    
    if (isLoggedIn()) {
        return <Link className="btn" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn" to="/login">Login</Link>;
    }
    
    
    
};

export default AuthButton;