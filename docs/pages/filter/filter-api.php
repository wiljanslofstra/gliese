<?php

function getFilter($prefix, $i) {
    return [
        'id' => $prefix . $i,
        'name' => $prefix . ' filter ' . $i,
    ];
}

function getFilters() {
    return [
        [
            'id' => 'TV123',
            'name' => 'Televisions',
            'children' => [
                getFilter('tv', 1),
                getFilter('tv', 2),
                getFilter('tv', 3),
                getFilter('tv', 4),
            ]
        ], [
            'id' => 'PH123',
            'name' => 'Smartphones',
            'children' => [
                getFilter('phone', 1),
                getFilter('phone', 2),
                getFilter('phone', 3),
            ]
        ]
    ];
}

function getProduct() {
    return [
        'id' => '1234',
        'url' => '#',
        'price' => 123.45,
        'price_old' => 0,
        'name' => 'Television',
        'media' => 'http://unsplash.it/256x256/',
    ];
}

function getProducts() {
    $products = [];

    for ($i = 0; $i < 24; $i++) {
        $products[] = getProduct();
    }

    return $products;
}

function getProductsHtml($products) {
    ob_start();

    include('./product-list.php');

    $html = ob_get_contents();
    ob_end_clean();

    return $html;
}

function getPaginationHtml($current_page, $total_pages) {
    ob_start();

    include('./pagination.php');

    $html = ob_get_contents();
    ob_end_clean();

    return $html;
}

if (
    !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
) {
    $start_time = microtime(true);
    header('Content-type: application/json');

    $filters = getFilters();
    $products = getProducts();
    $products_html = getProductsHtml($products);
    $pagination_html = getPaginationHtml(1, 6);

    usleep(100000);

    $end_time = microtime(true);
    $timing = $end_time - $start_time;

    echo json_encode([
        'filters' => $filters,
        // 'products' => $products,
        'products_html' => $products_html,
        'pagination_html' => $pagination_html,
        'meta' => [
            'total_producs' => 123,
            'current_page' => 1,
            'total_pages' => 6,
            'products_per_page' => 24,
            'sort' => 'date:desc',
            'timing' => number_format($timing, 3),
            'timing_label' => 'label',
        ],
    ]);
    die();
} else {
    $filters = getFilters();
    $products = getProducts();
}
