/* global OneSignal, ga */

let isPushEnabled = false;

const PUSH_ERRORS = {
  PERMISSION_DENIED: 'Permission for Notifications was denied',
};

export default {
  initialize() {
    this.pushButton = document.querySelector('.js-push-button');

    if (!this.pushButton) {
      return;
    }

    this.data = $(this.pushButton).data();
    this.pushErrorsElement = document.getElementById(this.data.pushErrors);
    this.pushWrapperElement = document.getElementById(this.data.pushWrapper);
    this.enableText = this.data.pushSubscribe;
    this.disableText = this.data.pushSubscribed;

    if (typeof OneSignal === 'undefined') {
      this.hidePush();
      return;
    }

    this.initialiseState();
  },

  showError(err) {
    document.getElementById('push-errors').textContent = err;
  },

  hidePush() {
    const el = document.getElementById('push-wrapper');
    const parent = el.parentNode;
    parent.removeChild(el);
  },

  setButtonDisabled(state = true) {
    this.pushButton.disabled = state;
  },

  setButtonText(txt) {
    this.pushButton.textContent = txt;
  },

  sendEvent(category, val) {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', 'OneSignal', category, val);
    }
  },

  initialiseState() {
    OneSignal.push(() => {
      // If we're on an unsupported browser, hide the widget
      if (!OneSignal.isPushNotificationsSupported()) {
        this.hidePush();
        return;
      }

      OneSignal.getNotificationPermission((permission) => {
        const isDenied = (permission === 'denied');

        this.showError((isDenied) ? PUSH_ERRORS.PERMISSION_DENIED : '');
        this.setButtonDisabled(isDenied);
      });

      OneSignal.isPushNotificationsEnabled((isEnabled) => {
        this.setButtonText((isEnabled) ? this.disableText : this.enableText);
        isPushEnabled = isEnabled;
      });

      this.pushButton.addEventListener('click', () => {
        this[(isPushEnabled) ? 'unsubscribe' : 'subscribe']();
      });
    });
  },

  subscribe() {
    // First ask for permission, if already granted this will do nothing
    OneSignal.push(['registerForPushNotifications']);

    // Change the button state to subscribed
    this.setButtonText(this.disableText);

    // Save the state of notifications
    isPushEnabled = true;

    // This will force the subscription status when switching notifications
    // on and off
    OneSignal.push(['setSubscription', true]);

    this.sendEvent('subscription change', 'enable');
  },

  unsubscribe() {
    // Unsubscribe the user from OneSignal
    OneSignal.push(['setSubscription', false]);

    // Set the button back to its initial state
    this.setButtonText(this.enableText);

    // Save the state of notifications
    isPushEnabled = false;

    this.sendEvent('subscription change', 'disable');
  },
};
