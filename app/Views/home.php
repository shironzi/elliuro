<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Message</title>
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
</head>

<body>
    <?php include __DIR__ . '/components/nav.php'; ?>
    <div class="banner">
        <div>
            <h1>Covelly Estates</h1>
            <p>Your Gateway to Luxury Living and
                <span>Exceptional Real Estate Opportunities</span>
            </p>
        </div>
        <div class="banner-slider">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">
            <img class="banner-slider-image" src="<?= base_url('assets/house.png') ?>" alt="">

        </div>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>