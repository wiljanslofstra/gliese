const urlTelPattern = 'a[href^="tel:"]';
const urlMailPattern = 'a[href^="mailto:"]';

const tracking = {
  /**
   * Initialize custom tracking
   * @return {void}
   */
  initialize() {
    $(document).on('click', urlTelPattern, ({ currentTarget }) => {
      this.shootEvent('Phone', 'click', currentTarget.href);
    });

    $(document).on('click', urlMailPattern, ({ currentTarget }) => {
      this.shootEvent('E-mail', 'click', currentTarget.href);
    });

    $(document).on('click', 'a', ({ currentTarget }) => {
      if (
        currentTarget.href.indexOf(location.host) <= 0 &&
        currentTarget.href.match(/^http/i)
      ) {
        this.shootEvent('Outbound', 'click', currentTarget.href);
      }
    });
  },

  /**
   * Shoot event to Analytics
   * @param  {string} category - Category of the event
   * @param  {string} action - Action of the event (default: 'click')
   * @param  {string} label - Label of the event (default: '')
   * @param  {string} value - Value of the event (default: '')
   * @return {void}
   */
  shootEvent(category, action = 'click', label = '', value = '') {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: name,
        event_label: label,
        event_value: value,
      });
    }
  },
};

export default tracking;
