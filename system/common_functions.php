<?php
/**
 * Return an SVG icon string
 *
 * @param string $name Name of the icon
 * @param string $extra_class Optional extra classes to append to the icon SVG
 *
 * @return string SVG string for the icon
 */
function getIcon($name, $extra_class = '') {
    return "<svg class='icon icon-$name $extra_class'><use xlink:href='#icon-$name'></use></svg>";
}

/**
 * Render a partial with the given data
 *
 * @param string $filename File to use as partial
 * @param mixed[] $props Properties to pass in the partial
 *
 * @return string Rendered partial
 */
function partial($filename, $props) {
    ob_start();
    include($filename);
    return ob_get_clean();
}

/**
 * Modify the source string to use a revisioned filename if available
 *
 * @param string $src Asset source path
 *
 * @return string Asset path with a revision number in the filename
 */
function getRevedFile($src) {
    $parts = explode('/', $src);
    $filename = $parts[count($parts) - 1];
    $extension = pathinfo($filename, PATHINFO_EXTENSION);

    $manifest_folder = '/../assets/dist/';

    // Try to fetch the manifest JSON
    $rev_file = file_get_contents(__DIR__ . '/../mix-manifest.json');

    // If the file is not found it is false, we return the origin source
    if ($rev_file === false) {
        return $src;
    }

    // Decode the JSON string to an array
    $rev_file = json_decode($rev_file, true);

    foreach ($rev_file as $rev_filename => $dest_filename) {
        if (strpos($rev_filename, $filename) !== false) {
            return $parts[count($parts) - 1] = $dest_filename;
        }
    }

    // Put everything back together
    return implode('/', $parts);
}
