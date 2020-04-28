import React, { useState, useEffect, Fragment } from 'react'
import '../utils/scss/pages/_homeBanner.scss';

const HomeBanner = () => {
    const [email, setEmail] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const handleSubmit = () => {

    }


    return (
        <Fragment>
            <main className="home">
            <div className="row justify-content-center d-flex align-self-baseline">
              <img className="scrollBar grow" src="../../../images/home/scroll.gif" height="100px"></img>  
                </div>    
           

            </main>

        </Fragment>
    )
}

export default HomeBanner