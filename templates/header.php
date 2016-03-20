<?php include(__DIR__ . '/../system/config.php'); ?>
<?php
    $meta_title = 'Gliese';
    $meta_desc = 'Front-end starter kit';
    $meta_sitename = 'Gliese';
    $meta_img = ASSET_PATH . '/icons/apple-touch-icon.png';
    $meta_url = '/';
    $meta_twitter = '@wiljanslofstra';
?>
<!DOCTYPE html>
<!--[if lte IE 9]><html class="no-js ie9 "> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"><!--<![endif]-->
<head>
    <meta charset="utf-8">

    <title><?= $meta_title; ?></title>

    <meta name="author" content="<?= $meta_sitename; ?>">
    <meta name="description" content="<?= $meta_desc; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="<?= $meta_twitter; ?>">
    <meta name="twitter:creator" content="<?= $meta_sitename; ?>">
    <meta name="twitter:title" content="<?= $meta_title; ?>">
    <meta name="twitter:description" content="<?= $meta_desc; ?>">
    <meta name="twitter:image:src" content="<?= $meta_img; ?>">

    <!-- Open Graph -->
    <meta property="og:url" content="<?= $meta_url; ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= $meta_title; ?>">
    <meta property="og:image" content="<?= $meta_img; ?>"/>
    <meta property="og:description" content="<?= $meta_desc; ?>">
    <meta property="og:site_name" content="<?= $meta_sitename; ?>">

    <!-- TODO: Place Icons -->

    <script type="text/javascript">
        document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'js';

        var BASE = '<?= BASE_PATH; ?>';
        var WEBPACK_PATH = '<?= ASSET_BUILD_PATH; ?>/';
    </script>

    <link rel="stylesheet" href="<?= ASSET_BUILD_PATH; ?>/main.css">
</head>

<body>
