<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Map</h1>

    <p>
        Simple Google Maps element with a single marker. The API key has to be set inside the JavaScript files. To change
        the style of the map you can copy a style array in the JavaScript file, in the variable STYLE.
    </p>

    <strong>Data attributes</strong>
    <table class="u-mt0">
        <tr>
            <td>data-geo</td>
            <td>Geo location for the center of the map</td>
        </tr>

        <tr>
            <td>data-zoom</td>
            <td>Zoom level of the map</td>
        </tr>

        <tr>
            <td>data-marker-geo</td>
            <td>Geo location of the marker, probably the same geolocation as the center of the map (data-geo)</td>
        </tr>

        <tr>
            <td>data-marker-icon</td>
            <td>Optional. Image for the icon</td>
        </tr>

        <tr>
            <td>data-marker-size</td>
            <td>
                Optional. Size of the icon, you could for example have a 2x (retina) image but set the size to half that<br>
                <em>e.g. 30,50</em>
            </td>
        </tr>

        <tr>
            <td>data-marker-anchor</td>
            <td>
                Optional. Anchor of the marker, some icons don't have the pointer in the center. For example a flag where the pole is on the bottom left of the icon<br>
                <em>15,50</em>
            </td>
        </tr>
    </table>
</div>

<pre><code><?php echo htmlentities('
<div
    class="js-map"
    data-geo="52.3702160,4.8951680"
    data-zoom="9"
    data-marker-geo="52.3702160,4.8951680"
    data-marker-icon="http://placehold.it/80x160/"
    data-marker-size="40,80"
    data-marker-anchor="20,80"
    style="height: 500px"
></div>
'); ?>
</code></pre>

<div class="u-mb3">
    <div
        class="js-map"
        data-geo="52.3702160,4.8951680"
        data-zoom="9"
        data-marker-geo="52.3702160,4.8951680"
        data-marker-icon="http://placehold.it/80x160/"
        data-marker-size="40,80"
        data-marker-anchor="20,80"
        style="height: 500px"
    ></div>
</div>

<?php include('../templates/_footer.php'); ?>
