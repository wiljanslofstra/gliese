<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Accordion</h1>
</div>

<dl class="accordion js-accordion u-mt0 u-mb0 u-capped-xl u-mx-auto">
    <?php for ($i = 0; $i < 10; $i++) : ?>
        <?php
            $body_id = 'acc-' . $i;
            $trigger_id = 'acc-trigger-' . $i;
            $slider_id = 'acc-slider-' . $i;
        ?>
        <dt role="heading" class="accordion__trigger">
            <a
                class="accordion__trigger-link js-accordion-trigger"
                href="#"
                id="<?= $trigger_id; ?>"
                aria-expanded="false"
                aria-controls="<?= $body_id; ?>"
            >
                This is a question you should ask
                <?= getIcon('arrow-down'); ?>
            </a>
        </dt>

        <dd
            id="<?= $body_id; ?>"
            role="region"
            aria-labelledby="<?= $trigger_id; ?>"
            class="accordion__body js-accordion-body"
        >
            <div class="accordion__body-inner js-accordion-body-inner">
                <div class="u-capped-lg cms-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet auctor turpis. Nam tempus lacinia ante. Aenean efficitur pharetra justo, vitae pellentesque tellus consectetur interdum. Sed posuere rutrum tortor eu vehicula. Vestibulum dictum nisl laoreet eros pulvinar, quis consequat nisi pulvinar.
                </div>
            </div>
        </dd>
    <?php endfor; ?>
</dl>

<?php include('../templates/_footer.php'); ?>
