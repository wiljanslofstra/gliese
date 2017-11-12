<?php include(__DIR__ . '/../../../templates/header.php'); ?>

<?php
    require('./filter-api.php');
    require('./controller.php');
?>

<div class="st-explanation">
    <h1>Filter</h1>
</div>

<div
    class="row js-filters"
    data-filter-page="<?= $current_page; ?>"
    data-filter-total-pages="<?= $total_pages; ?>"
    data-filter-api="/docs/pages/filter/filter-api.php"
    data-filter-api-method="POST"
>
    <form method="POST" action="#" class="col-md-3 js-filters-form">
        <strong class="u-d-block">
            Filters
        </strong>

        <?php foreach ($filters as $filter) : ?>
            <div>
                <?php
                    $checked = inSetFilters($filter['id']);
                ?>
                <div>
                    <input type="checkbox" name="filter[<?= $filter['id']; ?>]" id="filter[<?= $filter['id']; ?>]" <?= ($checked) ? 'checked' : ''; ?>>
                    <label for="filter[<?= $filter['id']; ?>]">
                        <?= $filter['name']; ?> (<span class="js-count"><?= $filter['count']; ?></span>)
                    </label>
                </div>

                <div class="u-pl2">
                    <?php foreach($filter['children'] as $child) : ?>
                        <?php
                            $checked = inSetFilters($child['id']);
                        ?>
                        <div>
                            <input type="checkbox" name="filter[<?= $child['id']; ?>]" id="filter[<?= $child['id']; ?>]" <?= ($checked) ? 'checked' : ''; ?>>
                            <label for="filter[<?= $child['id']; ?>]">
                                <?= $child['name']; ?> (<span class="js-count"><?= $child['count']; ?></span>)
                            </label>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </form>

    <div class="col-md-9">
        <form method="POST" action="#" class="js-filters-options">
            <select name="sort" id="sort">
                <?php foreach($sort_options as $key => $val) : ?>
                    <?php
                        $selected = ($user_defined_sort == $key);
                    ?>
                    <option value="<?= $key; ?>" <?= ($selected) ? 'selected' : ''; ?>>
                        <?= $val; ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </form>

        <div class="row js-filter-products">
            <?php include('./product-list.php'); ?>
        </div>

        <div class="js-filter-pagination">
            <?php include('./pagination.php'); ?>
        </div>
    </div>
</div>

<?php include(__DIR__ . '/../../../../templates/footer.php'); ?>
