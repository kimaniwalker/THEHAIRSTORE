import React from 'react';
import '../utils/scss/pages/_footer.scss';

const Footer = () => {

    return(
        <main className="Footer">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h3 className="text-primary">Site Developed By Key2Design</h3>
                </div>

                <div className="row justify-content-center pt-3">
                    <img src="../../images/footer/logo.png" width="120px"></img>
                </div>
                
                
            </div>
        </main>
    )
}

export default Footer;