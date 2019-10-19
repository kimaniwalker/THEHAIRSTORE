import React, { Component, Fragment } from 'react';
import '../utils/scss/pages/_welcome.scss';
import Header from './header';
import { Link } from 'react-router-dom';
import data from '../components/store/data.json'
import ProductListing from './store/product-Listing';




class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Fragment>
        <main className="welcome">
          <div>
            <Header />
            <Link to="/cart">
              <button>
                Cart
              </button>
            </Link>
            <div className="container-fluid">
              <ProductListing products={data.products}/>





            </div>
            </div>
        </main>
      </Fragment>

        )
      }
    
    
    }
    
export default Welcome;