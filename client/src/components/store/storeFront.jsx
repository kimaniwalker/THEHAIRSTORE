import React, { Fragment } from 'react';
import '../../utils/scss/pages/_productStore';
import { Link } from 'react-router-dom';
import FeaturedProducts from './featuredProducts';
import GetHair from './products/hair';
import SalesPitch from '../salesPitch';
import Contact2 from '../screens/ContactUs/contact2';
import Footer from '../footer';
import VideoBanner from '../videoBanner';
import Header from '../header';
import AboutUsBanner from '../aboutUsBanner';

const ProductStore = () => {



    return (
        <Fragment>
            <main className="products">

                <div className="container-fluid">

                    <div className="row">



                        <div className="bannerImg">

                            <Header />

                        </div>

                    </div>


                    <div className="row">

                        <div id="sideMenuHair" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-primary">
                            <a href='/hair'><div className="row justify-content-center sideText">
                                <h2>Hair</h2>
                            </div>
                            </a>

                        </div>
                        <div id="sideMenuLashes" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-success">
                            <a href='/lashes'><div className="row justify-content-center sideText">
                                <h2>Lashes</h2>
                            </div>
                            </a>

                        </div>
                        <div id="sideMenuCosmetics" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-warning">
                            <a href='/cosmetics'>
                            <div className="row justify-content-center sideText">
                                <h2>Cosmetics</h2>
                            </div>
                            </a>
                        </div>
                    </div>



                    <div className="container-fluid">
                        <SalesPitch />
                    </div>

                    <div className="row">
                    <AboutUsBanner />
                    </div>


                    <div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <Contact2 />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <VideoBanner />
                            </div>

                        </div>
                    </div>

                    <Footer />

                </div>



            </main>




        </Fragment>
    )
}

export default ProductStore;

