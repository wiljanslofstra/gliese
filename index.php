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
        font-size: 2.25rem;
        font-weight: 300;
        letter-spacing: .025em;
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
    <main id="main" class="demo-block u-capped-md" tabindex="-1">
        <div class="u-p2 u-md-p3">
            <h1 class="demo-block__heading u-mb2 u-sm-mb3">
                Gliese
            </h1>

            <ul class="list">
                <li><a href="dev/docs/snippets.php">Snippets</a></li>
                <li><a href="dev/docs/base-styles.php">Base styles</a></li>
                <li>
                    Components
                    <ul>
                        <li><a href="dev/docs/autocomplete.php">Autocomplete</a></li>
                        <li><a href="dev/docs/cart.php">Cart</a></li>
                        <li><a href="dev/docs/cms-content.php">CMS content</a></li>
                        <li><a href="dev/docs/icons.php">Icons</a></li>
                        <li><a href="dev/docs/push-notifications.php">Push notifications</a></li>
                        <li><a href="dev/docs/upload-field.php">Upload field</a></li>
                    </ul>
                </li>
                <li>
                    Tools
                    <ul>
                        <li><a href="dev/tools/form-generator.php">Form generator</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <pre class="demo-block__code u-p2 u-text-left"><code>1. npm install / yarn install
2. Change BASE_PATH and BASE_URL in ./system/config.php
3. Change information in ./package.json
4. npm run start-watch</code></pre>
    </main>
</div>

<?php include('templates/footer.php'); ?>
