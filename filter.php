<?php include('templates/header.php'); ?>
    <style>
        .is-cloaked {
            opacity: 0;
        }
    </style>

    <form class="js-filter is-cloaked">
        <div class="filter-group">
            <?php for ($i = 0; $i < 10; $i++) : ?>
                <input type="checkbox" name="options" id="option-<?= $i ;?>" value="option-<?= $i ;?>">
                <label for="option-<?= $i ;?>">Optie <?= $i ;?></label>
            <?php endfor; ?>
        </div>

        <div class="filter-group">
            <select name="color" id="color">
                <option value=""></option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
        </div>

        <div class="filter-group">
            <input type="text" value="10" name="price-from">
            <input type="text" value="90" name="price-to">
        </div>

        <div class="filter-group">
            <select name="sorting" id="sorting">
                <option value="asc-popularity">Popular</option>
                <option value="asc-price">Price (asc)</option>
                <option value="desc-price">Price (desc)</option>
                <option value="asc-date">New collection</option>
            </select>
        </div>

        <div class="filter-group">
            <input type="radio" name="radios" id="radio-empty" value="" checked>
            <label for="radio-empty">Radio empty</label>

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
                options: ['option-<?= rand(0, 10); ?>', 'option-<?= rand(0, 10); ?>', 'option-<?= rand(0, 10); ?>'],
                color: '<?= $colors[rand(0, 4)]; ?>',
            },
            <?php endfor; ?>
        ];
    </script>

<?php include('templates/footer.php'); ?>
