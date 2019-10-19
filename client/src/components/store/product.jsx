import React from 'react'


export default function Product(props) {
    return <div>
        <h3>{props.product.name}</h3>
        
        <div>{props.product.description}</div>
        <div>{props.product.price}</div>
        
    </div>
}