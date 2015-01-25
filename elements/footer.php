
		</div>

		<script src="assets/js/vendor/plugins.js" type="text/javascript"></script>
		<script src="assets/js/core.js" type="text/javascript"></script>

		<?php foreach($LOAD_JS as $js) : ?>
			<script src="assets/js/<?= $js; ?>" type="text/javascript"></script>
		<?php endforeach; ?>
		
	</body>
</html>
