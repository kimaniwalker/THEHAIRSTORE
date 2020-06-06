import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_welcome.scss';
import Header from './header';
import { Link } from 'react-router-dom';
import data from '../components/store/data.json'
import ProductListing from './store/product-Listing';
import HomeBanner from './homeBanner';
import Statement from './statement';
import Footer from './footer';
import Contact2 from './screens/ContactUs/contact2';
import ProductStore from './store/storeFront';
import Quote from './quote';
import PortfolioScreen from './screens/Portfolio/portfolio';
import FeaturedProducts from './store/featuredProducts';





class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <div className="welcome">
          <Header />
          <HomeBanner />
          <div>
          </div>
        </div>
        <div>


        <div className="container products-container">
            <FeaturedProducts />

          </div>
          
          <div className="container products-container">
            
<h2>#ROSEBEAUTYBOUTIQUE</h2>
          </div>
          

          {/* <div className="container products-container">
            <ProductListing products={data.products} />

          </div>
 */}
          <div>
            <Footer />
          </div>
            
          
        </div>
      </Fragment>

    )
  }


}

export default Welcome;