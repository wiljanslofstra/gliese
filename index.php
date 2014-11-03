<?php include('elements/header.php'); ?>
	
	<div class="wrapper" id="wrapper" data-controller="home">
	
		<section class="container">
			<h1 class="title init-animate animated-heading">
				Welcome to Gliese
			</h1>
		</section>

		<div class="container">
			<h2>Sass</h2>
			<pre>
sass --watch assets/css/main.scss
			</pre>

			<h3>Bourbon</h3>
			<p>
				For a list of available mixins in Bourbon visit the <a href="http://bourbon.io/docs/#complete-list" title="Bourbon documentation">documentation</a>.
			</p>

			<h2>Structure</h2>

			<ul>
				<li>
					Elements
					<ul>
						<li>Header</li>
						<li>Footer</li>
					</ul>
				</li>
				<li>
					Assets
					<ul>
						<li>
							CSS
							<ul>
								<li>Core (General styles e.g. typography and forms)</li>
								<li>Helpers (Variables, mixins and functions)</li>
								<li>Layouts (Page layouts e.g. home)</li>
								<li>Modules (e.g. header, slider and footer)</li>
								<li>Vendor (Plugins -> Bootstrap &amp; Bourbon)</li>
							</ul>
						</li>
						<li>
							Fonts
						</li>
						<li>
							Icons
						</li>
						<li>
							IE
						</li>
						<li>
							Img
						</li>
						<li>
							JS
							<ul>
								<li>Bower_components (all Bower&lsquo;s installed scripts)</li>
								<li>Modules (e.g. slider)</li>
								<li>Vendor (plugins)</li>
								<li>Views (e.g. home, about or contact)</li>
								<li>App.js</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

	</div>

<?php include('elements/footer.php'); ?>
