import React, {useState,useEffect} from 'react'
import ProductListItem from './product-list-items.'
import { connect } from 'react-redux';




const ProductLashes = (props) => {
    const [store,setStore] = useState([]);
    
    useEffect(() => {
        fetchStore();

    }, []);

    const fetchStore = async() => {
        try {
            let res = await fetch('/api/products/lashes');
            let data = await res.json();
            console.log(data);
            setStore(data);
        } catch (e) {
            console.log(e);
        }
    }
    
    
    
    return <div>
        <div className="container-fluid pb-4">
            <div className="row">
            <div className="col-auto d-flex flex-wrap">

            
            

        
        {
            store.map( product => 
                <ProductListItem product={product}
                 key={product.id}
                 addToCart={props.addToCart} 
                 removeFromCart={props.removeFromCart}
                 cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                 
                 />
                 
                 )
        }
    </div>
    </div>
    
    </div>

    
    </div>
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLashes);