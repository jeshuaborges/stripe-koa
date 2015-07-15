Stripe.setPublishableKey('pk_test_HFzUQAtUKpiiTLRQwclLJc4E');

function stripeResponseHandler(status, response) {
  var $form = $('#payment-form');

  if (response.error) {
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    var token = response.id;
    console.warn(response);
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));
    $form.get(0).submit();
  }
};

$(document).on('submit', '#payment-form', function(event) {
  var $form = $(this);

  $form.find('button').prop('disabled', true);

  Stripe.card.createToken($form, stripeResponseHandler);

  return false;
});
