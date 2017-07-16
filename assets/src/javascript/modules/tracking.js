import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
// import 'autotrack/lib/plugins/impression-tracker';
// import 'autotrack/lib/plugins/media-query-tracker';

const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

const phoneNumbersArr = Array.prototype.slice.call(phoneNumbers);
const emailLinksArr = Array.prototype.slice.call(emailLinks);

const tracking = {
  /**
   * Initialize custom tracking besides autotrack loaded above
   * @return {void}
   */
  initialize() {
    // Track phone numbers
    phoneNumbersArr.forEach((phoneNumber) => {
      this.trackElement(phoneNumber, 'Phone');
    });

    // Track e-mail links
    emailLinksArr.forEach((emailLink) => {
      this.trackElement(emailLink, 'E-mail');
    });
  },

  /**
   * Listen on elements for clicks
   * @param  {node} el            Element to listen for clicks
   * @param  {string} eventName   Name of the event to shoot in Analytics
   * @return {void}
   */
  trackElement(el, eventName) {
    el.addEventListener('click', () => {
      this.shootEvent(eventName);
    });
  },

  /**
   * Shoot event to Analytics
   * @param  {string} name - Name of the event to shoot in Analytics
   * @return {void}
   */
  shootEvent(name) {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', name, 'click');
    }
  },
};

export default tracking;
