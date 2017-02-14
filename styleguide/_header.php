<?php include(__DIR__ . '/../system/config.php'); ?>
<?php include(__DIR__ . '/../system/common_functions.php'); ?>
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

    <link rel="stylesheet" href="/styleguide/styleguide.css">
    <link rel="stylesheet" href="<?= ASSET_BUILD_PATH; ?>/main.css">
</head>

<body>
    <?php include('../assets/images/icons/symbol-defs.svg'); ?>
