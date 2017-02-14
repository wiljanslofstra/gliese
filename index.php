<?php include('templates/header.php'); ?>

<style>
    /* DEMO STYLES */
    .demo-block__code {
        background: #eee;
    }
</style>

<div class="container">
    <main id="main" class="demo-block u-mt2 u-mb2 u-sm-mt3 u-sm-mb3 u-mx-auto u-text-center u-capped-lg" tabindex="-1">
        <h1 class="demo-block__heading u-mb2 u-sm-mb3">
            Gliese
        </h1>

        <div class="u-mb2 u-sm-mb3">
            <a class="btn btn--primary u-ml1 u-mr1" href="styleguide" role="button">
                Styleguide
            </a>

            <a class="btn btn--primary u-ml1 u-mr1" href="styleguide/navigation.php" role="button">
                Navigation
            </a>

            <a class="btn btn--primary u-ml1 u-mr1" href="https://github.com/wiljanslofstra/Gliese" target="_blank" role="button">
                Repository
            </a>
        </div>

        <pre class="demo-block__code u-p2 u-text-left"><code>// Install dependencies
npm install

// Change BASE_PATH in ./system/config.php

// Change your project data in ./package.json

// Start
npm start</code></pre>
    </main>
</div>

<?php include('templates/footer.php'); ?>
