<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Message</title>
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
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
    <div class="getInTouch">
        <div class="getInTouch-details">
            <h1>INVEST YOUR FUTURE WITH US</h1>
            <p>Unlock access to premium properties and expert guidance tailored to your financial goals. Start building
                a secure future with a trusted partner focused on your success.</p>

            <a href="">Explore Investment Opportunities</a>
        </div>
        <div class="getInTouch-overlay"></div>
        <img src="<?= base_url('assets/analog-landscape-buildings.png') ?>" alt="">
    </div>
    <div class="reviews">
        <h1>WHAT OUR CLIENTS ARE SAYING</h1>
        <div class="reviews-card-container">
            <div class="reviews-card">
                <h2>This is the best real state listing website</h2>
                <div class="reviews-card-stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
                <h4>MARIUS</h4>
            </div>
            <div class="reviews-card">
                <h2>This is the best real state listing website</h2>
                <div class="reviews-card-stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
                <h4>JUSTINE</h4>
            </div>
            <div class="reviews-card">
                <h2>This is the best real state listing website</h2>
                <div class="reviews-card-stars">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
                <h4>MARIUS</h4>
            </div>

        </div>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>