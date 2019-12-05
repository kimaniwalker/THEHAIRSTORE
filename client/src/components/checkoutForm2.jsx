import React, { useState,useEffect } from 'react';
import '../utils/scss/pages/_checkoutForm.scss';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';
import CardSection from './cardSection';
import { Route } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';


const CheckoutForm = (props) => {


    const [customerName, setcustomerName] = useState('');
    const [amount, setamount] = useState(props.amount);
    const [submitted, setsubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [paymentPosted, setPaymentPosted] = useState(false);
    const [data, setData] = useState([]);
    
    const { history, location, match } = useReactRouter();

    const { from } =  { from: { pathname: "/" } };
    
    


    const handlecustomerName = (e) => {
        setcustomerName(e.target.value);
        setamount(props.amount);
    }

    const handleamount = (e) => {
        setamount(e.target.value);
    }

    const handlesubmitted = (e) => {
        setsubmitted(false);
        setamount(props.amount);
    }

   

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setamount(props.amount);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setamount(props.amount);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleConfirmTotal = () =>  {
        setamount(props.amount);
        console.log(amount);
        console.log('here');
        
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
                        <form onSubmit={(e) => handleSubmit(e)}>

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

                            <CardSection />


                            <div className="row mb-4 mr-3 ml-3 pt-4 pb-3">
                                <button type="submit" onClick={()=>handleConfirmTotal()} /* onMouseOver={()=>handleConfirmTotal()} */ className="btn btn-info mt-2">SUBMIT</button>
                            </div>



                        </form>



                    </div>
                    


                </div>

            </div>

        </div>

    );

}

export default injectStripe(CheckoutForm);

