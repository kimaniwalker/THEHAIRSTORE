import React, { useState, Fragment } from 'react';
import { sendContacEmail } from '../../../services/contact';
import { Redirect } from "react-router-dom";
import useReactRouter from 'use-react-router';
import { NotificationManager, NotificationContainer } from 'react-notifications';

import '../../../utils/scss/pages/_contact';



const { from } = { from: { pathname: "/" } };

const Contact2 = (props) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { history, location, match } = useReactRouter();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendContacEmail(name, email, message)
            .then(() => {
                NotificationManager.success('Submitted Successfully');
                setTimeout(() => {
                    setSubmitted(true);
                }, 1000);

            }).catch((err) => {
                NotificationManager.error(err);

                console.log(err);
            })
    }

    if (submitted) {
        return <Redirect to={from} />
    } else
        return (
            <Fragment>

                <main className="contact">
                    <NotificationContainer />
                    <div className="container-fluid">
                        <div className="row justify-content-center pt-4">
                            <i className="fab fa-wpforms fa-2x text-dark"></i>
                        </div>
                        <div className="row justify-content-center pt-3 pb-1">
                            <h1 className="text-dark">Contact Us</h1>
                        </div>

                        <div className="row justify-content-center pb-3">


                            <div className="col-xs-auto col-sm-8 col-md-8 col-lg-6 col-xl-6">

                                <form onSubmit={(e) => handleSubmit(e)}>

                                    <div className="row justify-content-center">
                                    
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-auto">
                                            <div className="form-group ">
                                                
                                                <input placeholder="Name" value={name} onChange={handleName} type="text" className="form-control bg-transparent" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-auto">
                                            <div className="form-group ">
                                                <input placeholder="Email" value={email} onChange={handleEmail} type="text" className="form-control bg-transparent" required />
                                            </div>
                                        </div>
                                    </div>
                                    
                                        <div className="form-group ">
                                            <textarea placeholder="Enter Message Here" value={message} onChange={handleMessage} rows="5" className="form-control bg-transparent "
                                                required></textarea>
                                        </div>
                                        <input type="submit" className="btn pb-2 bg-dark text-light" />
                                    






                                </form>

                            </div>
                        </div>
                    </div>
                </main>


            </Fragment>

        )
}

export default Contact2;
