import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm2'; // must be a child of Elements wrapper


const Donate = (props) => {

    
        return (
            <div>
            
            <StripeProvider 
            apiKey="pk_test_5tdzast6E5DFrnFEcXHrRjRr001G2jS4Am">
            
                <Elements>
                    <InjectedCheckoutForm amount={props.amount} 
                    message={props.message} wig={props.wig}
                     closure={props.closure} frontal={props.frontal} coloring={props.coloring} />
                </Elements>
            </StripeProvider>
            
            </div>
        );
    
}

export default Donate;