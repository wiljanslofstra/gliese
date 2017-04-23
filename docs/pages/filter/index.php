<?php include('../../templates/_header.php'); ?>

<?php
    require('./filter-api.php');
    require('./controller.php');
?>

<div class="st-explanation">
    <h1>Filter</h1>
</div>

<div class="row js-filters">
    <div class="col-md-3 js-filters-form">
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
    </div>

    <div class="col-md-9">
        <div class="js-filters-options">
            <select name="sort" id="sort">
                <?php foreach($sort_options as $key => $val) : ?>
                    <?php
                        $selected = ($set_sort == $key);
                    ?>
                    <option value="<?= $key; ?>" <?= ($selected) ? 'selected' : ''; ?>>
                        <?= $val; ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </div>

        <div class="row js-filter-products">
            <?php include('./product-list.php'); ?>
        </div>

        <div class="js-filter-pagination" data-page="<?= $current_page; ?>">
            <?php include('./pagination.php'); ?>
        </div>
    </div>
</div>

<?php include('../../templates/_footer.php'); ?>
