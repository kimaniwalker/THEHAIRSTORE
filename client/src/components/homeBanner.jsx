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
    
                </div>    
           

            </main>

        </Fragment>
    )
}

export default HomeBanner