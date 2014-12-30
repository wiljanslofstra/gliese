<?php
	$meta_title = 'Gliese';
	$meta_desc = 'Front-end starter kit';
	$meta_creator = 'Wiljan Slofstra';
	$meta_sitename = 'Gliese';
	$meta_img = 'assets/icons/apple-touch-icon.png';
	$meta_url = '/';
	$meta_twitter = '@wiljanslofstra';
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" itemscope itemtype="http://schema.org/WebPage"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" itemscope itemtype="http://schema.org/WebPage"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" itemscope itemtype="http://schema.org/WebPage"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" itemscope itemtype="http://schema.org/WebPage"><!--<![endif]-->
	<head>
		<meta charset="utf-8">
		
		<title><?= $meta_title; ?></title>

		<meta name="author" content="<?= $meta_creator; ?>">
		<meta name="description" content="<?= $meta_desc; ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Twitter -->
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:site" content="<?= $meta_twitter; ?>">
		<meta name="twitter:creator" content="<?= $meta_creator; ?>">
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

		<!-- Schema.org  -->
		<meta itemprop="name" content="<?= $meta_title; ?>">
		<meta itemprop="description" content="<?= $meta_desc; ?>">
		<meta itemprop="image" content="<?= $meta_img; ?>">

		<link rel="shortcut icon" href="assets/icons/favicon.ico">
		<link rel="apple-touch-icon" sizes="57x57" href="assets/icons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="assets/icons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/icons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/icons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="assets/icons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="assets/icons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="assets/icons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="assets/icons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="assets/icons/favicon-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="assets/icons/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="assets/icons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="assets/icons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="assets/icons/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="assets/icons/mstile-144x144.png">
		<meta name="msapplication-config" content="assets/icons/browserconfig.xml">

		<link rel="stylesheet" href="assets/dist/css/main.css">

		<script type="text/javascript">
			var BASE = '/';
		</script>

		<!--[if IE 9]>
			<link rel="stylesheet" href="assets/ie/ie9.css">
		<![endif]-->
		<!--[if lte IE 8]>
		 	<link rel="stylesheet" href="assets/ie/ie8.css">
		 	<script src="assets/js/bower_components/respond/dest/respond.min.js"></script>
			<script src="assets/ie/html5shiv.js"></script>
	  	<![endif]-->
	</head>

	<body>