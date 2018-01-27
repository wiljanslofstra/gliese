export default {

  /** Pattern of WhatsApp elements */
  linkPattern: '[href*="whatsapp://"]',

  /**
   * Initialize the WhatsApp script
   * @return {Void}
   */
  initialize() {
    // Check for support
    this.recheck();
  },

  /**
   * Run check if WhatsApp is 'supported' and hide all icons if not
   * @return {Void}
   */
  recheck() {
    const isMobile = this.isMobile();

    if (!isMobile) {
      this.changeWhatsappUrls();
    }
  },

  /**
   * Check if a device is capable of running WhatsApp
   * @return {Boolean} Device could support WhatsApp
   */
  isMobile() {
    return navigator.userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  },

  /**
   * Hide all WhatsApp icons or links on the page
   * @return {[type]} [description]
   */
  changeWhatsappUrls() {
    // Get all WhatsApp links
    const whatsappLinks = $(this.linkPattern).toArray();

    // Iterate over all links and change them
    whatsappLinks.forEach((link) => {
      const url = link.getAttribute('href');

      link.setAttribute('href', url.replace('whatsapp://send', 'https://web.whatsapp.com/send'));
      link.setAttribute('target', '_blank');
    });
  },
};
