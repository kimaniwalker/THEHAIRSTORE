import React from 'react';
import '../../utils/scss/pages/_productStore';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {

    return (
        <main className="products pb-3">
            <div className="container-fluid">

            <div className="row py-3 justify-content-center">
                        <h1>Featured Items</h1>
                        </div>

                <div className="row justify-content-center flex-wrap">

                    
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Lashes</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/lashes`}><img className="grow" height="150px" src="../../../images/home/lashes.png"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $10 - $50</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <a href='/lashes'><button className="btn2">View All</button></a>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Hair</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/store`}><img className="grow" height="150px" src="../../../images/home/BODYWAVE.jpg"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <a href='/store'><button className="btn2">View All</button></a>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Custom Wigs</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/hair`}><img className="grow" height="150px" width="150px" src="../../../images/home/wigs.png"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <a href='/hair'><button className="btn2">View All</button></a>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Beauty Products</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/cosmetics`}><img className="grow" height="150px" src="../../../images/home/soap.png"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $10 - $75</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <a href='/cosmetics'><button className="btn2">View All</button></a>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>



                </div>
            </div>



        </main>

    )
}

export default FeaturedProducts;

