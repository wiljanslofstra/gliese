/* eslint-disable class-methods-use-this */

import checkPerformanceAPI from '../helpers/checkPerformanceAPI';

const urlTelPattern = 'a[href^="tel:"]';
const urlMailPattern = 'a[href^="mailto:"]';

export default class Tracking {
  constructor() {
    this.createEvents();
  }

  /**
   * Initialize custom tracking
   * @returns {void}
   */
  createEvents() {
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
        currentTarget.href.indexOf(window.location.host) <= 0 &&
        currentTarget.href.match(/^http/i)
      ) {
        this.shootEvent('Outbound', 'click', currentTarget.href);
      }
    });

    this.trackLoadTime();
  }

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
        event_category: category,
        event_label: label,
        value,
      });
    }
  }

  /**
   * Track page load times if the user browser supports the performance API
   * @returns {void}
   */
  trackLoadTime() {
    if (!checkPerformanceAPI()) {
      return;
    }

    // loadEventEnd is only available after page load
    window.onload = () => {
      // We have to wait a tick to be sure that loadEventEnd is set
      setTimeout(() => {
        const { timing } = performance;

        this.sendTimingEvent(timing.loadEventEnd - timing.fetchStart, 'Page load');
        this.sendTimingEvent(timing.domInteractive - timing.fetchStart, 'DOM interactive');
      }, 0);
    };
  }

  /**
   * Send timing event into gtag
   * @param {string} val Timing duration in ms
   * @param {string} label Label the timing event
   * @return {void}
   */
  sendTimingEvent(val, label) {
    gtag('event', 'timing_complete', {
      name: 'load',
      value: val,
      event_category: label,
    });
  }
}
