<?php include('../templates/_header.php'); ?>

<h2 class="st-heading u-mb2">Map</h2>

<div class="u-mb3">
    <div class="js-map" data-geo="56,42" data-zoom="7" data-marker-geo="56,42" style="height: 500px"></div>
</div>

<h2 class="st-heading u-mb2">Custom video</h2>

<div class="u-mb3">
    <div class="video js-video" data-video-src="https://www.youtube.com/watch?v=RBTiTcHm_ac?rel=0&amp;autoplay=1">
        <a href="#" class="video__poster js-video-poster hide-text">Play</a>
    </div>
</div>

<h2 class="st-heading u-mb2">Password strength</h2>

<div class="u-mb3">
    <div class="js-password">
        <input class="js-password-input" type="password">
        <div class="js-password-meter" data-warning-text="This password is one of the ten most frequently used"></div>
    </div>
</div>

<h2 class="st-heading u-mb2">Video element</h2>

<div class="u-mb3">
    <video width="720" height="405" controls>
        <source src="http://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        <source src="http://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
    </video>
</div>

<h2 class="st-heading u-mb2">Iframe</h2>

<div class="u-mb3">
    <iframe width="560" height="315" src="http://www.youtube.com/embed/l4f9QF0SGuQ" frameborder="0" allowfullscreen></iframe>
</div>

<h2 class="st-heading u-mb2">Breadcrumb</h2>

<?php
    $breadcrumb = array(
        'Subpage #1' => '#',
        'Subpage #2' => '#',
    );
    include('../_breadcrumb.php');
?>

<h2 class="st-heading u-mb2">Spinner</h2>
<div class="spinner"></div>

<h2 class="st-heading u-mb2">Slider</h2>
<div class="js-slider">
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>

<?php include('../templates/_footer.php'); ?>
