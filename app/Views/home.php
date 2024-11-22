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
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>
            <div class="banner-slider-card">
                <h4>REAL ESTATE</h4>
            </div>

        </div>
    </div>

    <div class="properties">
        <h1>FEATURED PROPERTIES</h1>
        <hr>
        <div class="properties-card">
            <div class="properties-details custom-padding-right">
                <h2>Luxe Haven Residences</h2>


                <p>Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled
                    comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the
                    perfect
                    retreat for refined living.</p>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/pool-icon.png') ?>" alt="">
                        <p>Swimming Pool</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bed-icon.png') ?>" alt="">
                        <p>5 Room</p>
                    </div>
                </div>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/car-icon.png') ?>" alt="">
                        <p>4 car Port</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bathtub-icon.png') ?>" alt="">
                        <p>4 Bathrooms</p>
                    </div>
                </div>

                <div class="properties-details-listing">
                    <p>PHP 5,000,000.0</p>
                    <a href="">VIEW LISTING</a>
                </div>
            </div>

            <div class="properties-image custom-vl-left">
                <img src="<?= base_url('assets/estate1.png') ?>" alt="">
            </div>
        </div>

        <div class="properties-card">
            <div class="properties-image custom-vl-right">
                <img src="<?= base_url('assets/estate1.png') ?>" alt="">
            </div>
            <div class="properties-details custom-padding-left">
                <h2>Luxe Haven Residences</h2>


                <p>Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled
                    comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the
                    perfect
                    retreat for refined living.</p>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/pool-icon.png') ?>" alt="">
                        <p>Swimming Pool</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bed-icon.png') ?>" alt="">
                        <p>5 Room</p>
                    </div>
                </div>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/car-icon.png') ?>" alt="">
                        <p>4 car Port</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bathtub-icon.png') ?>" alt="">
                        <p>4 Bathrooms</p>
                    </div>
                </div>

                <div class="properties-details-listing ">
                    <p>PHP 5,000,000.0</p>
                    <a href="">VIEW LISTING</a>
                </div>
            </div>
        </div>

        <div class="properties-card">
            <div class="properties-details custom-padding-right">
                <h2>Luxe Haven Residences</h2>


                <p>Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled
                    comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the
                    perfect
                    retreat for refined living.</p>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/pool-icon.png') ?>" alt="">
                        <p>Swimming Pool</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bed-icon.png') ?>" alt="">
                        <p>5 Room</p>
                    </div>
                </div>

                <div class="properties-details-icons">
                    <div>
                        <img src="<?= base_url('assets/car-icon.png') ?>" alt="">
                        <p>4 car Port</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bathtub-icon.png') ?>" alt="">
                        <p>4 Bathrooms</p>
                    </div>
                </div>

                <div class="properties-details-listing">
                    <p>PHP 5,000,000.0</p>
                    <a href="">VIEW LISTING</a>
                </div>
            </div>

            <div class="properties-image custom-vl-left">
                <img src="<?= base_url('assets/estate1.png') ?>" alt="">
            </div>
        </div>
    </div>
    <div class="getTouch">
        <button>Touch</button>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>