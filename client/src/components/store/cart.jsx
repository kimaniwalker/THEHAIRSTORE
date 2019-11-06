import React from 'react'
import Cart from './cart/index'
import { connect } from 'react-redux'


const CartPage = (props) => {

    const cartTotals = props.cart.reduce((cartTotals, currentTotals) => cartTotals + (currentTotals.itemPrice * currentTotals.quantity) , 0)
    
    
    return(
        <div>
            <h2>Welcome to my cart</h2>
            <Cart />
        {cartTotals === 0 ? 'Nothing to Calculate YO' : cartTotals}
        </div>
    )

    
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(CartPage)
