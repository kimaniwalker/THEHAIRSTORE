import React, { useState, useEffect, Fragment } from 'react'
import Cart from './cart/index'
import { connect } from 'react-redux'
import Statement from '../statement'
import Donate from '../donate'
import '../../utils/scss/pages/_cart.scss'
import { loadStripe } from '@stripe/stripe-js';


const CartPage = (props) => {

    const cartTotals = props.cart.reduce((cartTotals, currentTotals) => cartTotals + (currentTotals.itemPrice * currentTotals.quantity), 0)

    const [total, setTotal] = useState(cartTotals)
    const [cart, setCart] = useState(JSON.stringify(props.cart))
    const [wig, setWig] = useState(false)
    const [closure, setClosure] = useState(false)
    const [frontal, setFrontal] = useState(false)
    const [coloring, setColoring] = useState(false)
    const [addonClosure, setAddOnClosure] = useState(false)
    const [addonFrontal, setAddOnFrontal] = useState(false)
    const [addonColoring, setAddOnColoring] = useState(false)
    const [addonWig, setAddOnWig] = useState(0);
    const [session, setSession] = useState([]);

    const [specialMessage, setSpecialMessage] = useState(false);
    const [message, setMessage] = useState('');


    const handleTotal = (e) => {


    }

    useEffect(() => {


        handleCheck();
        console.log(cart);

    }, []);

    const handleCheck = () => {
        var x = document.getElementById("checkoutDiv");
        if (total === 0) {
            x.style.display = "none";
            console.log('testmf');
        } else {

            x.style.display = "block";
        }
    }

    const addWig = () => {
        console.log('here MF');
        var checkbox = document.getElementById('addWig');

        if (checkbox.checked == true) {
            console.log('checked')
            setWig(true);
            setAddOnWig(60);

            console.log(wig);
        } else {
            console.log("not checked")
            setWig(false);
            setAddOnWig(0);
            console.log(wig);
        }



    }

    const addClosure = () => {
        console.log('here MF');
        var checkbox = document.getElementById('addClosure');

        if (checkbox.checked == true) {
            console.log('checked')
            setClosure(true);
            setAddOnClosure(20);

            console.log(closure);
        } else {
            console.log("not checked")
            setClosure(false);
            setAddOnClosure(0);
            console.log(closure);
        }



    }

    const addFrontal = () => {
        console.log('here MF');
        var checkbox = document.getElementById('addFrontal');

        if (checkbox.checked == true) {
            console.log('checked')
            setFrontal(true);
            setAddOnFrontal(30);

            console.log(frontal);
        } else {
            console.log("not checked")
            setFrontal(false);
            setAddOnFrontal(0);
            console.log(frontal);
        }



    }

    const addColoring = () => {
        console.log('here MF');
        var checkbox = document.getElementById('addColoring');


        if (checkbox.checked == true) {
            console.log('checked')
            setColoring(true);
            setAddOnColoring(25);
            $("#specialMessage").removeClass("hide");
            $("#specialMessage").addClass("show");



            console.log(coloring);
        } else {
            console.log("not checked")
            setColoring(false);
            setAddOnColoring(0);
            console.log(coloring);
            $("#specialMessage").removeClass("show");
            $("#specialMessage").addClass("hide");


        }



    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
        console.log(message);
    }

    const handleCheckout = async (e) => {

        const stripePromise = loadStripe('pk_test_5tdzast6E5DFrnFEcXHrRjRr001G2jS4Am');
        /* e.preventDefault(); */

        try {
            let res = await fetch('/api/donate/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ total, cart }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let sessionResponse = await res.json();
            console.log(sessionResponse)
            setSession(sessionResponse);
            console.log('Redirecting To Stripe ! See ya later' + sessionResponse.sessionId)
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: sessionResponse.sessionId,
            });



        } catch (e) {
            console.log(e)
        }
    }





    return (
        <Fragment>


            <Statement statement='My Cart' />


        <div className="container-fluid">
<div className="row justify-content-center">
            <Cart />
        </div>
            
        </div>


        
            

            <div id="checkoutDiv" className="container-fluid cart">

                {/*
                Additional Add-ons Section
                <div className="row mb-4 ml-3 mr-3 justify-content-center">
                    <h2>Additional Add-Ons</h2>
                </div>

                <div className="row mb-4 ml-3 mr-3 justify-content-center">
                    <h3 className="px-4">Add Wig + $60: <input type="checkbox" id="addWig" onClick={() => addWig()} ></input></h3>

                    <h3 className="px-4">Add Closure + $20: <input type="checkbox" id="addClosure" onClick={() => addClosure()} ></input></h3>

                    <h3 className="px-4">Add Frontal + $30: <input type="checkbox" id="addFrontal" onClick={() => addFrontal()} ></input></h3>

                    <h3 className="px-4">Add Coloring + $25: <input type="checkbox" id="addColoring" onClick={() => addColoring()} ></input></h3>

                </div>

                <div  id="specialMessage" className="row mb-4 ml-3 mr-3 justify-content-center hide">
                    <h3>Add Special Instructions:</h3>
                <div className="row mb-4 ml-3 mr-3">
                                <textarea className="input-group"
                                    rows="8"
                                    value={message}
                                    onChange={handleMessage}
                                    placeholder="Add Special Message Ex. Please add 14 foil highlights"
                                />
                            </div>

                </div>
 */}

                <div className="row justify-content-center">



                    <button onClick={() => handleCheckout()} type="button" className="btnPayment" /* data-toggle="modal" */ data-target=".bd-example-modal-lg">Proceed To Checkout : Total: ${cartTotals === 0 ? '0' : cartTotals + addonWig + addonFrontal + addonClosure + addonColoring}</button>

                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">

                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <Donate amount={cartTotals + addonWig + addonClosure + addonFrontal + addonColoring}
                                    message={message} wig={wig} closure={closure} frontal={frontal} coloring={coloring} />
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </Fragment>
    )


}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage)
