const $accordion = $('.js-accordion');

const ACCORDION_TRIGGER = '.js-accordion-trigger';

const accordion = {
  initialize() {
    if ($accordion.length) {
      this.create();
    }
  },

  create() {
    $accordion.on('click', ACCORDION_TRIGGER, (e) => {
      e.preventDefault();
      const el = e.currentTarget;
      const bodyEl = this.getBodyEl(el);
      const isAlreadyOpen = (el.getAttribute('aria-expanded') === 'true');
      this.closeAll();

      if (!isAlreadyOpen) {
        el.setAttribute('aria-expanded', true);
        this.open(bodyEl);
      }
    });
  },

  open(bodyEl) {
    const innerEl = bodyEl.querySelector('.js-accordion-body-inner');
    const innerHeight = innerEl.offsetHeight;

    bodyEl.style.height = `${innerHeight}px`; // eslint-disable-line
  },

  close(bodyEl) {
    bodyEl.style.height = 0; // eslint-disable-line
  },

  closeAll() {
    $accordion.find(ACCORDION_TRIGGER).toArray().forEach((trigger) => {
      const bodyEl = this.getBodyEl(trigger);
      trigger.setAttribute('aria-expanded', false);
      this.close(bodyEl);
    });
  },

  getBodyEl(triggerEl) {
    const controls = triggerEl.getAttribute('aria-controls');
    return document.getElementById(controls);
  },
};

export default accordion;
