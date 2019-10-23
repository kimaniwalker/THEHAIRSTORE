import React from 'react'
import { connect } from 'react-redux'

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}


function Cart(props) {

    if (props.cart.length < 1) {
    return <div>Cart is Empty</div>
}
    else {


    return sort(props.cart).map(item => <div key={item.id}>
        {item.name}
        {item.quantity}
        
        

        <button onClick={() => props.addToCart(item)}>
            +
        </button>

        <button onClick={() => props.removeFromCart(item)}>
            -
        </button>

        <button
            onClick={() => props.removeAllFromCart(item)}>
            Clear Items
        </button>
        <button onClick={() => props.cartTotal()}>
            testing
        </button>

        



    </div>
    



    )}
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item => {
            dispatch({ type: 'ADD', payload: item })
        }),
        removeFromCart: (item => {
            dispatch({ type: 'REMOVE', payload: item })
        }),
        removeAllFromCart: (item => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }),

        cartTotal: (item => {
            dispatch({ type: 'CART_TOTAL', payload: item })
        }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)







