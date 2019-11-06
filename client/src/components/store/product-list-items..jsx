import React, {useState} from 'react'
import AddButton from './cart/addToCartBtn'
import RemoveButton from './cart/removeFromCartBtn'
import {Link} from 'react-router-dom';


const ProductListItem = (props) => {


    const SeeDetails = () => {
        console.log('testing')
        

    }
    
    return <main>
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto">
                    
                    <div className="card">
                        <div className="py-3 text-center">
                            <h2> {props.product.itemName}</h2>
                        </div>
                        <div className="card-body">


                             <img height="150px" src={props.product.itemImage}></img>
                            

                            <div className="py-3">
                                <h2>Price: {props.product.itemPrice}</h2>
                                <AddButton
                                addToCart={props.addToCart}
                                cartItem={props.cartItem} product={props.product} />
                            </div>

                            {
                                props.cartItem
                                    ?
                                    <RemoveButton
                                        cartItem={props.cartItem}
                                        product={props.product}
                                        addToCart={props.addToCart}
                                        removeFromCart={props.removeFromCart}
                                    />
                                    :
                                    null
                            }


                        </div>
                        <div>
                            <Link to={`/products/${props.product.id}`}><button className="btn button" onClick={()=>SeeDetails()}> Details</button></Link>
                            
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </div>



    </main>




}

export default ProductListItem;