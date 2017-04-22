<?php include(__DIR__ . '/../../system/config.php'); ?>
<?php include(__DIR__ . '/../../system/common_functions.php'); ?>
<!DOCTYPE html>
<!--[if lte IE 9]><html class="no-js ie9 " lang="nl"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="nl"><!--<![endif]-->
<head>
    <meta charset="utf-8">

    <title>Styleguide - Gliese</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="text/javascript">
        document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

        var BASE = '<?= BASE_PATH; ?>';
        var WEBPACK_PATH = '<?= ASSET_BUILD_PATH; ?>/';
    </script>

    <link rel="stylesheet" href="/docs/styleguide.css">
    <link rel="stylesheet" href="<?= ASSET_BUILD_PATH; ?>/main.css">
</head>

<body>
    <?php include(__DIR__ . '/../../assets/images/icons/symbol-defs.svg'); ?>

    <div class="st-sidebar">
        <a class="st-sidebar__link" href="/docs/pages/base-styles.php">
            Base styles
        </a>

        <a class="st-sidebar__link" href="/docs/pages/buttons.php">
            Buttons
        </a>

        <a class="st-sidebar__link" href="/docs/pages/forms.php">
            Forms
        </a>

        <a class="st-sidebar__link" href="/docs/pages/custom-components.php">
            Custom components
        </a>

        <a class="st-sidebar__link" href="/docs/pages/map.php">
            Map
        </a>

        <a class="st-sidebar__link" href="/docs/pages/autocomplete.php">
            Autocomplete
        </a>

        <a class="st-sidebar__link" href="/docs/pages/filter">
            Filter
        </a>

        <a class="st-sidebar__link" href="/docs/pages/icons.php">
            Icons
        </a>

        <a class="st-sidebar__link" href="/docs/pages/cms-content.php">
            CMS content
        </a>

        <a class="st-sidebar__link" href="/docs/tools/form-generator.php">
            Form generator
        </a>
    </div>

    <div class="st-content">
