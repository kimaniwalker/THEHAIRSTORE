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




    return (
        <Fragment>

        </Fragment>
    )
}
export default BlogAdmin;