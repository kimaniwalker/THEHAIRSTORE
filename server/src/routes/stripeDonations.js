import { Router } from 'express';
import { charge, retrieve, getCharges, getEvents, getWebHooks } from '../utils/stripeCharge'
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

// Fetch the Checkout Session to display the JSON result on the success page
router.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

router.post('/create-checkout-session', async (req, res) => {
  const { total, cart } = req.body;
  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [payment_intent_data] - lets capture the payment later
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    metadata: [cart],
    line_items: [
      {
        name: 'Rose Beauty Boutique',
        quantity: 1,
        currency: 'usd',
        amount: total * 100
         // Keep the amount on the server to prevent customers from manipulating on client
        
      },
    ],
    mode: 'payment',
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `http://localhost:3000/success/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cancel/?session_id={CHECKOUT_SESSION_ID}`,
  });

  console.log(session);

  res.send({
    sessionId: session.id,
  });
});


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