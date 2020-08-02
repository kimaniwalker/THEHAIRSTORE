import React, { useState,useEffect } from 'react';
import '../utils/scss/pages/_checkoutForm.scss';
import { injectStripe } from 'react-stripe-elements';
import { postCharge} from '../services/stripeService';
import CardSection from './cardSection';
import { Route } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import IndeterminateProgress from './utilities/indeterminateProgress';
import {loadStripe} from '@stripe/stripe-js';



const CheckoutForm = (props) => {


    const [customerName, setcustomerName] = useState('');
    const [amount, setamount] = useState(props.amount);
    const [quantity,setQuantitiy] = useState(1);
    const [submitted, setsubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState(`Special Message: ${props.message}
    Closure: ${props.closure} Frontal: ${props.frontal} Coloring: ${props.coloring}` );
    const [paymentPosted, setPaymentPosted] = useState(false);
    const [data, setData] = useState([]);
    const [specialMessage, setspecialMessage] = useState(props.message);
    const [closure,setClosure] = useState(props.closure);
    const [frontal,setFrontal] = useState(props.frontal);
    const [coloring,setColoring] = useState(props.coloring);
    const [sessionId,setSessionId] = useState('');
    
    
                     
    const { history, location, match } = useReactRouter();

    const { from } =  { from: { pathname: "/" } };

    const stripePromise = loadStripe('pk_test_5tdzast6E5DFrnFEcXHrRjRr001G2jS4Am');

    
    const handlecustomerName = (e) => {
        setcustomerName(e.target.value);
        
        
    }

    const handleamount = (e) => {
        setamount(e.target.value);
        console.log(amount);
    }

    const handlesubmitted = (e) => {
        setsubmitted(false);
        
    }

   

    const handleEmail = (e) => {
        setEmail(e.target.value);
        
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
       
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleConfirmTotal = () =>  {
        setamount(props.amount);
        setDescription(`Special Message: ${props.message}
        Wig: ${props.wig}
        Closure: ${props.closure} Frontal: ${props.frontal} Coloring: ${props.coloring}`)
        
        
    }

    const handleCheckout = async (e) => {
        
        e.preventDefault();

        try {
            let res = await fetch('/api/donate/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ amount, quantity }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse)
            setSessionId(sessionResponse);
            console.log('Redirecting To Stripe ! See ya later' + sessionId)
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
            sessionId: sessionResponse.sessionId,
    });

            
            
        } catch (e) {
            console.log(e)
        }
    }


    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        try {
            
            const token = await props.stripe.createToken({ name: customerName });
            const response = await postCharge({ id: token.token.id, amount, description, phone, email });
            
            NotificationManager.success('Payment Submitted Successfully');
            
            
            
            
            setTimeout(() => {
                if (response.status = 'succeeded'){
                setData(response);
                setPaymentPosted(true);
               
                console.log(data);
                } else {
                    setPaymentPosted(false);
                    NotificationManager.error('There was an issue');
                }
                
            }, 1000);

        } catch (e) {
            console.log(e);
            NotificationManager.error(e);
        }
    }

    


    if (paymentPosted) {
        return <Route component={() => { 
            window.location.href = data.receipt_url; 
            return null;
       }}/>
    } else
    return (
        <div className="checkoutForm">
            <div className="container-fluid">
            <NotificationContainer />
                <div className="row pt-3 pb-3 justify-content-center">
                    <div id="FormBg" className="col-xl-7 col-lg-8 col-md-10 col-sm-12 pt-4">
                        <div className="row justify-content-center text-light pb-2">
                            <h2>Make A Payment</h2>
                        </div>
                        
                        <div className="row justify-content-center mb-5">
                            <i className="fas fa-donate fa-2x text-light"></i>

                        </div>
                        <form onSubmit={(e) => handleCheckout(e)}>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={customerName}
                                    onChange={handlecustomerName}
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={email}
                                    onChange={handleEmail}
                                    placeholder="Email"
                                />
                            </div>

                            <div className="row mb-4 ml-3 mr-3">
                                <input className="input-group"
                                    value={phone}
                                    onChange={handlePhone}
                                    placeholder="Phone"
                                />
                            </div>

                            

                            <div className="row mb-4 ml-3 mr-3">
                                <input disabled className="input-group"
                                    placeholder={'Your total is : ' +  props.amount + '$'}
                                />
                            </div>

                            {/* <CardSection /> */}


                            <div className="row mb-4 mr-3 ml-3 pt-4 pb-3">
                                <button type="submit" onClick={()=>handleConfirmTotal()} /* onMouseOver={()=>handleConfirmTotal()} */ className="btn btn-info mt-2">Proceed To Stripe</button>
                            </div>



                        </form>



                    </div>
                    


                </div>

            </div>

        </div>

    );

}

export default injectStripe(CheckoutForm);

