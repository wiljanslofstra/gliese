<?php
function getIcon($name, $extra_class = '') {
    return "<svg class='icon icon-$name $extra_class'><use xlink:href='#icon-$name'></use></svg>";
}

function partial($filename, $props) {
    ob_start();
    include($filename);
    return ob_get_clean();
}
