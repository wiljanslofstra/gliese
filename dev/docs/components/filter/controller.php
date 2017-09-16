<?php
    $set_filters_keys = [];
    $set_filters_values = [];
    $user_defined_sort = (!empty($_GET) && !empty($_GET['sort'])) ? $_GET['sort'] : false;
    $user_defined_page = (!empty($_GET) && !empty($_GET['page'])) ? (int)$_GET['page'] : 1;

    if (!empty($_GET) && !empty($_GET['filter'])) {
        $set_filters_keys = array_keys($_GET['filter']);
        $set_filters_values = array_values($_GET['filter']);
    }

    function inSetFilters($id) {
        global $set_filters_keys;
        global $set_filters_values;
        return (in_array($id, $set_filters_keys) || in_array($id, $set_filters_values));
    }

    $sort_options = [
        'date:desc' => 'Newest first',
        'date:asc' => 'Oldest first',
        'price:desc' => 'Price descending',
        'price:asc' => 'Price ascending'
    ];

    $current_page = $user_defined_page;
    $total_pages = 6;
?>
