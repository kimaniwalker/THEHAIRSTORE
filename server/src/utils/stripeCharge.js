import stripeLoader from 'stripe';
import { config } from '../config';
const stripe = stripeLoader(config.STRIPE_SK);
// define secret key in config folder

function charge(token, amt, description, phone, email) {
  // returning a promise, so when we call .charge elsewhere, we will use await
  return stripe.charges.create({
    amount: amt * 100, //amount in cents
    currency: 'usd',
    source: token,
    description: description,
    metadata: { description: description, phone: phone, email: email }


  });
};

/*Create
Session  */
function createSession(name, description, amount, quantity, 
  success_url, cancel_url) {

  return stripe.checkout.sessions.create({
    
    success_url: success_url,
    cancel_url: cancel_url,
    line_items: {name: name,
    payment_method_types: 'card',
    description: description,
    amount: amount * 100,
    quantity: quantity}


  })

}

/* RETRIEVE STRIPE BALANCE */
function retrieve(err, balance) {
  // returning a promise, so when we call .retrieveBalance elsewhere, we will use await
  return stripe.balance
    .retrieve({
      api_key: config.STRIPE_SK,
    })
    .then((balance) => {
      // The balance object for the connected account
      let balanceObject = balance;
      console.log('here', balanceObject);
      return balance;
    })
    .catch((err) => {
      // Error
      console.log(err);
    });
};

/* RETRIEVE CHARGES */
function getCharges(err, charges) {
  return stripe.charges.list({ limit: 3, api_key: config.STRIPE_SK, })
    .then((charges) => {
      let chargeObject = charges;
      console.log('here', chargeObject)
      return charges
    })
    .catch((err) => {
      console.log(err)
    })

};

/* RETRIEVE EVENTS */
function getEvents(err, events) {
  return stripe.events.list({ limit: 3, api_key: config.STRIPE_SK, })
    .then((events) => {
      let eventObject = events;
      console.log('here', eventObject)
      return events
    })
    .catch((err) => {
      console.log(err)
    })

};

/* RETRIEVE WEBHOOKS */
function getWebHooks(err, webhooks) {
  return stripe.webhookEndpoints.list({ limit: 3, api_key: config.STRIPE_SK, })
    .then((webhooks) => {
      let webhookObject = webhooks;
      console.log('here', webhookObject)
      return webhooks
    })
    .catch((err) => {
      console.log(err)
    })

};








export { charge, retrieve, getCharges, getEvents, getWebHooks, createSession };