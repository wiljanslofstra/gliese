import $ from 'jquery';

const $nav = $('.header__navigation');
const $navList = $('.header__navigation > ul');
const $toggle = $('.header__toggle');
const $window = $(window);
const $body = $('body');

const OPEN_CLASS = 'is-opened';
const HAS_CHILDREN_CLASS = 'has-children';
const EXPANDED_CLASS = 'is-expanded';

const BREAKPOINT_LG = 992;
const ANIMATION_LENGTH = 300;
const HUNDRED = 100;

const navigation = {
  /**
   * Initialize the navigation
   */
  initialize() {
    this.menuOpen = false;
    this.currentLayer = 1;
    this.createEvents();

    if ($window.width() < BREAKPOINT_LG) {
      $nav.attr('aria-expanded', false);
    }
  },

  /**
   * Test if the device is 'small' or mobile
   * @return {Boolean} Is it a small/mobile device?
   */
  isSmallDevice() {
    return Modernizr.mq('(max-width: 991px)');
  },

  /**
   * Create events for the navigation
   * @return {Void}
   */
  createEvents() {
    $toggle.on('click', (e) => {
      e.preventDefault();

      if (this.menuOpen) {
        this.navClose();
      } else {
        this.navOpen();
      }

      this.menuOpen = !this.menuOpen;
    });

    if (Modernizr.touchevents || this.isSmallDevice()) {
      $('.navigation__item.has-children, .navigation-dropdown__item.has-children')
        .on('click', '> a', (e) => {
          e.preventDefault();

          const $clickedEl = $(e.currentTarget);

          // Toggle the opened class on the parent to make the dropdown visible
          $clickedEl.parent().toggleClass(OPEN_CLASS);

          // Recheck if we're still on a 'small' device before sliding the navigation
          if (this.isSmallDevice()) {
            const $dropdown = $clickedEl.next();
            const $dropdownItems = $dropdown.find('> li');

            this.currentLayer += 1;

            this.slideToLayer(this.currentLayer, $dropdownItems);
          }
        });

      $body.on('touchstart', (e) => {
        const $clickedTarget = $(e.target);
        const $headerParent = $clickedTarget.parents('.header');

        // Don't do anything if its a 'small' device, we don't want to hide the dropdown
        if (this.isSmallDevice() || $headerParent.length) {
          return true;
        }

        $(`.navigation__item.${OPEN_CLASS}`).removeClass(OPEN_CLASS);

        return true;
      });
    } else {
      $(`.navigation__item.${HAS_CHILDREN_CLASS}`).hover((e) => {
        $(e.currentTarget).addClass(OPEN_CLASS);
      }, (e) => {
        $(e.currentTarget).removeClass(OPEN_CLASS);
      });
    }

    $nav.on('click', '.js-back', (e) => {
      e.preventDefault();

      const $backEl = $(e.currentTarget);
      const $parentDropdown = $backEl.parents('.navigation-dropdown').eq(1);

      this.currentLayer -= 1;

      if ($parentDropdown.length) {
        this.slideToLayer(this.currentLayer, $parentDropdown.find('> li'));
      } else {
        this.slideToLayer(this.currentLayer);
      }

      setTimeout(() => {
        $backEl.parents(`.${HAS_CHILDREN_CLASS}`).first().removeClass(OPEN_CLASS);
      }, ANIMATION_LENGTH);
    });
  },

  navOpen() {
    this.currentLayer = 1;

    this.slideToLayer(this.currentLayer);

    $(`.${HAS_CHILDREN_CLASS}.${OPEN_CLASS}`).removeClass(OPEN_CLASS);

    $toggle.addClass(EXPANDED_CLASS);

    $nav.attr('aria-expanded', true);
  },

  navClose() {
    $nav.stop().animate({
      height: 0,
    });

    $toggle.removeClass(EXPANDED_CLASS);

    $nav.attr('aria-expanded', false);
  },

  slideToLayer(level, $dropdownItems) {
    const slideTo = (level - 1) * HUNDRED * -1;
    const transform = `translateX(${slideTo}%)`;

    $navList.css({
      webkitTransform: transform,
      msTransform: transform,
      transform,
    });

    let $items = $dropdownItems;

    if (typeof $dropdownItems === 'undefined') {
      $items = $nav.find('.navigation__item');
    }

    const height = $items.toArray().reduce((prev, item) => (
      prev + $(item).outerHeight()
    ), 0);

    $nav.animate({
      height,
    });
  },
};

export default navigation;
