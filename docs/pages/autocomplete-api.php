<?php
    $res = [
        [
            'title' => 'Autocomplete item #1',
            'extra_info' => 'test',
        ], [
            'title' => 'Autocomplete item #2',
            'extra_info' => 'test',
        ], [
            'title' => 'Autocomplete item #3',
            'extra_info' => 'test',
            'redirect_url' => 'https://www.google.nl/'
        ], [
            'title' => 'Item #1',
            'extra_info' => 'test',
        ], [
            'title' => 'Item #2',
            'extra_info' => 'test',
        ]
    ];

    header('Content-type: application/json');
    echo json_encode($res);
    die;
?>
