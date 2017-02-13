<?php
function getIcon($name) {

}

function partial($filename, $props) {
    ob_start();
    include($filename);
    return ob_get_clean();
}
