
const GCM_ENDPOINT = 'https://android.googleapis.com/gcm/send';

let isPushEnabled = false;

const SUBSCRIBE_URL = '/docs/pages/push-notifications.php?sub';
const UNSUBSCRIBE_URL = '/docs/pages/push-notifications.php?unsub';

const PUSH_ERRORS = {
  NO_SUPPORT: 'Notifications aren\'t supported.',
  DISABLED: 'Sending notifications has been disabled.',
  PERMISSION_DENIED: 'Permission for Notifications was denied',
  UNABLE_TO_SUBSCRIBE: 'Unable to subscribe to push.',
  UNSUBSCRIBE_ERROR: 'Error thrown while unsubscribing from push messaging.',
  GET_SUBSCRIPTION_ERROR: 'Error during getSubscription()',
};

export default {
  initialize() {
    this.pushButton = document.querySelector('.js-push-button');
    this.data = $(this.pushButton).data();
    this.pushErrorsElement = document.getElementById(this.data.pushErrors);
    this.pushWrapperElement = document.getElementById(this.data.pushWrapper);
    this.enableText = this.data.pushSubscribe;
    this.disableText = this.data.pushSubscribed;

    this.initialiseState();

    this.pushButton.addEventListener('click', () => {
      if (isPushEnabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    });
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

  // Once the service worker is registered set the initial state
  initialiseState() {
    // Are Notifications supported in the service worker?
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
      this.showError(PUSH_ERRORS.NO_SUPPORT);
      this.hidePush();
      return;
    }

    // Check the current Notification permission.
    if (Notification.permission === 'denied') {
      this.showError(PUSH_ERRORS.DISABLED);
      return;
    }

    // Check if push messaging is supported
    if (!('PushManager' in window)) {
      this.showError(PUSH_ERRORS.NO_SUPPORT);
      this.hidePush();
      return;
    }

    // We need the service worker registration to check for a subscription
    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
      // Do we already have a push message subscription?
      serviceWorkerRegistration.pushManager.getSubscription()
        .then((subscription) => {
          this.setButtonDisabled(false);

          if (!subscription) {
            return;
          }

          // Keep your server in sync with the latest subscription
          this.sendSubscriptionToServer(subscription);

          // Set your UI to show they have subscribed for push messages
          this.setButtonText(this.disableText);

          isPushEnabled = true;
        })
        .catch(() => {
          this.showError(PUSH_ERRORS.GET_SUBSCRIPTION_ERROR);
        });
    });
  },

  subscribe() {
    this.setButtonDisabled(true);

    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true })
        .then((subscription) => {
          // The subscription was successful
          isPushEnabled = true;
          this.setButtonText(this.disableText);
          this.setButtonDisabled(false);

          return this.sendSubscriptionToServer(subscription);
        })
        .catch(() => {
          if (Notification.permission === 'denied') {
            this.showError(PUSH_ERRORS.PERMISSION_DENIED);
            this.setButtonDisabled(true);
          } else {
            // A problem occurred with the subscription, this can
            // often be down to an issue or lack of the gcm_sender_id
            // and / or gcm_user_visible_only
            this.showError(PUSH_ERRORS.UNABLE_TO_SUBSCRIBE);
            this.setButtonDisabled(false);
            this.setButtonText(this.enableText);
          }
        });
    });
  },

  unsubscribe() {
    this.setButtonDisabled(true);

    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
      // To unsubscribe from push messaging, you need get the
      // subcription object, which you can call unsubscribe() on.
      serviceWorkerRegistration.pushManager.getSubscription().then((pushSubscription) => {
        // Check we have a subscription to unsubscribe
        if (!pushSubscription) {
          // No subscription object, so set the state
          // to allow the user to subscribe to push
          isPushEnabled = false;
          this.setButtonDisabled(false);
          this.setButtonText(this.enableText);
          return;
        }

        this.sendToServer(pushSubscription.endpoint, UNSUBSCRIBE_URL);

        // We have a subcription, so call unsubscribe on it
        pushSubscription.unsubscribe().then(() => {
          this.setButtonDisabled(false);
          this.setButtonText(this.enableText);
          isPushEnabled = false;
        }).catch(() => {
          this.showError(PUSH_ERRORS.UNSUBSCRIBE_ERROR);
          this.setButtonDisabled(false);
        });
      }).catch(() => {
        this.showError(PUSH_ERRORS.UNSUBSCRIBE_ERROR);
      });
    });
  },

  sendSubscriptionToServer(subscription) {
    const mergedEndpoint = this.endpointWorkaround(subscription);

    this.sendToServer(mergedEndpoint, SUBSCRIBE_URL);
  },

  sendToServer(endpoint, url = SUBSCRIBE_URL) {
    const endpointSections = endpoint.split('/');
    const subscriptionId = endpointSections[endpointSections.length - 1];

    $.ajax({
      url,
      type: 'POST',
      data: {
        subscriptionId,
      },
    });
  },

  endpointWorkaround(pushSubscription) {
    // Make sure we only mess with GCM
    if (pushSubscription.endpoint.indexOf(GCM_ENDPOINT) !== 0) {
      return pushSubscription.endpoint;
    }

    let mergedEndpoint = pushSubscription.endpoint;

    // Chrome 42 + 43 will not have the subscriptionId attached
    // to the endpoint.
    if (pushSubscription.subscriptionId &&
      pushSubscription.endpoint.indexOf(pushSubscription.subscriptionId) === -1) {
      // Handle version 42 where you have separate subId and Endpoint
      mergedEndpoint = `${pushSubscription.endpoint}/${pushSubscription.subscriptionId}`;
    }

    return mergedEndpoint;
  },
};
