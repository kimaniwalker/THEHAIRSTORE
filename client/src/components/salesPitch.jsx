import React from 'react';
import { Link } from 'react-router-dom';
import '../utils/scss/pages/_productStore';

const SalesPitch = () => {

    return (
        <main className="products">


                <div id="sideMenu" className="row align-items-center justify-content-center d-flex flex-wrap">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">


                        <div className="row pt-2 pb-2 justify-content-center">
                            <span><Link to="/store"><i className="far fa-clock fa-2x  grow p-3"></i></Link></span>
                        </div>

                        <div className="row justify-content-center">
                            <h3 className="justify-content-center">Quick Response Time</h3>
                        </div>

                        <div className="row justify-content-center p-4">
                            <h3 className="p-4">Have Any Questions Or Concerns ? Please feel free to reach out to our hotline. If we do not pickup , we will follow up within 24HRS</h3>
                        </div>


                    </div>
                    <div id="" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">

                        <div className="row pt-2 pb-2 justify-content-center">
                            <span><Link to="/store"><i className="fas fa-store fa-2x  grow p-3"></i></Link></span>
                        </div>

                        <div className="row justify-content-center">
                            <h3 className="justify-content-center">Great Products</h3>
                        </div>

                        <div className="row justify-content-center p-4">
                            <h3 className="p-4">Have Any Questions Or Concerns ? Please feel free to reach out to our hotline. If we do not pickup , we will follow up within 24HRS</h3>
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">


                        <div className="row pt-2 pb-2 justify-content-center">
                            <span><Link to="/store"><i className="fab fa-expeditedssl fa-2x  grow p-3"></i></Link></span>
                        </div>

                        <div className="row justify-content-center">
                            <h3 className="justify-content-center">Site Secure</h3>
                        </div>


                        <div className="row justify-content-center p-4">
                            <h3 className="p-4">We do not handle any credit / debit card information. We let Stripe do all of the heavy lifting. Our site is secured through SSL. </h3>
                        </div>

                    </div>
                </div>

        </main>
    )

}

export default SalesPitch;


