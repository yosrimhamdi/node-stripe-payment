import stripe from '../stripe';
import Purchase from '../models/Purchase';

export default async (req, res) => {
  try {
    const event = await stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    if (event.type === 'checkout.session.completed') {
      const { metadata, amount_total } = event.data.object;

      await Purchase.create({
        user: metadata.userId,
        tour: metadata.tourId,
        price: amount_total / 100,
      });
    }
    res.send();
  } catch (error) {
    res.status(404).send();
  }
};
