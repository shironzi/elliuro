<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
    <link rel="stylesheet" href="<?= base_url('styles/listing-property.css') ?>">
    <title>Document</title>
</head>

<body>
    <?php include __DIR__ . '/components/nav.php' ?>

    <div class="getStarted-container">
        <img src="<?= base_url('assets/get-started.png') ?>" alt="">

        <div class="getStated-description">
            <h1>
                Unlock the Potential of Your Property with Us
            </h1>
            <p>Whether you’re looking to rent, lease, or sell, our platform makes it easy to connect with the right
                tenants
                and buyers. Start listing your property today and take the first step toward reaching your real estate
                goals.</p>
            <a href="<?= base_url('/property-form') ?>">GET STARTED</a>
        </div>
    </div>

    <?php include __DIR__ . '/components/footer.php' ?>
</body>

</html>