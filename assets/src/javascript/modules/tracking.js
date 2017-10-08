const urlTelPattern = 'a[href^="tel:"]';
const urlMailPattern = 'a[href^="mailto:"]';

const tracking = {
  /**
   * Initialize custom tracking
   * @returns {void}
   */
  initialize() {
    if (typeof gtag === 'undefined') {
      return;
    }

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

    this.trackLoadTime();
  },

  /**
   * Shoot event to Analytics
   * @param  {string} category - Category of the event
   * @param  {string} action - Action of the event (default: 'click')
   * @param  {string} label - Label of the event (default: '')
   * @param  {string} value - Value of the event (default: '')
   * @returns {void}
   */
  shootEvent(category, action = 'click', label = '', value = '') {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: name,
        event_label: label,
        value,
      });
    }
  },

  /**
   * Track page load times if the user browser supports the performance API
   * @returns {void}
   */
  trackLoadTime() {
    const performance = (
      window.performance ||
      window.webkitPerformance ||
      window.msPerformance ||
      window.mozPerformance
    );

    if (typeof performance === 'undefined' && typeof performance.timing !== 'undefined') {
      return;
    }

    // loadEventEnd is only available after page load
    window.onload = () => {
      // We have to wait a tick to be sure that loadEventEnd is set
      setTimeout(() => {
        const { timing } = performance;

        gtag('event', 'timing_complete', {
          name: 'load',
          value: timing.loadEventEnd - timing.fetchStart,
          event_category: 'Page load',
        });

        gtag('event', 'timing_complete', {
          name: 'load',
          value: timing.domInteractive - timing.fetchStart,
          event_category: 'DOM interactive',
        });
      }, 0);
    };
  },
};

export default tracking;
