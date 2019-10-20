import React from 'react'
import AddButton from './cart/addToCartBtn'
import RemoveButton from './cart/removeFromCartBtn'

export default function ProductListItem(props) {
  
    
    return <div>
        {props.product.id}
        {props.product.description}
        {props.product.name}
        {props.product.price}
        <AddButton 
        addToCart={props.addToCart}
        cartItem={props.cartItem} product={props.product} />

        <div>
            <h2>Total: {props.product.price *  (props.cartItem && props.cartItem.quantity) ||0}</h2>
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




}