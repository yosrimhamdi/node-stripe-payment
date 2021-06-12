import stripe from '../stripe';

export default async (req, res) => {
  const { domain, params } = req;

  console.log(params.amount * 100);

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${domain}/payment/success`,
      cancel_url: `${domain}/payment/failed`,
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Stubborn Attachments',
              images: [
                `${domain}/assets/img/gallery/xpopular1.png.pagespeed.ic.V6f1NFO7gC.webp`,
              ],
            },
            unit_amount: Math.round(params.amount * 100),
          },
          quantity: 1,
          description: 'here is the product description',
        },
      ],
      customer_email: 'customer@example.com',
      metadata: {
        tourId: 'xxxxx',
        userId: 'xxxxx',
      },
    });

    res.json({ session });
  } catch (e) {
    console.log(e);
    res.status(400).json({ e });
  }
};
