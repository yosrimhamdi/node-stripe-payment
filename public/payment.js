const stripe = window.Stripe(
  'pk_test_51Iqe5gKXP75EVBOO0DVTBM0oPOOtd6WxQvNK7UrkeMxFC0aNVrRAXEYs9zL6YZBajIUyC32jSDQ3jrgO27QFjdIZ00TeAF3ZJQ',
);

const pay = async e => {
  let response = await fetch(`/payment/session/${e.target.dataset.amount}`, {
    method: 'POST',
  });

  response = await response.json();

  stripe.redirectToCheckout({ sessionId: response.session.id });
};

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', pay));
