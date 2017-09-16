<?php include(__DIR__ . '/../../../system/config.php'); ?>
<?php include(__DIR__ . '/../../../system/common_functions.php'); ?>
<!DOCTYPE html>
<!--[if lte IE 9]><html class="no-js ie9 " lang="nl"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="nl"><!--<![endif]-->
<head>
    <meta charset="utf-8">

    <title>Styleguide - Gliese</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript">
        document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

        var BASE = '<?= BASE_URL; ?>';
        var WEBPACK_PATH = '<?= ASSET_BUILD_PATH; ?>/javascript/';
    </script>

    <link rel="manifest" href="<?= BASE_URL; ?>/manifest.json">

    <link rel="stylesheet" href="/dev/docs/styleguide.css">
    <link rel="stylesheet" href="<?= ASSET_BUILD_PATH; ?>/css/<?= getRevedFile('main.css'); ?>">
</head>

<body>
    <?php
        $sprite = file_get_contents(__DIR__ . '/../../../assets/dist/icons/symbol/svg/sprite.symbol.svg');
        echo $sprite;
    ?>

    <div class="st-sidebar">
        <a class="st-sidebar__link" href="/dev/docs/components/base-styles.php">
            Base styles
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/buttons.php">
            Buttons
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/forms.php">
            Forms
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/custom-components.php">
            Custom components
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/map.php">
            Map
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/autocomplete.php">
            Autocomplete
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/slider.php">
            Slider
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/filter">
            Filter
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/icons.php">
            Icons
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/cms-content.php">
            CMS content
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/cart.php">
            Cart
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/video.php">
            Video
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/accordion.php">
            Accordion
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/upload-field.php">
            Upload field
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/password-strength.php">
            Password strength
        </a>

        <a class="st-sidebar__link" href="/dev/docs/components/push-notifications.php">
            Push notifications
        </a>
    </div>

    <div class="st-content">
