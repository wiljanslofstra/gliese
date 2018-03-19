export default {
  // productClick(obj, cb) {
  //   dataLayer.push({
  //     event: 'productClick',
  //     ecommerce: {
  //       click: {
  //         actionField: { list: 'Product list' },
  //         products: [
  //           obj,
  //         ],
  //       },
  //     },
  //     eventCallback: typeof cb !== 'undefined' ? cb : () => {},
  //   });
  // },

  // addProduct(obj, cb) {
  //   dataLayer.push({
  //     event: 'addToCart',
  //     ecommerce: {
  //       add: {
  //         products: [
  //           obj,
  //         ],
  //       },
  //     },
  //     eventCallback: typeof cb !== 'undefined' ? cb : () => {},
  //   });
  // },

  // removeProduct(obj, cb) {
  //   dataLayer.push({
  //     event: 'removeFromCart',
  //     ecommerce: {
  //       remove: {
  //         products: [
  //           obj,
  //         ],
  //       },
  //     },
  //     eventCallback: typeof cb !== 'undefined' ? cb : () => {},
  //   });
  // },

  // checkoutOption(option, currentStep) {
  //   dataLayer.push({
  //     event: 'checkoutOption',
  //     ecommerce: {
  //       checkout_option: {
  //         actionField: {
  //           step: currentStep,
  //           option,
  //         },
  //       },
  //     },
  //   });
  // },

  event(category, action = '(not set)', label = '(not set)', value = '(not set)') {
    dataLayer.push({
      event: 'general_event',
      general_event_category: category,
      general_event_action: action,
      general_event_label: label,
      general_event_value: value,
    });
  },

  timing(naming, value) {
    dataLayer.push({
      event: 'timing',
      timing_name: naming,
      timing_value: value,
    });
  },
};
