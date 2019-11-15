import React, { Fragment } from 'react'
import '../utils/scss/pages/_statement.scss';

const Statement = (props) => {


    return (
        <Fragment>
            <div className="statement container-fluid py-2 mb-4">
                <div className="row statementrow d-flex align-items-center justify-content-center">
                    <h1 className="">{props.statement}</h1>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Statement;