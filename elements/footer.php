
		<script src="assets/js/vendor/require.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			var ENV = 'development',
				PAGE = 'home';

			requirejs.config({
				baseUrl: 'assets/js/',
				urlArgs: "v=1",

				config: {
					
				}
			});

			var jqueryVersion = ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) ? '2.1.1' : '1.11.1';
			require(['vendor/jquery/jquery.' + jqueryVersion + '.min'], function () {
				require(['app'], function(App) {
					App.init();
				}); 
			});
		</script>
	</body>
</html>