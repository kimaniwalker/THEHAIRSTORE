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
                <div id="carouselExampleControls" className="btnrow carousel slide align-items-center" data-ride="carousel" data-interval="4000" data-pause="false">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carousel-img" src="../../images/home/roseBG.jpg" alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="carousel-img" src="../../images/home/roseBG2.jpg" alt="Second slide"></img>
                        </div>


                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                        <div className="col-12">
                            <div className="container-fluid text">


                                <div className="row d-flex justify-content-center py-4 my-4 banner">

                                    <div className="py-4 my-4">

                                        <div className="row justify-content-center py-3">


                                            <span><h3 className="text-light">Be Your Own Kind Of Beautiful</h3></span>



                                        </div>
                                        <div className="row justify-content-center">


                                            <span><h3 className="text-light">A Smile Is The Best Makeup Any Girl Can Wear</h3></span>



                                        </div>

                                        <div className="py-4 row justify-content-center">

                                            <span className="py-2">
                                                <a href="/store"><button className="btn2 btn-success button  mx-1 ">Our Store</button></a>
                                                <a><button className="btn2 btn-primary button  mx-1">Portfolio</button></a>
                                                <a><button className="btn2 btn-danger button  mx-1">Our Story</button></a>

                                            </span>

                                        </div>

                                        <div className="pt-4 row justify-content-center">



                                            <span className="text-light">
                                                <h3>Subscribe To Our Email List Below</h3>

                                            </span>

                                        </div>

                                        <div className="row justify-content-center">



                                            <span className="py-4">
                                                <div className="input-group mb-3">
                                                    <input value={email} onChange={handleEmail} type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-dark" type="button">Subscribe</button>
                                                    </div>
                                                </div>

                                            </span>

                                        </div>




                                    </div>











                                </div>
                            </div>
                        </div>
                    </div>




                </div>












            </main>

        </Fragment>
    )
}

export default HomeBanner