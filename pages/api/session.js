import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51LJE6uKUhoLyGAKEm1dtSWh2dt8OMwaSkxLsADDauojAZpRQ8lwi1KcpnYwH3ZA2YXPV2bZofg2BhFvH1GkyxyXU002fb3qMdd',
);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(400).json({ error: 'METHOD NOT ALLOWED' });
  }
  const successUrl = 'http://localhost:3000/success';
  const cancelUrl = 'http://localhost:3000/canseled';

  const quantity = 1;
  const mode = 'payment';
  const priseId = 'price_1LJG4tKUhoLyGAKE1lOo7U6i';

  // const priseId = "price_1LJG6DKUhoLyGAKETUMJP93m";
  // const priseId = "price_1LJG75KUhoLyGAKETLbbYTSH";
  // const priseId = price_1LJG7sKUhoLyGAKEXHvUTxA4";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['cart'],
    mode: mode,
    line_items: [{ prise: priseId, quantity: quantity }],
    success_url: successUrl,
    cansel_url: cancelUrl,
  });

  console.log('session', session);
  response.status(200).json({ session: session });
}
