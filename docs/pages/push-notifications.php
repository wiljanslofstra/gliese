<?php include('../templates/_header.php'); ?>

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

<?php include('../templates/_footer.php'); ?>
