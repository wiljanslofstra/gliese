<!DOCTYPE html>
<!--[if lt IE 9 ]> <html lang="nl" class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9 ]> <html lang="nl" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="nl" class="no-js"> <!--<![endif]-->
	<head>
		<title>Style - Gliese.</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/main.css">

		<style>
			.heading { font-size: 1.4em; color: #ccc; border-bottom: 2px solid #bbb; display: block; padding-bottom: 0.25em; margin-top: 2em; }
		</style>
	</head>

	<body>
		<span class="heading">Typography</span>

		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>

		<blockquote>Blockquote - The quick brown fox jumps over the lazy dog</blockquote>

		<p>Paragraph text, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim nulla quis ultricies faucibus. Morbi ac nisl id ligula pulvinar vestibulum a eu arcu. Fusce et risus sit amet sapien sagittis laoreet <a href="#" title="Look at me!">a porta massa</a>. Nam tincidunt tempor rhoncus. Donec porttitor urna ac neque gravida, ac accumsan elit pretium. <strong>Donec rutrum eu</strong> arcu eu luctus. Curabitur <em>convallis sapien ante, at tincidunt</em> nulla semper a. Duis consectetur nisi vel lacus viverra, non suscipit <code>Yeah code woohoo!</code> quam aliquet. Nunc est lectus, luctus id metus eget, condimentum tristique mi. Vivamus blandit enim vitae imperdiet lacinia. Duis aliquam pellentesque suscipit.</p>

		<p>Morbi id nulla lobortis, posuere <a href="#" title="Look at me!">libero a, dapibus ligula</a>. Sed ut purus et ligula accumsan convallis. Integer a vulputate <strong>nisl, non semper augue</strong>. Suspendisse mollis lorem eu posuere vehicula. Donec porta libero ac lorem ultricies, nec molestie metus imperdiet. <strong>Nullam malesuada</strong> sagittis felis id hendrerit. Aliquam feugiat lectus in faucibus rutrum.</p>


		<span class="heading">Form</span>

		<form method="POST" action="#">
			<input type="text" placeholder="Text field" name="text_field">
			<input type="number" placeholder="Number field" name="number_field">
			<input type="email" placeholder="E-mail field" name="mail_field">
			<input type="tel" placeholder="Phone field" name="phone_field">
			<input type="password" placeholder="Password field" name="password_field" />
			<input type="file" name="file" />
			<textarea placeholder="Text area"></textarea>

			<select name="select_element">
				<optgroup label="Option Group 1">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</optgroup>
				<optgroup label="Option Group 2">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</optgroup>
			</select>

			<label for="radio_field_1">
				<input type="radio" name="radio_field" id="radio_field_1" value="0" checked>
				Radio 1
			</label>
			<label for="radio_field_2">
				<input type="radio" name="radio_field" id="radio_field_2" value="1">
				Radio 2
			</label>

			<label for="check_field_1">
				<input type="checkbox" name="check_field" id="check_field_1" value="0" checked>
				Check 1
			</label>
			<label for="check_field_2">
				<input type="checkbox" name="check_field" id="check_field_2" value="1">
				Check 2
			</label>
			<label for="check_field_3">
				<input type="checkbox" name="check_field" id="check_field_3" value="2">
				Check 3
			</label>

			<input type="submit" name="submit" value="Submit button">
		</form>


		<span class="heading">Definition list</span>
		<dl>
			<dt>Definition List Title</dt>
			<dd>This is a definition list division.</dd>
		</dl>
		 
		<span class="heading">Ordered list</span>
		<ol>
			<li>List Item 1</li>
			<li>List Item 2</li>
			<li>List Item 3</li>
		</ol>
		 
		<span class="heading">Unordered list</span>
		<ul>
			<li>List Item 1</li>
			<li>List Item 2</li>
			<li>List Item 3</li>
		</ul>

		<span class="heading">HR</span>
		<hr />

		<span class="heading">Table</span>
		<table>
			<tr>
				<th>Table Header 1</th><th>Table Header 2</th><th>Table Header 3</th>
			</tr>
			<tr>
				<td>Division 1</td><td>Division 2</td><td>Division 3</td>
			</tr>
			<tr class="even">
				<td>Division 1</td><td>Division 2</td><td>Division 3</td>
			</tr>
			<tr>
				<td>Division 1</td><td>Division 2</td><td>Division 3</td>
			</tr>
		</table>

		<span class="heading">Links</span>
		<a href="#" title="Simple link">Sample link</a>
		<button>Sample Button</button>

		<span class="heading">Code block</span>
<pre><code>body {
	background: #bada55;
	color: #333;
}</code></pre>
 
		<span class="heading">Misc Stuff - abbr, acronym, pre, code, sub, sup, etc.</span>
 
		<p>Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p>

		<br /><br /><br /><br />
	</body>
</html>