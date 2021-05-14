import stripe from '../stripe';

export default async (req, res) => {
  try {
    const event = await stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    console.log(event.type.blue.bold);

    if (event.type === 'checkout.session.completed') {
      console.log(event.data.object);
      // evnet.data.object contains all the session created information.
      // store what you need in the database.
    }
    res.status(200).json({ event });
  } catch (error) {
    res.status(404).json({ error });
  }
};
