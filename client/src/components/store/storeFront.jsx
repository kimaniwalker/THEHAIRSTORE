import React, { Fragment } from 'react';
import '../../utils/scss/pages/_productStore';
import { Link } from 'react-router-dom';
import Header from '../header';
import FeaturedProducts from './featuredProducts';
import GetHair from './products/hair';
import SalesPitch from '../salesPitch';
import Contact2 from '../screens/ContactUs/contact2';
import Footer from '../footer';
import VideoBanner from '../videoBanner';


const ProductStore = () => {

    return (
        <Fragment>
            <main className="products">

                <div className="container-fluid">

                    <div className="row">



                        <div className="bannerImg">



                        </div>

                    </div>



                    <div id="sideMenu" className="row">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-primary">
                            <h2>Test</h2>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-success">
                            <h2>Test</h2>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 bg-warning">
                            <h2>Test</h2>
                        </div>
                    </div>

                    
               <SalesPitch /> 

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

