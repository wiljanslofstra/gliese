<?php include('../templates/_header.php'); ?>

<div class="st-explanation">
    <h1>Base styles</h1>
    <p>
        Base styles are the styles that are set without giving it any classes or custom
        styles. In other words the style that is set on bare HTML elements. This page has
        a lot of those naked HTML elements to show and test their basic style.
    </p>
</div>

<div class="st-tabs-content container" id="tab2">
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
        <p>The <a href="#">a element</a> and <a href="http://example.com" target="_blank">external a element</a> examples</p>
        <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
        <p>The <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element example</p>
        <p>The <b>b element</b> example</p>
        <p>The <cite>cite element</cite> example</p>
        <p>The <code>code element</code> example</p>
        <p>The <data value="3967381398">data element</data> example</p>
        <p>The <del>del element</del> example</p>
        <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
        <p>The <em>em element</em> example</p>
        <p>The <i>i element</i> example</p>
        <p>The <ins>ins element</ins> example</p>
        <p>The <kbd>kbd element</kbd> example</p>
        <p>The <mark>mark element</mark> example</p>
        <p>The <q>q element</q> example</p>
        <p>The <q>q element <q>inside</q> a q element</q> example</p>
        <p>The <s>s element</s> example</p>
        <p>The <samp>samp element</samp> example</p>
        <p>The <small>small element</small> example</p>
        <p>The <span>span element</span> example</p>
        <p>The <strong>strong element</strong> example</p>
        <p>The <sub>sub element</sub> example</p>
        <p>The <sup>sup element</sup> example</p>
        <p>The <time datetime="2005-05-15 19:00">time element</time> example</p>
        <p>The <u>u element</u> example</p>
        <p>The <var>var element</var> example</p>
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

<?php include('../templates/_footer.php'); ?>
