import React from 'react';
import '../../utils/scss/pages/_productStore';
import { Link } from 'react-router-dom';

const ProductStore = () => {

    return (
        <main className="products pt-4">
            <div className="container-fluid">
                <div className="row justify-content-center flex-wrap">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Straight</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/products/`}><img className="grow" height="150px" src="../../../images/home/STRAIGHT.jpg"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <button className="btn2">See More</button>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>Body Wave</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/products/`}><img className="grow" height="150px" src="../../../images/home/BODYWAVE.jpg"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <button className="btn2">See More</button>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>BODY WAVE FRONTAL</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/products/`}><img className="grow" height="150px" src="../../../images/home/BODYWAVEFRONTAL.jpg"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <button className="btn2">See More</button>
                                    </div>
                                </div>





                            </div>






                        </div>

                    </div>




                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">

                        <div className="card">


                            <div className="py-3 text-center">
                                <h2>BODY WAVE CLOSURE</h2>
                            </div>
                            <div className="card-body">

                                <div className="row justify-content-center">
                                    <Link to={`/products/`}><img className="grow" height="150px" src="../../../images/home/CLOSURE.PNG"></img></Link>

                                </div>



                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <h3>Price: $125 - $250</h3>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="py-3">
                                        <button className="btn2">See More</button>
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

export default ProductStore;

