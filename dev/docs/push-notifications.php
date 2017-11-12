<?php include(__DIR__ . '/../../templates/header.php'); ?>

<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
<script>
    var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
        appId: "3e10c3c9-acf9-41c4-a869-e42b84c20336",
        autoRegister: false,
        allowLocalhostAsSecureOrigin: true,
        welcomeNotification: {
            disable: true,
            title: '',
            message: '',
        },
        safari_web_id: 'web.onesignal.auto.2e77cfdc-f6e8-4572-82d4-363b6713f2bc',
    }]);
</script>

<div class="u-p2 u-md-p3">
    <div class="st-explanation">
        <h1>Push notifications</h1>
    </div>

    <div id="push-wrapper">
        <button
            class="js-push-button"
            data-push-subscribed="Unsubscribe"
            data-push-subscribe="Subscribe"
            data-push-wrapper="#push-wrapper"
            data-push-errors="#push-errors"
        >
            Subscribe
        </button>

        <div id="push-errors">
        </div>
    </div>
</div>

<?php include(__DIR__ . '/../../templates/footer.php'); ?>
