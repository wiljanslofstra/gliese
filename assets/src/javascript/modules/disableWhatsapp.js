
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
    const supported = this.checkWhatsappSupport();

    if (!supported) {
      this.hideWhatsappIcons();
    }
  },

  /**
   * Check if a device is capable of running WhatsApp
   * @return {Boolean} Device could support WhatsApp
   */
  checkWhatsappSupport() {
    return navigator.userAgent.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  },

  /**
   * Hide all WhatsApp icons or links on the page
   * @return {[type]} [description]
   */
  hideWhatsappIcons() {
    // Get all WhatsApp links
    let whatsappLinks = document.querySelectorAll(this.linkPattern);

    // Transform into a array instead of a NodeList
    whatsappLinks = Array.prototype.slice.call(whatsappLinks);

    // Iterate over all links and hide all
    whatsappLinks.forEach((link) => {
      const linkInst = link;
      linkInst.style.display = 'none';
      linkInst.setAttribute('aria-hidden', true);
    });
  },
};
