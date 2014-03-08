# HTML

## Google Analytics aynchronous
```
<script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
```

## Favicons / touch icons etc.

```
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-152.png">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-144.png">
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-120.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-72.png">
<link rel="apple-touch-icon-precomposed" href="android-152.png">

<link rel="icon" href="fav16.png" sizes="16x16" type="image/png">
<link rel="icon" href="fav32.png" sizes="32x32" type="image/png">
<link rel="icon" href="fav48.png" sizes="48x48" type="image/png">
<link rel="icon" href="fav64.png" sizes="64x64" type="image/png">
<link rel="icon" href="fav128.png" sizes="128x128" type="image/png">
<link rel="icon" href="fav195.png" sizes="195x195" type="image/png">

<link rel="icon" href="fav32.png">
<!--[if IE]><link rel="shortcut icon" href="favicon.ico"><![endif]-->

<meta name="msapplication-TileColor" content="#D83434">
<meta name="msapplication-TileImage" content="fav144.png">
```