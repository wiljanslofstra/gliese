/* eslint-disable class-methods-use-this */

import { getPerformanceSupport, getPerformanceAPI } from '../helpers/checkPerformanceAPI';

import dataLayerHelper from '../helpers/dataLayer';

const urlTelPattern = 'a[href^="tel:"]';
const urlMailPattern = 'a[href^="mailto:"]';

export default class Tracking {
  constructor() {
    this.createEvents();
    this.trackLoadTime();
  }

  /**
   * Initialize custom tracking
   * @returns {void}
   */
  createEvents() {
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

    $(document).on('submit', 'form.js-track-form', (e) => {
      const $form = $(e.currentTarget);
      const $inputs = $form.find('input, select');
      const formName = typeof $form.data('name') !== 'undefined' ? $form.data('name') : 'Untitled';

      let inputs = $inputs.toArray().map((input) => {
        const type = input.getAttribute('type');
        if (typeof type !== 'undefined' && (type === 'radio' || type === 'checkbox')) {
          return input.checked ? input.getAttribute('name') : null;
        }

        return input.value;
      });

      inputs = inputs.filter(Boolean);

      dataLayerHelper.event('Form submit', `submit - ${formName}`, inputs.join(' - '));
    });
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
    dataLayerHelper.event(category, action, label, value);
  }

  /**
   * Track page load times if the user browser supports the performance API
   * @returns {void}
   */
  trackLoadTime() {
    if (!getPerformanceSupport()) {
      return;
    }

    // We have to wait a tick to be sure that loadEventEnd is set
    window.addEventListener('load', () => {
      requestIdleCallback(() => {
        const { timing } = getPerformanceAPI();

        dataLayerHelper.timing('Page load', timing.loadEventEnd - timing.fetchStart);
        dataLayerHelper.timing('DOM interactive', timing.domInteractive - timing.fetchStart);
      });
    });
  }
}
