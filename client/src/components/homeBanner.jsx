import React, { Fragment } from 'react'
import '../utils/scss/pages/_homeBanner.scss';

const HomeBanner = () => {



    return (
        <Fragment>
            <main className="home container-fluid">
                <div className="btnrow d-flex align-items-center">
                    <div className="col-12">
                        <div className="container-fluid">


                            <div className="row justify-content-center py-4 my-4">

                                <div className="py-4 my-4">

                                    <div className="row justify-content-center py-3">


                                        <span><h3 className="text-light">Be Your Own Kind Of Beautiful</h3></span>



                                    </div>
                                    <div className="row justify-content-center">


                                        <span><h3 className="text-light">A Smile Is The Best Makeup Any Girl Can Wear</h3></span>



                                    </div>
                                    
                                    <div className="py-4 row justify-content-center">

                                        <span className="py-2">
                                            <button className="btn btn-success button  mx-1 ">Our Store</button>
                                            <button className="btn btn-primary button  mx-1">Portfolio</button>
                                            <button className="btn btn-danger button  mx-1">Our Story</button>
                                            
                                        </span>

                                    </div>




                                </div>











                            </div>
                        </div>
                    </div>

                </div>
                {/* <video autoPlay muted loop id="myVideo">
                    <source src="../../images/home/rosevideo.mp4" type="video/mp4"></source>
                </video>  */}
            </main>

        </Fragment>
    )
}

export default HomeBanner