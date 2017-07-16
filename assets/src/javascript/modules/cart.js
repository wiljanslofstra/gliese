import formatPrice from '../helpers/formatPrice';

const $cart = $('.js-cart');

const CART_ROW_REMOVE = '.js-cart-remove';
const CART_ROW = '.js-cart-row';
const CART_ROW_PRICE = '.js-cart-row-price';
const CART_AMOUNT = '.js-cart-amount';
const CART_TOTAL_EX = '.js-cart-total-ex';
const CART_TOTAL = '.js-cart-total';
const CART_VAT = '.js-cart-vat';
const CART_DELIVERY = '.js-cart-delivery';

const HUNDRED = 100;

const cart = {
  initialize() {
    if ($cart.length) {
      this.data = $cart.data();
      this.vat = parseInt(this.data.cartVat, 10) / HUNDRED;
      this.delivery = parseFloat(this.data.cartDelivery);

      this.createEvents();
    }
  },

  createEvents() {
    $cart.on('click', CART_ROW_REMOVE, (e) => {
      e.preventDefault();

      const $el = $(e.currentTarget);
      const $row = $el.parents(CART_ROW);
      const id = $row.data('product-id');

      $row.remove();

      this.changeProductAmount(id, 0);
      this.recalculateAmounts();
    });

    $cart.on('change', CART_AMOUNT, (e) => {
      const $el = $(e.currentTarget);
      const $row = $el.parents(CART_ROW);
      const id = $row.data('product-id');

      this.changeProductAmount(id, $el.val());
      this.recalculateAmounts();
    });

    $cart.on('blur', CART_AMOUNT, (e) => {
      const $el = $(e.currentTarget);
      let val = parseInt($el.val(), 10);
      const min = parseInt($el.data('min'), 10);
      const max = parseInt($el.data('max'), 10);
      let shouldUpdateVal = false;

      if (val < min) {
        val = min;
        shouldUpdateVal = true;
      }

      if (val > max) {
        val = max;
        shouldUpdateVal = true;
      }

      if (shouldUpdateVal) {
        $el.val(val).trigger('change');
      }
    });
  },

  changeProductAmount(id, amount) {
    if (typeof this.data.cartApi === 'undefined' || this.data.cartApi === '') {
      return;
    }

    $.ajax({
      url: this.data.cartApi,
      type: this.data.cartApiMethod,
      data: {
        product_id: id,
        amount,
      },
    });
  },

  recalculateAmounts() {
    let total = 0;

    $cart.find(CART_ROW).toArray().forEach((row) => {
      const $row = $(row);
      const price = parseFloat($row.data('price'));
      const amount = parseInt($row.find(CART_AMOUNT).val(), 10);

      const productPrice = price * amount;

      total += productPrice;

      $row.find(CART_ROW_PRICE).html(formatPrice(productPrice));
    });

    const vat = total * this.vat;
    const totalExVAT = total - vat;
    const totalWithDelivery = total + this.delivery;

    this.updateUI({
      vat,
      totalExVAT,
      totalWithDelivery,
    });
  },

  updateUI({ vat, totalExVAT, totalWithDelivery }) {
    $cart.find(CART_VAT).html(formatPrice(vat));
    $cart.find(CART_TOTAL_EX).html(formatPrice(totalExVAT));
    $cart.find(CART_TOTAL).html(formatPrice(totalWithDelivery));
    $cart.find(CART_DELIVERY).html(formatPrice(this.delivery));
  },
};

export default cart;
