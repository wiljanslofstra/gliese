<?php
    if (empty($breadcrumb)) {
        echo "No breadcrumbs found";
    } else {
        // Prepend home breadcrumb
        $breadcrumb = array_merge(array('Home' => BASE_PATH), $breadcrumb);
    }

    $breadcrumb_count = 1;
?>

<ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
    <?php foreach($breadcrumb as $breadcrumb_name => $breadcrumb_link) : ?>
        <?php
            $is_last = ($breadcrumb_count === count($breadcrumb));
        ?>
        <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <a class="breadcrumb__link" itemprop="item" href="<?= $breadcrumb_link; ?>">
                <span itemprop="name">
                    <?= $breadcrumb_name; ?>
                </span>
            </a>

            <?= getIcon('arrow-right'); ?>

            <meta itemprop="position" content="<?= $breadcrumb_count; ?>" />
        </li>
        <?php $breadcrumb_count++; ?>
    <?php endforeach; ?>
</ol>
