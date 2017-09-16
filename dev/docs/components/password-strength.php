<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Password strength</h1>

    <pre><code><?php echo htmlentities('
<div class="js-password">
    <input class="js-password-input" type="password">
    <div class="js-password-meter" data-warning-text="This password is one of the ten most frequently used"></div>
</div>
    '); ?></code></pre>
</div>

<div class="u-mb3">
    <div class="js-password">
        <input class="js-password-input" type="password">
        <div class="js-password-meter" data-warning-text="This password is one of the ten most frequently used"></div>
    </div>
</div>

<?php include('../templates/_footer.php'); ?>
