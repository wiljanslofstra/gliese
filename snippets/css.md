# CSS Snippets

## Vertical align
```
.vertical-align { font-size: 0.01px; }

.vertical-align:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.vertical-align-middle,
.vertical-align-bottom {
    display: inline-block;
    max-width: 100%;
    font-size: 1rem;
}

.vertical-align-middle { vertical-align: middle; }
.vertical-align-bottom { vertical-align: bottom; }
```

## Chrome font hack
```
@media screen and (-webkit-min-device-pixel-ratio:0) {
	@font-face {
		font-family: 'webfont';
		src: url('../../includes/fonts/webfont.svg') format('svg');
	}
}
```

## Text rendering
```
-moz-font-feature-settings:"kern" 1, "liga" 1, "dlig" 1; 
-moz-font-feature-settings:"kern=1, liga=1, dlig=1"; 
-ms-font-feature-settings:"kern" 1, "liga" 1, "dlig" 1; 
-o-font-feature-settings:"kern" 1, "liga" 1, "dlig" 1; 
-webkit-font-feature-settings:"kern" 1, "liga" 1, "dlig" 1; 
font-feature-settings:"kern" 1, "liga" 1, "dlig" 1;
```

## Opacity
```
filter: alpha(opacity=60);
-moz-opacity: 0.6;
opacity: 0.6;
```