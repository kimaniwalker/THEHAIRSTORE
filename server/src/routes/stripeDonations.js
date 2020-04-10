import { Router } from 'express';
import { charge, retrieve, getCharges, getEvents, getWebHooks, createSession } from '../utils/stripeCharge'
import stripeLoader from 'stripe';
import { config } from '../config';
require('isomorphic-fetch');
const stripe = stripeLoader(config.STRIPE_SK);
import logger from '../middleware/winston';




let router = Router();

router.use(function (req, res, next) {
  logger.debug('Sent From: ' + req.ip +
    'Request Type: ' + req.method +
    'API URL: ' + req.baseUrl +
    'Host Name: ' +
    'Request Object: ' + JSON.stringify(req.body));
  next();
});

/* CREATE CHARGE */
router.post('/', async (req, res) => {

  let tokenId = req.body.token.id;
  let amount = req.body.token.amount;
  let description = req.body.token.description;
  let phone = req.body.token.phone;
  let email = req.body.token.email;


  try {
    let chargeResponse = await charge(tokenId, amount, description, phone, email);
    res.send(chargeResponse);
    logger.info(res.statusCode + ' Response from Stripe ');
    console.log(chargeResponse);
    console.log(chargeResponse.id);
    console.log(chargeResponse.object);
    console.log(chargeResponse.amount)


    let object = {
      chargeid: chargeResponse.id,
      type: chargeResponse.object,
      amount: chargeResponse.amount,
      name: chargeResponse.source.name,
      phone: chargeResponse.metadata.phone,
      email: chargeResponse.metadata.email,
      description: chargeResponse.description
    };

    console.log(object);
    console.log('here');

    await fetch('http://www.localhost:3000/api/stripecharges', {
      method: "POST",
      body: JSON.stringify(object),
      headers: new Headers({ "Content-Type": "application/json" })
    });


  } catch (err) {

    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
    console.log(err);
    res.sendStatus(500);
  }


});

router.post('/session', async (req, res) => {


  let name = req.body.name
  let description = req.body.description
  let amount = req.body.amount
  let quantity = req.body.quantity
  let success_url = req.body.success_url
  let cancel_url = req.body.cancel_url


  try {
    let sessionResponse = await createSession(name, description, amount, 
      quantity, success_url, cancel_url);
    res.send(sessionResponse);
  } catch (e) {
    console.log(e)
  }
})

/* STRIPE CONNECT USER POST */
router.post('/striperegister', async (req, res) => {
  console.log('on the backend yo');
  let object = {
    stripe_code: req.body.stripe_code,
    grant_type: req.body.grant_type
  };

  console.log(object);

  fetch("https://connect.stripe.com/oauth/token?client_secret="
    + `${config.STRIPE_SK}` + "&code=" + `${req.body.stripe_code}` + "&grant_type=" + `${req.body.grant_type}`, {
    method: "POST",
    body: JSON.stringify(object),
    headers: new Headers({ "Content-Type": "application/json" })
  })
    .then(res => res.json())
    .then(response => {
      res.json(response);
      console.log(JSON.stringify(response));
    })
    .catch(err => console.log(err));

});


router.get('/balance', async (req, res) => {
  try {
    let balance = await retrieve();
    res.json({ balance });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/charges', async (req, res) => {
  try {
    let charges = await getCharges();
    res.json({ charges });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/events', async (req, res) => {
  try {
    let events = await getEvents();
    res.json({ events });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/webhooks', async (req, res) => {
  try {
    let webhooks = await getWebHooks();
    res.json({ webhooks });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});






export default router;