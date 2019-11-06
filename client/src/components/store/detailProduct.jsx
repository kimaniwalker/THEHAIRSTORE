import React, {useState,useEffect} from 'react';
import useReactRouter from 'use-react-router';


const DetailProduct = () => {
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
    <div>
        <h1>{store.id}</h1>
    </div>
     
       
    )
}

export default DetailProduct;