import React from 'react'
import { connect } from 'react-redux'
import '../../../utils/scss/pages/_cart'

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}


function Cart(props) {

    if (props.cart.length < 1) {
        return <main className="cart">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h2>Cart Is Empty</h2>
                </div>

            </div>
        </main>
    }
    else {

        return sort(props.cart).map(item => <div className="container-fluid cart" key={item.id}>

                
                        <div className="col-lg-12">
                            
                            <div className="row pt-2 justify-content-center d-flex flex-column flex-lg-row flex-md-row flex-sm-column flex-xs-column">
                                
                                <div><img width="75px p-4" src={item.itemImage}></img></div>
                                <div><h3 className="p-4">{item.itemName}</h3></div>
                                <div><h3 className="p-4">Item Quantity: {item.quantity}</h3></div>
                                <div><h3 className="p-4">Item Price: ${item.itemPrice}</h3></div>
                                <div><i className="fas fa-plus p-4" onClick={() => props.addToCart(item)}></i>
                                <i className="fas fa-minus p-4" onClick={() => props.removeFromCart(item)}></i></div>
                                <div className="p-2"><button
                                    className="btn button"
                                    onClick={() => props.removeAllFromCart(item)}>
                                    Clear Items
                                </button></div>
                                
                            </div>
                            <div>
                                <hr className="striped-border"></hr>
                            </div>
                            

                        </div>
                        

                    
                </div>












          
       




        )
    }
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







