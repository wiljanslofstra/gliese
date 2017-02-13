<?php include('_header.php'); ?>

<?php
    $menu_items = [
        [
            'menuTitle' => 'Home',
            'url' => '',
            'children' => [],
        ], [
            'menuTitle' => 'Categories',
            'url' => '',
            'children' => [
                [ 'menuTitle' => 'Categories #1', 'url' => '#' ],
                [ 'menuTitle' => 'Categories #2', 'url' => '#' ],
                [ 'menuTitle' => 'Categories #3', 'url' => '#' ],
                [ 'menuTitle' => 'Categories #4', 'url' => '#' ],
            ],
        ], [
            'menuTitle' => 'Dropdown with two levels',
            'url' => '',
            'children' => [
                [
                    'menuTitle' => 'Item #1 with dropdown',
                    'url' => '#',
                    'children' => [
                        [ 'menuTitle' => 'Level 2 Item #1', 'url' => '#' ],
                        [ 'menuTitle' => 'Level 2 Item #2', 'url' => '#' ],
                        [ 'menuTitle' => 'Level 2 Item #3', 'url' => '#' ],
                        [ 'menuTitle' => 'Level 2 Item #4', 'url' => '#' ],
                    ],
                ],
                [ 'menuTitle' => 'Item #2', 'url' => '#' ],
                [ 'menuTitle' => 'Item #3', 'url' => '#' ],
                [ 'menuTitle' => 'Item #4', 'url' => '#' ],
            ],
        ], [
            'menuTitle' => 'About',
            'url' => '',
            'children' => [],
        ], [
            'menuTitle' => 'Contact',
            'url' => '',
            'children' => [],
        ]
    ];
?>

<header class="header">
    <div class="container header__container">
        <a class="header__logo logo u-hide-text" href="#" title="Ga terug naar home">
            Merknaam
        </a>

        <a class="header__toggle" href="#" title="Open navigatie" aria-controls="navigation">
            <i class="header__toggle-icon" aria-hidden="true"></i>Menu
        </a>

        <nav class="header__navigation navigation" id="navigation">
            <ul>
                <?php foreach ($menu_items as $m => $item) : ?>
                    <?php
                        $is_active = ($m == 0);
                        $has_dropdown = (!empty($item['children']));
                    ?>
                    <li class="navigation__item<?= ($has_dropdown) ? ' has-children' : ''; ?>">
                        <a class="navigation__link<?= ($is_active) ? ' is-active' : ''; ?>" href="<?= $item['url'] ?>">
                            <?= $item['menuTitle'] ?><?= ($has_dropdown) ? getIcon('arrow-right', 'navigation__dropdown-arrow') : ''; ?>
                        </a>

                        <?php if ($has_dropdown) : ?>
                            <?php
                                echo partial(__DIR__ . '/_navigation-dropdown.php', [
                                    'children' => $item['children']
                                ]);
                            ?>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>

                <li class="navigation__item navigation__item--button">
                    <a class="btn btn--primary" href="#" role="button" data-toggle="modal" data-target="#newsletterModal">
                        Nieuwsbrief
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<?php include('_footer.php'); ?>
