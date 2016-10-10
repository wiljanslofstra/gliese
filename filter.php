<?php include('templates/header.php'); ?>

    <form class="js-filter">
        <div class="filter-group" data-filter-group="options" data-filter-type="checkboxes">
            <?php for ($i = 0; $i < 10; $i++) : ?>
                <input type="checkbox" name="option-<?= $i ;?>" id="option-<?= $i ;?>">
                <label for="option-<?= $i ;?>">Optie <?= $i ;?></label>
            <?php endfor; ?>
        </div>

        <div class="filter-group">
            <select name="color" id="color" data-filter-group="color">
                <option value=""></option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
        </div>

        <div class="filter-group" data-filter-group="price">
            <input type="text" value="10" name="price-from">
            <input type="text" value="90" name="price-to">
        </div>

        <div class="filter-group">
            <select name="sorting" id="sorting" data-filter-sort="true">
                <option value="asc-popularity">Popular</option>
                <option value="asc-price">Price (asc)</option>
                <option value="desc-price">Price (desc)</option>
                <option value="asc-date">New collection</option>
            </select>
        </div>

        <div class="filter-group" data-filter-group="more-options" data-filter-type="checkboxes">
            <?php for ($i = 0; $i < 3; $i++) : ?>
                <input type="radio" name="radios" id="radio-<?= $i ;?>" value="radio-<?= $i ;?>">
                <label for="radio-<?= $i ;?>">Radio <?= $i ;?></label>
            <?php endfor; ?>
        </div>
    </form>

    <div class="js-filter-list">
    </div>

    <script type="text/javascript">
        var products = [
            <?php
                $colors = array('red', 'blue', 'yellow', 'green');
            ?>
            <?php for ($i = 0; $i < 20; $i++) : ?>
            {
                name: 'test',
                price: <?= rand(342, 3490); ?>,
                popularity: <?= rand(0, 100); ?>,
                options: ['option-<?= rand(0, 10); ?>'],
                color: '<?= $colors[rand(0, 4)]; ?>',
            },
            <?php endfor; ?>
        ];
    </script>

<?php include('templates/footer.php'); ?>
