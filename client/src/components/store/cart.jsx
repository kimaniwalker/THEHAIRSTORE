import React, { useState,Fragment } from 'react'
import Cart from './cart/index'
import { connect } from 'react-redux'
import Statement from '../statement'
import Donate from '../donate'


const CartPage = (props) => {
    
    const cartTotals = props.cart.reduce((cartTotals, currentTotals) => cartTotals + (currentTotals.itemPrice * currentTotals.quantity), 0)

    const [total,setTotal] = useState(cartTotals)

    

    const handleTotal = (e) => {
        
        
    }

    return (
        <Fragment>


            <Statement statement='My Cart' />


            <Cart />

            <div className="container-fluid">
                <div className="row justify-content-center">

                    <button onClick={()=>handleTotal()} type="button" className="btnPayment" data-toggle="modal" data-target=".bd-example-modal-lg">Proceed To Checkout : Total: ${cartTotals === 0 ? '0' : cartTotals}</button>

                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <Donate amount={cartTotals}/>
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
