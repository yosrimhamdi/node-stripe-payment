import stripe from '../stripe';
import Purchase from '../models/Purchase';

export default async (req, res) => {
  try {
    const event = await stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    console.log(event.type.blue.bold);

    if (event.type === 'checkout.session.completed') {
      const { metadata, amount_total } = event.data.object;

      await Purchase.create({
        user: metadata.userId,
        tour: metadata.tourId,
        price: amount_total / 100,
      });

      console.log(event.data.object);
      // event.data.object contains all the session created information.
      // store what you need in the database.
    }
    res.status(200).json({ event });
  } catch (error) {
    res.status(404).json({ error });
  }
};
