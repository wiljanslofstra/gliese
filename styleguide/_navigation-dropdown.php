<ul class="navigation__dropdown navigation-dropdown">
    <li class="navigation-dropdown__item hidden-lg-up">
        <a class="navigation-dropdown__link js-back" href="<?= $child['url'] ?>">
            <?= getIcon('arrow-left', 'navigation__back-arrow'); ?>Terug
        </a>
    </li>

    <?php foreach ($props['children'] as $child) : ?>
        <?php
            $has_dropdown = (!empty($child['children']));
        ?>
        <li class="navigation-dropdown__item <?= ($has_dropdown) ? 'has-children' : ''; ?>">
            <a class="navigation-dropdown__link" href="<?= $child['url'] ?>">
                <?= $child['menuTitle'] ?>
            </a>

            <?php if ($has_dropdown) : ?>
                <?php
                    echo partial(__DIR__ . '/_navigation-dropdown.php', [
                        'children' => $child['children']
                    ]);
                ?>
            <?php endif; ?>
        </li>
    <?php endforeach; ?>
</ul>
