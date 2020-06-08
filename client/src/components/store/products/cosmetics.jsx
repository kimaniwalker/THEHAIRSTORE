import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../../utils/scss/pages/_products.scss'
import ProductStraight from '../product-straight';
import ProductBw from '../product-bw';
import ProductLooseWave from '../product-lw';
import ProductDeepWave from '../product-dw';
import ProductHairAccessories from '../product-hairaccessories';
import Header from '../../header';
import Footer from '../../footer';



const GetCosmetics = () => {

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
            <main className="products">


                
                    <Header />
                    <div className="bannerRow justify-content-center">
                        
                    </div>


                    <div id="comingSoon" className="container">
                        <div className="row justify-content-center">
                            <h4>Stay Tuned We Are Lauching Our Cosmetics Line Soon</h4>
                        </div>
                    </div>
                    <Footer />

                =
            </main>
        </Fragment>
    )
}
export default GetCosmetics;