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
    extract($props);
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

/**
 * Return social links with the given message and summary
 *
 * @param  string $msg          The message to show, this is most likely the title
 * @param  string $url          Url of the item, if null or blank will return the current url (optional)
 * @param  string $img          Image that can be shared with Pinterest
 * @param  string $summary      Summary of the message, if empty uses the title (optional)
 * @return array                Array with all social links
 */
function socialLinks($msg, $url = null, $img = null, $summary = null) {
    // Subject of the article
    $message_esc = urlencode($msg);
    $msg_esc = str_replace(' ', '%20', strip_tags($msg));

    // Summary
    $summary = ($summary == null) ? $msg : $summary;
    $summary_esc = urlencode($summary);

    // Url
    $url = ($url == null) ? urlencode(((isSecure()) ? 'https' : 'http') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]") : urlencode($url);

    // Shortcut for a break in the email
    $mail_break = "%0D%0A";

    // Concatenates all information for the e-mail body
    $mail_text = str_replace(' ', '%20', strip_tags($summary) . $mail_break . $mail_break . $url);

    return array(
        // Facebook sharer url
        "facebook" => "https://www.facebook.com/sharer/sharer.php?u=$url",

        // Twitter tweet url
        "twitter" => "https://twitter.com/intent/tweet?text=$message_esc%20$url",

        // LinkedIn share url
        "linkedin" => "https://www.linkedin.com/shareArticle?mini=true&amp;url=$url&amp;title=$message_esc&amp;summary=$summary_esc&amp;source=",

        // WhatsApp share link
        "whatsapp" => "href='whatsapp://send?text=$msg_esc%20$url' data-action='share/whatsapp/share'",

        // Pinterest
        "pinterest" => "https://pinterest.com/pin/create/button/?url=$url&amp;media=$img&amp;description=$message_esc",

        // Mail link
        "mail" => "mailto:?subject=$msg_esc&amp;body=$mail_text",

        // Modal onclick shortcut ( e.g. onclick="$links['open_window'];" )
        "open_window" => "window.open(this.href, 'share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no'); return false;"
    );
}

/**
 * Returns the Google Maps url based on the given address
 * @param  string $maps_address Address (e.g. "Jagerserf 24 Ermelo")
 * @return string Google Maps url
 */
function getMapsLink($maps_address) {
    $maps_address = urlencode($maps_address);
    return "https://www.google.nl/maps/place/" . $maps_address . "/";
}

/**
 * Format phone number
 *
 * @param string $string Phone number string
 * @param string $country Country abbreviation (e.g. 'nl')
 * @param boolean $protocol Should a protocol be added (tel:)
 * @return string Formatted phone number
 */
function formatPhone($string, $country = 'nl', $protocol = true) {
    $phone = ltrim(preg_replace("/[^0-9]/", "", $string), '0');

    $area_codes = [
        'nl' => '+31',
        'de' => '+39',
        'be' => '+32'
    ];

    // Get the area code for the given country
    $area_code = in_array($country, array_keys($area_codes)) ? $area_codes[$country] : '';

    // Add the protocol
    $protocol = ($protocol ? 'tel:' : '');

    return $protocol . $area_code . $phone;
}
