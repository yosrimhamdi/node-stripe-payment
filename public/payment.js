const stripe = window.Stripe(
  'pk_test_51Iqe5gKXP75EVBOO0DVTBM0oPOOtd6WxQvNK7UrkeMxFC0aNVrRAXEYs9zL6YZBajIUyC32jSDQ3jrgO27QFjdIZ00TeAF3ZJQ',
);

document.querySelector('button').addEventListener('click', async () => {
  try {
    let response = await fetch('/payment/session', {
      method: 'POST',
    });

    response = await response.json();

    stripe.redirectToCheckout({ sessionId: response.session.id });
  } catch (e) {
    console.log(e);
  }
});
