<?php include('templates/header.php'); ?>

<style>
    /* DEMO STYLES */
    body {
        background: #00d0a1;
        color: #fff;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        line-height: 1.4;
    }

    .demo-block {
        margin: 5rem auto;
        max-width: 500px;
        text-align: center;
    }
        .demo-block__heading {
            font-size: 42px;
            font-weight: 100;
        }

        .demo-block__btn {
            color: #fff;
            margin-left: 5px;
            margin-right: 5px;
            display: inline-block;
            padding: 6px 12px;
            border: 1px solid #fff;
            border-radius: 4px;
            text-decoration: none;
        }
            .demo-block__btn:hover,
            .demo-block__btn:focus {
                background: #fff;
                color: #00d0a1;
            }

        .demo-block__code {
            background: #01b48c;
            text-align: left;
            padding: 1rem;
            margin-top: 2rem;
            border-radius: 4px;
        }

    .css-status:before {
        content: '\274C  CSS not available';
    }
</style>

<div class="demo-block">
    <h1 class="demo-block__heading">Gliese</h1>

    <a class="demo-block__btn" href="styleguide.php">
        Styleguide
    </a>

    <a class="demo-block__btn" href="https://github.com/wiljanslofstra/Gliese" target="_blank">
        Repository
    </a>

    <pre class="demo-block__code"><code>// Install dependencies
npm install

// Change BASE_PATH in ./system/config.php

// Change your project data in ./package.json

// Start
npm start</code></pre>

    <p>
        Status:
        <div class="js-status">&#x274c; Javascript not available</div>
        <div class="css-status"></div>
    </p>
</div>

<?php include('templates/footer.php'); ?>
