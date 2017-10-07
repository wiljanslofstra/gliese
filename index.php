<?php include('templates/header.php'); ?>

<style>
    /* DEMO STYLES */
    html,
    body {
        height: 100%;
    }

    body {
        background: #ccc url(/assets/dist/images/bg.jpg) no-repeat center center;
        background-size: cover;
    }

    .demo-block {
        background-color: #fff;
        border-radius: 1rem;
        margin: 2rem auto;
    }

    .demo-block__code {
        background: #eee;
        border-radius: 0 0 1rem 1rem;
        margin: 0;
        border-bottom: 3px solid #aaa;
    }

    .demo-block__heading {
        font-size: 3rem;
        font-weight: 300;
        letter-spacing: .025em;
    }

    .btn--primary {
        background-color: #fff;
        color: #888;
        border: 2px solid #ddd;
        line-height: calc(2.5rem - 4px);
        border-radius: 5rem;
    }

    .btn--primary:hover,
    .btn--primary:focus {
        background-color: #ddd;
        border: 2px solid #ddd;
        color: #555;
    }

    .demo-block .btn {
        margin-left: .33rem;
        margin-right: .33rem;
    }

    @media (min-height: 480px) {
        .demo-block {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            margin: 0;
        }
    }
</style>

<div class="container">
    <main id="main" class="demo-block u-text-center u-capped-md" tabindex="-1">
        <div class="u-p2 u-md-p3">
            <h1 class="demo-block__heading u-mb2 u-sm-mb3">
                Gliese
            </h1>

            <div>
                <a class="btn btn--primary btn--icon btn--icon-after" href="dev/docs" role="button">
                    Docs<?= getIcon('chevron-right'); ?>
                </a>

                <a class="btn btn--primary btn--icon btn--icon-after" href="dev/tools" role="button">
                    Tools<?= getIcon('chevron-right'); ?>
                </a>

                <a class="btn btn--primary btn--icon btn--icon-after" href="https://github.com/wiljanslofstra/Gliese" target="_blank" role="button">
                    Repository<?= getIcon('chevron-right'); ?>
                </a>
            </div>
        </div>

        <pre class="demo-block__code u-p2 u-text-left"><code>1. npm install / yarn install
2. Change BASE_PATH and BASE_URL in ./system/config.php
3. Change information in ./package.json
4. npm run start-watch</code></pre>
    </main>
</div>

<?php include('templates/footer.php'); ?>
