<?php
  define('IS_DEV', (strpos($_SERVER['HTTP_HOST'], "localhost") !== false));

  define('BASE_PATH', '/Gliese-new');

  define('ASSET_BASE', BASE_PATH);
  define('ASSET_PATH', ASSET_BASE . '/assets');
  define('ASSET_BUILD_PATH', ASSET_PATH . '/build');

  define('JS_PATH', IS_DEV ? "http://localhost:9000" : ASSET_BUILD_PATH);

  define('ELEM_PATH', BASE_PATH . '/elements');
?>
