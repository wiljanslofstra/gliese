<?php include('templates/header.php'); ?>
    <style>
        .is-cloaked {
            opacity: 0;
        }
    </style>

    <div class="row">
        <div class="col-sm-4">
            <form class="js-filter is-cloaked">
                <div class="filter-group">
                    <?php for ($i = 0; $i < 11; $i++) : ?>
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

                    <?php for ($i = 0; $i < 4; $i++) : ?>
                        <input type="radio" name="radios" id="radio-<?= $i ;?>" value="radio-<?= $i ;?>">
                        <label for="radio-<?= $i ;?>">Radio <?= $i ;?></label>
                    <?php endfor; ?>
                </div>
            </form>
        </div>

        <div class="col-sm-8">
            <div class="js-filter-count"></div>

            <div class="js-filter-list">
            </div>
        </div>
    </div>

    <script type="text/javascript">
        var products = [
            <?php
                $colors = array('red', 'blue', 'yellow', 'green');
            ?>
            <?php for ($i = 0; $i < 500; $i++) : ?>
            {
                name: 'test',
                price: <?= rand(342, 3490); ?>,
                popularity: <?= rand(0, 100); ?>,
                options: ['option-<?= rand(0, 10); ?>', 'option-<?= rand(0, 10); ?>', 'option-<?= rand(0, 10); ?>'],
                color: '<?= $colors[rand(0, 4)]; ?>',
                radios: ['radio-<?= rand(0, 3); ?>'],
            },
            <?php endfor; ?>
        ];
    </script>

    <script type="text/template" id="item-template">
        <ul>
            <% items.forEach(function(item) { %>
            <li style="margin-bottom: 15px; width: 33%; float: left;">
                Name:<br>
                <%- item.name %><br>
                Price:<br>
                <%- item.price %><br>
                Populariy:<br>
                <%- item.popularity %><br>
                Color:<br>
                <%- item.color %>
            </li>
            <% }); %>
        </ul>
    </script>

<?php include('templates/footer.php'); ?>
