// Note: Netlify functions run on the server side and can safely read your Stripe secret key from env vars.
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body || '{}');
    const amount = body.amount; // amount in cents
    if(!amount || amount <= 0) return { statusCode: 400, body: JSON.stringify({ error: 'Invalid amount' }) };

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret })
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};