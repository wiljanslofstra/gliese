        <footer class="footer">

        </footer>

        <script>
            var POLYFILLS_PATH = '<?= getRevedFile('/assets/dist/javascript/polyfills.js'); ?>';
            window.App = {};
        </script>

        <script defer src="<?= getRevedFile('/assets/dist/javascript/manifest.js'); ?>"></script>
        <script defer src="<?= getRevedFile('/assets/dist/javascript/vendor.js'); ?>"></script>
        <script defer src="<?= getRevedFile('/assets/dist/javascript/main.js'); ?>"></script>
    </body>
</html>
