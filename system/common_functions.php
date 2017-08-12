<?php
function getIcon($name, $extra_class = '') {
    return "<svg class='icon icon-$name $extra_class'><use xlink:href='#icon-$name'></use></svg>";
}

function partial($filename, $props) {
    ob_start();
    include($filename);
    return ob_get_clean();
}

function getRevedFile($src) {
    $parts = explode('/', $src);
    $filename = $parts[count($parts) - 1];

    $rev_file = file_get_contents(__DIR__ . '/../assets/dist/rev-manifest.json');

    $rev_file = json_decode($rev_file, true);

    if (!empty($rev_file[$filename])) {
        $parts[count($parts) - 1] = $rev_file[$filename];
    }

    return implode('/', $parts);
}
