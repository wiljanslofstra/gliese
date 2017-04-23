<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Slider</h1>

    <p>
        Slick-carousel slider
    </p>

    <pre><code><?php echo htmlentities('
<div class="js-slider">
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>
    '); ?>
    </code></pre>
</div>

<h2 class="u-mb2">
    Basic slider
</h2>
<div class="js-slider u-mb3">
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>

<h2 class="u-mb2">
    Basic slider with .u-slider class
</h2>
<div class="u-slider js-slider u-mb3">
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>

<h2 class="u-mb2">
    Use data-slider-[option] to change Slicks config
</h2>
<strong>Code</strong><br>
<pre><code><?php echo htmlentities('<div
    class="u-slider js-slider u-mb3"
    data-slider-slides-to-show="2"
    data-slider-dots="true"
>
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>
'); ?>
</code></pre>

<strong>Example</strong><br>
<div
    class="u-slider js-slider u-mb3"
    data-slider-slides-to-show="2"
    data-slider-dots="true"
>
    <div>Slide #1</div>
    <div>Slide #2</div>
    <div>Slide #3</div>
</div>

<?php include('../templates/_footer.php'); ?>
