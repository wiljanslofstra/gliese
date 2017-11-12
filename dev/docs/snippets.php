<?php include(__DIR__ . '/../../templates/header.php'); ?>

<div class="u-p2 u-md-p3">
    <strong class="d-block">Map</strong>
    <pre><code><?php echo htmlentities('<div
    class="js-map"
    data-geo="52.3702160,4.8951680"
    data-zoom="9"
    data-marker-geo="52.3702160,4.8951680"
    data-marker-icon="http://placehold.it/80x160/"
    data-marker-size="40,80"
    data-marker-anchor="20,80"
    style="height: 500px"
></div>
'); ?>
    </code></pre>

    <strong class="d-block">Accordion</strong>
    <pre><code><?php echo htmlentities('<dl class="accordion js-accordion">
    <dt role="heading" class="accordion__trigger">
        <a class="accordion__trigger-link js-accordion-trigger" href="#" id="accordion-trigger-0" aria-expanded="false" aria-controls="accordion-0">
            This is a question you should ask
            <?= getIcon(\'arrow-down\'); ?>
        </a>
    </dt>

    <dd id="accordion-0" role="region" aria-labelledby="accordion-trigger-0" class="accordion__body js-accordion-body">
        <div class="accordion__body-inner js-accordion-body-inner">
            <!-- Content -->
        </div>
    </dd>

    <dt role="heading" class="accordion__trigger">
        <a class="accordion__trigger-link js-accordion-trigger" href="#" id="accordion-trigger-1" aria-expanded="false" aria-controls="accordion-1">
            This is a question you should ask
            <?= getIcon(\'arrow-down\'); ?>
        </a>
    </dt>

    <dd id="accordion-1" role="region" aria-labelledby="accordion-trigger-1" class="accordion__body js-accordion-body">
        <div class="accordion__body-inner js-accordion-body-inner">
            <!-- Content -->
        </div>
    </dd>
</dl>'); ?>
    </code></pre>

    <strong class="d-block">Video</strong>
    <pre><code><?php echo htmlentities('<div
    class="video js-video"
    data-video-src="https://www.youtube.com/watch?v=RBTiTcHm_ac?rel=0&amp;autoplay=1"
>
    <a href="#" class="video__poster js-video-poster hide-text">Play</a>
</div>
'); ?>
    </code></pre>

    <strong class="d-block">Slider</strong>
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

    <strong class="d-block">Breadcrumb</strong>
    <pre><code><?= htmlentities('<?php
    $breadcrumb = array(
        \'Subpage #1\' => \'#\',
        \'Subpage #2\' => \'#\',
    );
    include(\'../_breadcrumb.php\');
?>'); ?>
    </code></pre>
</div>

<?php include(__DIR__ . '/../../templates/footer.php'); ?>
