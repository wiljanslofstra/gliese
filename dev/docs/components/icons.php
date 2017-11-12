<?php include('../templates/_header.php'); ?>

<h2 class="st-heading u-mb2">Icon list</h2>

<div class="u-mb3">
    <strong class="u-mb1 d-block">List normal</strong>
    <ul class="u-icon-list u-mb2">
        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet.
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>
    </ul>

    <strong class="u-mb1 d-block">List large</strong>
    <ul class="u-icon-list u-text-lg u-mb2">
        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet.
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>
    </ul>

    <strong class="u-mb1 d-block">List small</strong>
    <ul class="u-icon-list u-text-sm">
        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet.
        </li>

        <li>
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla voluptas, voluptatum eum quos atque, officia saepe sunt voluptatem rerum, aliquid architecto eius laboriosam autem. Impedit voluptatibus doloribus obcaecati at!
        </li>
    </ul>
</div>

<h2 class="st-heading u-mb2">Icon link</h2>

<div class="u-mb3">
    <div class="u-mb2">
        <a class="u-icon-link u-color-text d-block" href="#">
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet.
        </a>
    </div>

    <div>
        <a class="u-icon-link u-color-text d-block" href="#">
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, nobis. Rem earum a, nam, et debitis, sequi perferendis neque nesciunt adipisci molestiae ullam aut ad fugit atque dolore ratione mollitia!
        </a>
    </div>
</div>

<h2 class="st-heading u-mb2">Button icons</h2>

<div class="u-mb3">
    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--primary" href="#">
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet.
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--sm'); ?>Lorem ipsum dolor sit amet.
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--lg'); ?>Lorem ipsum dolor sit amet.
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--secondary btn--lg" href="#">
            <?= getIcon('chevron-right'); ?>Lorem ipsum dolor sit amet, consectetur.
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--secondary btn--lg" href="#">
            <?= getIcon('chevron-right', 'icon--sm'); ?>Lorem ipsum dolor sit amet, consectetur.
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-before btn--secondary btn--lg" href="#">
            <?= getIcon('chevron-right', 'icon--lg'); ?>Lorem ipsum dolor sit amet, consectetur.
        </a>
    </div>
</div>

<div class="u-mb3">
    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--primary" href="#">
            Lorem ipsum dolor sit amet.<?= getIcon('chevron-right'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--primary" href="#">
            Lorem ipsum dolor sit amet.<?= getIcon('chevron-right', 'icon--sm'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--primary" href="#">
            Lorem ipsum dolor sit amet.<?= getIcon('chevron-right', 'icon--lg'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--secondary btn--lg" href="#">
            Lorem ipsum dolor sit amet, consectetur.<?= getIcon('chevron-right'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--secondary btn--lg" href="#">
            Lorem ipsum dolor sit amet, consectetur.<?= getIcon('chevron-right', 'icon--sm'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-after btn--secondary btn--lg" href="#">
            Lorem ipsum dolor sit amet, consectetur.<?= getIcon('chevron-right', 'icon--lg'); ?>
        </a>
    </div>
</div>

<div class="u-mb3">
    <div class="u-mb2">
        <a class="btn btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right'); ?>
        </a>

        <a class="btn btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--sm'); ?>
        </a>

        <a class="btn btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--lg'); ?>
        </a>
    </div>

    <div class="u-mb2">
        <a class="btn btn--lg btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right'); ?>
        </a>

        <a class="btn btn--lg btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--sm'); ?>
        </a>

        <a class="btn btn--lg btn--icon btn--icon-only btn--primary" href="#">
            <?= getIcon('chevron-right', 'icon--lg'); ?>
        </a>
    </div>
</div>

<?php include('../templates/_footer.php'); ?>
