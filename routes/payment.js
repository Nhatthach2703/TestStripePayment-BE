const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.get('/get-publishable-key', (req, res) => {
    res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
  });

router.post('/create-payment-intent', async (req, res) => {
    const { amount, name, description } = req.body;

    try {
      // 1. Tạo customer
      const customer = await stripe.customers.create({
        name: name || 'Anonymous',
      });
  
      // 2. Tạo PaymentIntent gắn với customer
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        customer: customer.id,
        payment_method_types: ['card'],
        description: description || 'No description',
      });
  
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;
