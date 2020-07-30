import React, {useState,useEffect, Fragment} from 'react';
import useReactRouter from 'use-react-router';
import AddButton from './cart/addToCartBtn'
import RemoveButton from './cart/removeFromCartBtn'
import '../../utils/scss/pages/_productDetails';
import { connect } from 'react-redux';


const DetailProduct = (props) => {
    const [store,setStore] = useState([]);
    const { history, location, match } = useReactRouter();
    
    useEffect(() => {
        fetchStore();

    }, []);

    const fetchStore = async() => {
        try {
            let res = await fetch('/api/products/'+ match.params.id);
            let data = await res.json();
            console.log(data);
            setStore(data);
        } catch (e) {
            console.log(e);
        }
    }
    

    return(
        <Fragment>

        
    <main className="productDetails pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 col-7-xl col-7-md col-12-sm col-12-xs">
                    <div className="row justify-content-center">
                      <img width="400px" className="grow" src={store.itemImage}></img>  
                    </div>
                
                </div>
                <div id="center" className="col-lg-3 col-xl-3 col-md-3">
                    <div id="center" className="row">
                       <h2>{store.itemName}</h2>
                    </div>
                    <div id="center" className="row py-3">
                       <img width="125px" src={store.itemImage}></img>
                    </div>

                    <div id="center" className="row py-2">
                       <h3>Product Description : {store.itemDescription}</h3>
                    </div>
                    
                    <div id="center" className="row py-2">
                       <h3>Product Category: {store.itemCategory}</h3>
                    </div>
                    <div id="center" className="row py-2">
                       <h3>Price: {store.itemPrice} $</h3>
                    </div>
                    
                    

                    
                    
                    
                </div>
            </div>
        </div>
    </main>

     </Fragment>
       
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);