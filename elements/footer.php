
		<script src="assets/dist/js/vendor/require.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			var ENV = 'development',
				PAGE = 'home';

			requirejs.config({
				baseUrl: 'assets/dist/js/',
				urlArgs: "v=1",

				paths: {
					'plugins': 'plugins'
				},

				shim: {
					'app': ['plugins']
				}
			});

			require(['app'], function (App) {
				App.init(); 
			});
		</script>
	</body>
</html>