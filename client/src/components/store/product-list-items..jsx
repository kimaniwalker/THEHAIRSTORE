import React, { useState } from 'react'
import AddButton from './cart/addToCartBtn'
import RemoveButton from './cart/removeFromCartBtn'
import { Link } from 'react-router-dom';
import '../../utils/scss/pages/_products';


const ProductListItem = (props) => {


    const SeeDetails = () => {
        console.log('testing')


    }

    return <main className="products pt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto">

                    <div className="card">


                        <div className="py-3 text-center">
                            <h3> {props.product.itemName}</h3>
                        </div>
                        <div className="card-body">

                            <div className="row justify-content-center">
                                <Link to={`/products/${props.product.id}`}><img className="grow" height="150px" src={props.product.itemImage}></img></Link>

                            </div>



                            <div className="row justify-content-center">
                                <div className="py-3">
                                    <h3>Price: {props.product.itemPrice}</h3>
                                </div>
                            </div>


                            <AddButton
                                addToCart={props.addToCart}
                                cartItem={props.cartItem} product={props.product} />

                            {
                                props.cartItem
                                    ?
                                    <div className="row justify-content-center">
                                        <RemoveButton
                                            cartItem={props.cartItem}
                                            product={props.product}
                                            addToCart={props.addToCart}
                                            removeFromCart={props.removeFromCart}
                                        />
                                    </div>

                                    :
                                    null
                            }


                        </div>






                    </div>

                </div>
            </div>
        </div>



    </main>




}

export default ProductListItem;