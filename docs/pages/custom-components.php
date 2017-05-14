<?php include('../templates/_header.php'); ?>

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

<?php include('../templates/_footer.php'); ?>
