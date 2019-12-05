import React, { useState,Fragment } from 'react'
import Cart from './cart/index'
import { connect } from 'react-redux'
import Statement from '../statement'
import Donate from '../donate'


const CartPage = (props) => {
    
    const cartTotals = props.cart.reduce((cartTotals, currentTotals) => cartTotals + (currentTotals.itemPrice * currentTotals.quantity), 0)

    const [total,setTotal] = useState(cartTotals)
    const [wig,setWig] = useState(false)
    const [addon, setAddOn] = useState(0);
    const [message,setMessage] = useState('');
    

    const handleTotal = (e) => {
        
        
    }

    const addWig = () => {
        console.log('here MF');
        var checkbox = document.getElementById('myCheck');
       
        if (checkbox.checked == true) {
            console.log('checked')
            setWig(true);
            setAddOn(60);
            
            console.log(wig);
        } else {
            console.log("not checked")
            setWig(false);
            setAddOn(0);
            console.log(wig);
        }



    }

    return (
        <Fragment>


            <Statement statement='My Cart' />


            <Cart />

            <div className="container-fluid">

            <div className="row mb-4 ml-3 mr-3 justify-content-center">
                            <h2>Additional Options</h2>
                            </div>

            <div className="row mb-4 ml-3 mr-3">
                            <h3>Add Wig + $60: <input type="checkbox" id="myCheck" onClick={() => addWig()} ></input></h3>
                            </div>

                <div className="row justify-content-center">

                

                    <button onClick={()=>handleTotal()} type="button" className="btnPayment" data-toggle="modal" data-target=".bd-example-modal-lg">Proceed To Checkout : Total: ${cartTotals === 0 ? '0' : cartTotals + addon}</button>

                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                
                                <Donate amount={cartTotals + addon}/>
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
