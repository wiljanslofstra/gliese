<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Video</h1>

    <p>
        Video wrapper for YouTube and Vimeo
    </p>

    <pre><code><?php echo htmlentities('
<div
    class="video js-video"
    data-video-src="https://www.youtube.com/watch?v=RBTiTcHm_ac?rel=0&amp;autoplay=1"
>
    <a href="#" class="video__poster js-video-poster hide-text">Play</a>
</div>
    '); ?>
    </code></pre>
</div>

<h2 class="u-mb2">
    YouTube
</h2>
<div class="u-mb3">
    <div
        class="video js-video"
        data-video-src="https://www.youtube.com/watch?v=vlDzYIIOYmM&amp;rel=0&amp;autoplay=1"
    >
        <a href="#" class="video__poster js-video-poster hide-text">Play</a>
    </div>
</div>

<h2 class="u-mb2">
    Vimeo
</h2>
<div class="u-mb3">
    <div
        class="video js-video"
        data-video-src="https://vimeo.com/187637397"
    >
        <a href="#" class="video__poster js-video-poster hide-text">Play</a>
    </div>
</div>

<?php include('../templates/_footer.php'); ?>
