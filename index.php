<?php include('templates/header.php'); ?>

<style>
    /* DEMO STYLES */
    .demo-block__code {
        background: #6844d4;
        border-radius: 5px;
    }

    .demo-block__heading {
        font-weight: 300;
        letter-spacing: .025em;
    }

    body {
        background-color: #7950f2;
        color: #fff;
    }

    .btn--primary {
        background-color: #fff;
        color: #7950f2;
        border: 2px solid transparent;
        line-height: calc(2.5rem - 4px);
    }

    .btn--primary:hover,
    .btn--primary:focus {
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
</style>

<div class="container">
    <main id="main" class="demo-block u-mt2 u-mb2 u-sm-mt3 u-sm-mb3 u-mx-auto u-text-center u-capped-lg" tabindex="-1">
        <svg class="u-mb2" width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><ellipse id="a" cx="60" cy="60" rx="60" ry="60"/><mask id="b" x="0" y="0" width="120" height="120" fill="#fff"><use xlink:href="#a"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#FFF" mask="url(#b)" stroke-width="14" xlink:href="#a"/><circle fill="#FFF" cx="41" cy="81" r="12"/><circle fill="#FFF" cx="78" cy="103" r="12"/><circle fill="#FFF" cx="45.5" cy="102.5" r="4.5"/><circle fill="#FFF" cx="20" cy="66" r="6"/><circle fill="#FFF" cx="55" cy="7" r="6"/><circle fill="#FFF" cx="111" cy="72" r="6"/><path d="M65.148 70.444c7.28 6.406 16.427 6.3 25.14 1.065 8.71-5.236 12.696-13.608 10.5-22.97-.78-3.256-2.842-7.504-5.438-11.825l-.303-.504c-1.6-2.663-4.02-3.266-6.685-1.665L78.282 40.6c-2.736 1.645-3.47 4.34-1.955 6.86 1.514 2.52 4.237 3.138 6.973 1.494l3.312-1.99c.288-.174.52-.116.692.172 1.125 1.872 1.976 3.615 2.323 5.17.852 3.702-1.076 7.506-4.82 9.756-4.248 2.553-8.167 2.065-11.237-.598-1.658-1.454-3.302-3.7-7.11-10.036-3.806-6.336-4.974-8.77-5.48-10.917-.953-4.032.384-7.677 4.56-10.186 3.168-1.904 6.15-2.324 9.58-.856 2.65 1.15 4.437.86 6.237-.22 2.664-1.6 3.656-4.843 1.97-7.65-.693-1.153-1.66-1.945-2.84-2.607-5.232-2.833-12.65-2.786-20.57 1.973-8.713 5.235-13.102 13.262-10.863 22.697.997 4.105 2.353 7.014 6.68 14.214 4.325 7.2 6.257 9.763 9.414 12.57z" fill="#FFF"/></g></svg>

        <h1 class="demo-block__heading u-mb2 u-sm-mb3">
            Gliese
        </h1>

        <div class="u-mb2 u-sm-mb3">
            <a class="btn btn--primary btn--icon btn--icon-after u-ml1 u-mr1" href="docs" role="button">
                Docs<?= getIcon('chevron-right'); ?>
            </a>

            <a class="btn btn--primary btn--icon btn--icon-after u-ml1 u-mr1" href="https://github.com/wiljanslofstra/Gliese" target="_blank" role="button">
                Repository<?= getIcon('chevron-right'); ?>
            </a>
        </div>

        <pre class="demo-block__code u-p2 u-text-left"><code>1. npm install / yarn install
2. Change BASE_PATH and BASE_URL in ./system/config.php
3. Change information in ./package.json
4. npm run start-watch</code></pre>
    </main>
</div>

<?php include('templates/footer.php'); ?>
