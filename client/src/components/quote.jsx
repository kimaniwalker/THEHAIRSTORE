import React, { Fragment } from 'react'
import '../utils/scss/pages/_statement.scss';

const Quote = () => {


    return (
        <Fragment>
            <div className="statement container-fluid py-2 mb-4">
                <div className="row statementrow d-flex align-items-center justify-content-center">
                    <div className="container">
                       <div className="row justify-content-center">
                        <h3>Have a custom request ?</h3>
                    </div>
                    <div className="row justify-content-center py-2">
                        <h1 className="">Request A Quote</h1>
                    </div> 

                    <div className="row justify-content-center py-2">
                        <button className="btn2">Click Here</button>
                    </div> 

                    </div>
                    
                    
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Quote;