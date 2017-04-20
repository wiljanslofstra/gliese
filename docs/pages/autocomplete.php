<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Autocomplete</h1>
    <p>
        Basic implementation of a autocomplete field connected to an API. It uses Awesomplete for
        the autocomplete behaviour. normalize-for-search to make searching a little better. And
        Lodash to render the items.
    </p>

    <strong>Data attributes</strong>
    <table class="u-mt0">
        <tr>
            <td>data-auto-close-click</td>
            <td>Close the dropdown on item click (default behaviour). But sometimes you want to have a clickable button inside the dropdown. By setting this to true, you can click the button without closing the dropdown</td>
        </tr>

        <tr>
            <td>data-auto-template</td>
            <td>Selector for the template to use for the dropdown items. The template is rendered with Lodash</td>
        </tr>

        <tr>
            <td>data-auto-api-url</td>
            <td>API endpoint where we will try to fetch the JSON for the items from</td>
        </tr>

        <tr>
            <td>data-auto-api-key</td>
            <td>Key to use for the input value in the POST request</td>
        </tr>
    </table>
</div>

<pre><code><?php echo htmlentities('
<input
    type="text"
    class="form-control js-autocomplete"
    placeholder="Start typing... (e.g. autocomplete)"
    data-auto-close-click="true"
    data-auto-template="#autocomplete-template"
    data-auto-api-url="/docs/pages/autocomplete-api.php"
    data-auto-api-key="value"
>

<script type="text/template" id="autocomplete-template">
    <li aria-selected="false">
        <%= title %>
    </li>
</script>
'); ?>
</code></pre>

<div class="u-mb3">
    <input
        type="text"
        class="form-control js-autocomplete"
        placeholder="Start typing... (e.g. autocomplete)"
        data-auto-close-click="true"
        data-auto-template="#autocomplete-template"
        data-auto-api-url="/docs/pages/autocomplete-api.php"
        data-auto-api-key="value"
    >

    <script type="text/template" id="autocomplete-template">
        <li aria-selected="false">
            <%= title %>
        </li>
    </script>
</div>

<?php include('../templates/_footer.php'); ?>
