<?php include(__DIR__ . '/../../templates/header.php'); ?>

<link rel="stylesheet" href="<?= getRevedFile('/css/bootstrap-datepicker.css'); ?>">

<div class="u-p2 u-md-p3">
    <div class="st-explanation">
        <h1>Base styles</h1>
        <p>
            Base styles are the styles that are set without giving it any classes or custom
            styles. In other words the style that is set on bare HTML elements. This page has
            a lot of those naked HTML elements to show and test their basic style.
        </p>
    </div>

    <h2 class="st-heading u-mb2">Button element</h2>
    <div class="u-mb2">
        <button class="btn">.btn</button>
        <button class="btn btn--primary">.btn .btn--primary</button>
        <button class="btn btn--secondary">.btn .btn--secondary</button>
    </div>

    <div class="u-mb3">
        <button class="btn btn--lg">.btn .btn--lg</button>
        <button class="btn btn--primary btn--lg">.btn .btn--primary .btn--lg</button>
        <button class="btn btn--secondary btn--lg">.btn .btn--secondary .btn--lg</button>
    </div>

    <h2 class="st-heading u-mb2">A element</h2>
    <div class="u-mb2">
        <a href="#" class="btn">.btn</a>
        <a href="#" class="btn btn--primary">.btn .btn--primary</a>
        <a href="#" class="btn btn--secondary">.btn .btn--secondary</a>
    </div>

    <div class="u-mb2">
        <a href="#" class="btn btn--lg">.btn .btn--lg</a>
        <a href="#" class="btn btn--primary btn--lg">.btn .btn--primary .btn--lg</a>
        <a href="#" class="btn btn--secondary btn--lg">.btn .btn--secondary .btn--lg</a>
    </div>

    <h2 class="st-heading u-mb2">Form</h2>

    <form class="js-form u-mb3">
        <div class="form-group">
            <label for="text_field">Text Field:</label><br />
            <input class="form-control" type="text" id="text_field" />
        </div>

        <div class="form-group">
            <label for="text_field">Text Field (with Parsley.js error):</label><br />
            <input class="form-control" type="text" id="text_field" />
            <ul class="parsley-errors-list">
                <li>This field is required</li>
            </ul>
        </div>

        <div class="form-group">
            <label for="text_field">Text Field (with .form-error):</label><br />
            <input class="form-control" type="text" id="text_field" />
            <div class="form-error">
                This field is required
            </div>
        </div>

        <div class="form-group">
            <label for="text_field">Password Field:</label><br />
            <input class="form-control js-password-input" type="password" id="password_field" />
            <a href="#password_field" class="js-password-toggle">Show password</a>
        </div>

        <div class="form-group">
            <label for="text_field_disabled">Disabled Text Field:</label><br />
            <input class="form-control" type="text" id="text_field_disabled" disabled value="I'm disabled" />
        </div>

        <div class="form-group">
            <label for="text_field_readonly">Readonly Text Field:</label><br />
            <input class="form-control" type="text" id="text_field_readonly" readonly value="I'm readonly" />
        </div>

        <div class="form-group">
            <label for="text_area">Text Area:</label><br />
            <textarea class="form-control" id="text_area"></textarea>
        </div>

        <div class="form-group">
            <label for="text_area_disabled">Disabled Text Area:</label><br />
            <textarea class="form-control" id="text_area_disabled" disabled>I'm disabled</textarea>
        </div>

        <div class="form-group">
            <label for="text_area">Readonly Text Area:</label><br />
            <textarea class="form-control" id="text_area" readonly>I'm readonly</textarea>
        </div>

        <div class="form-group">
            <label for="select_element">Select Element:</label><br />
            <div class="custom-select">
                <select id="select_element">
                    <optgroup label="Option Group 1">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </optgroup>
                    <optgroup label="Option Group 2">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3" disabled>Disabled Option</option>
                    </optgroup>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="select_element_disabled">Disabled Select Element:</label><br/>
            <div class="custom-select">
                <select id="select_element_disabled" disabled>
                    <option value="1">Unselectable Option</option>
                    <option value="2">This option should not even be seen</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            Radio Buttons:<br />
            <input type="radio" name="radios" id="radio_1" value="radio_1" /><label for="radio_1">Radio 1</label><br/>
            <input type="radio" name="radios" id="radio_2" value="radio_2" /><label for="radio_2">Radio 2</label><br/>
            <input type="radio" name="radios" id="radio_3" value="radio_3" disabled /><label for="radio_3">Radio 3 (disabled)</label><br/>
        </div>

        <div class="form-group">
            Checkboxes:<br />
            <input type="checkbox" class="checkbox" name="checkboxes" id="check_1" value="check_1" /><label for="check_1">Checkbox 1</label><br/>
            <input type="checkbox" class="checkbox" name="checkboxes" id="check_2" value="check_2" /><label for="check_2">Checkbox 2</label><br/>
            <input type="checkbox" class="checkbox" name="checkboxes" id="check_3" value="check_3" disabled /><label for="check_3">Checkbox 3 (disabled)</label><br/>
        </div>

        <div class="form-group">
            <label for="file">File Input:</label><br />
            <input type="file" class="form-control file" id="file" />
        </div>

        <div class="form-group">
            <label for="date">Date (with datepicker):</label><br />
            <input class="form-control js-datepicker" type="text" id="text-date" required />
        </div>

        <button class="btn btn--primary" type="submit">Submit</button>
    </form>

    <h2 class="st-heading u-mb2">Headings</h2>

    <div class="u-mb3">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
    </div>

    <h2 class="st-heading u-mb2">Headings with Text</h2>

    <div class="u-mb3">
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
        <h3>Heading 3</h3>
        <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
        <h4>Heading 4</h4>
        <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>

        <a href="tel:0612345678">
            Bel ons
        </a>
    </div>

    <h2 class="st-heading u-mb2">Block Elements</h2>

    <div class="u-mb3">
        <h3>Paragraphs and Images</h3>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.</p>
        <p>Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.</p>

        <p><img alt="Placeholder Image and Some Alt Text" src="http://placehold.it/350x150" title="A title element for this placeholder image."></p>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.</p>

        <h3>Blockquote</h3>

        <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <blockquote>
            "<strong>This is a blockquote.</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."
        </blockquote>
        <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

        <h3>Figure-Caption</h3>

        <figure>
            <img src="http://placehold.it/350x150" alt="A placeholder figure image." />
            <figcaption>The figcaption element example</figcaption>
        </figure>
    </div>

    <h2 class="st-heading u-mb2">Text Elements</h2>

    <div class="u-mb3">
        <a href="#">a element</a><br>
        <abbr title="Abbreviation">abbr</abbr> element with title<br>
        <cite>cite element</cite><br>
        <code>code element</code><br>
        <em>em element</em><br>
        <mark>mark element</mark><br>
        <small>small element</small><br>
        <strong>strong element</strong><br>
        <sub>sub element</sub><br>
        <sup>sup element</sup><br>
        <time datetime="2005-05-15 19:00">time element</time>
    </div>

    <h2 class="st-heading u-mb2">Monospace / Preformatted</h2>

    <div class="u-mb3">
        <p>Code block wrapped in "pre" and "code" tags</p>
        <pre><code>// Loop through Divs using Javascript.
    var divs = document.querySelectorAll('div'), i;

    for (i = 0; i < divs.length; ++i) {
    divs[i].style.color = "green";
    }</code></pre>
        <p>Monospace Text wrapped in "pre" tags</p>
        <pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
    Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at,
    tincidunt nec, gravida vehicula, nisl.</p></pre>
    </div>

    <h2 class="st-heading u-mb2">List Types</h2>

    <div class="u-mb3">
        <h3>Ordered List</h3>
        <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3
            <ol>
                <li>List Item 3.1</li>
                <li>List Item 3.2
                <ol>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                </ol>
                </li>
                <li>List Item 3.3</li>
            </ol>
            </li>
            <li>List Item 4</li>
        </ol>
    </div>

    <div class="u-mb3">
        <h3>Unordered List</h3>
        <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3
            <ul>
                <li>List Item 3.1</li>
                <li>List Item 3.2
                <ul>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                </ul>
                </li>
                <li>List Item 3.3</li>
            </ul>
            </li>
            <li>List Item 4</li>
        </ul>
    </div>

    <div class="u-mb3">
        <h3>Ordered List (.list)</h3>
        <ol class="list">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3
            <ol>
                <li>List Item 3.1</li>
                <li>List Item 3.2
                <ol>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                </ol>
                </li>
                <li>List Item 3.3</li>
            </ol>
            </li>
            <li>List Item 4</li>
        </ol>
    </div>

    <div class="u-mb3">
        <h3>Unordered List (.list)</h3>
        <ul class="list">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3
            <ul>
                <li>List Item 3.1</li>
                <li>List Item 3.2
                <ul>
                    <li>List Item 3.2.1</li>
                    <li>List Item 3.2.2</li>
                </ul>
                </li>
                <li>List Item 3.3</li>
            </ul>
            </li>
            <li>List Item 4</li>
        </ul>
    </div>

    <div class="u-mb3">
        <h3>Definition List</h3>
        <dl>
            <dt>Definition Term 1</dt>
            <dd>Definition Description 1</dd>
            <dt>Definition Term 2</dt>
            <dd>Definition Description 2</dd>
        </dl>
    </div>

    <h2 class="st-heading u-mb2">Tables</h2>

    <div>
        <table cellspacing="0" cellpadding="0">
            <caption>This is a table caption</caption>
            <thead>
                <tr>
                    <th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Division 1</td><td>Division 2</td><td>Division 3</td>
                </tr>
                <tr class="even">
                    <td>Division 1</td><td>Division 2</td><td>Division 3</td>
                </tr>
                <tr>
                    <td>Division 1</td><td>Division 2</td><td>Division 3</td>
                </tr>
                <tr>
                    <td colspan="3">A row with a cell spanning all 3 columns</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Table Footer 1</th><th>Table Footer 2</th><th>Table Footer 3</th>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<?php include(__DIR__ . '/../../templates/footer.php'); ?>
