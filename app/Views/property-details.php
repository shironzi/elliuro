<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('/styles/main.css') ?>">
    <link rel="stylesheet" href="<?= base_url('/styles/properties.css') ?>">
    <link rel="stylesheet" href="<?= base_url('/styles/property-details.css') ?>">

    <title>Document</title>
</head>

<body>
    <?php include __DIR__ . '/components/nav.php'; ?>

    <div class="properties-details-container">
        <div class="properties-details-images">
            <img class="details-image-1 custom-image-effect" src="<?= base_url('/assets/house1.png') ?>" alt="">
            <div>
                <img class="details-image-2 custom-image-effect" src="<?= base_url('/assets/house1.png') ?>" alt="">
                <img class="details-image-2 custom-image-effect" src="<?= base_url('/assets/house1.png') ?>" alt="">
            </div>
            <img class="details-image-3 custom-image-effect" src="<?= base_url('/assets/house1.png') ?>" alt="">
        </div>
        <div class="details-header">
            <h1>LUXE HAVEN RESIDENCES</h1>
            <div class="details-header-info">
                <div>
                    <div class="details-header-location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white"
                            class="bi bi-geo-alt-fill properties-result-card-location" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <p>Sampaloc, Manila Philippines</p>
                    </div>
                    <h4>Php 13,500,000.00</h4>
                </div>
                <div>
                    <button>CONTACT BROKER</button>
                </div>
            </div>
            <div>
                <div class="properties-header-icons">
                    <div>
                        <img src="<?= base_url('assets/bed-icon.png') ?>" alt="">
                        <p>5 Bedrooms</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/bathtub-icon.png') ?>" alt="">
                        <p>4 Toilet & Bath</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/pool-icon.png') ?>" alt="">
                        <p>Swimming Pool</p>
                    </div>
                    <div>
                        <img src="<?= base_url('assets/car-icon.png') ?>" alt="">
                        <p>4 Car Port</p>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="container">
            <div class="property-description">
                <p><span>Luxe Haven Residences</span> presents an extraordinary living experience, situated in the
                    serene
                    neighborhood of Sampaloc, Manila. This modern masterpiece exudes sophistication and comfort,
                    featuring expansive spaces that seamlessly blend indoor luxury with outdoor tranquility. With 5
                    spacious bedrooms, 4 elegantly designed bathrooms, a refreshing swimming pool, and a 4-car port,
                    this residence perfectly balances form and function. The open-plan layout invites natural light,
                    highlighting high-end finishes and contemporary architecture throughout. <br />
                    Enjoy moments of relaxation in the exquisite bath area or host gatherings in the spacious living and
                    dining spaces. The property’s state-of-the-art amenities and lush surroundings create an
                    unparalleled ambiance that caters to both relaxation and entertainment. Embrace the prestige of Luxe
                    Haven Residences – where luxury meets timeless elegance.</p>
            </div>
            <h1>NEARBY ESTABLISHMENTS</h1>
            <div class="establishment-grid">
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
                <div class="establishment-card">
                    <img src="<?= base_url('assets/park-icon.png') ?>" alt="">
                    <p>PARKS</p>
                </div>
            </div>
            <div class="getInTouch">
                <div class="getInTouch-details">
                    <h1>INVEST YOUR FUTURE WITH US</h1>
                    <p>Unlock access to premium properties and expert guidance tailored to your financial goals. Start
                        building
                        a secure future with a trusted partner focused on your success.</p>

                    <a href="">Explore Investment Opportunities</a>
                </div>
                <div class="getInTouch-overlay"></div>
                <img src="<?= base_url('assets/analog-landscape-buildings.png') ?>" alt="">
            </div>
            <h1>PROPERTIES YOU MIGHT LIKE</h1>
            <div class="recommendation">
                <div class="properties-result-card">
                    <img src="<?= base_url('assets/house1.png') ?>" alt="">
                    <div class="properties-result-card-favorite">
                        <h3>Elegant garden maisonette with optimal pool in the best location in Manila</h3>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"
                                class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </button>
                    </div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-geo-alt-fill properties-result-card-location" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <p>Sampaloc, Manila Philippines</p>
                    </div>
                    <h4>Php 1,500,000.00</h4>
                    <h4>1200sqm 5 rooms</h4>
                </div>
                <div class="properties-result-card">
                    <img src="<?= base_url('assets/house1.png') ?>" alt="">
                    <div class="properties-result-card-favorite">
                        <h3>Elegant garden maisonette with optimal pool in the best location in Manila</h3>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"
                                class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </button>
                    </div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-geo-alt-fill properties-result-card-location" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <p>Sampaloc, Manila Philippines</p>
                    </div>
                    <h4>Php 1,500,000.00</h4>
                    <h4>1200sqm 5 rooms</h4>
                </div>
                <div class="properties-result-card">
                    <img src="<?= base_url('assets/house1.png') ?>" alt="">
                    <div class="properties-result-card-favorite">
                        <h3>Elegant garden maisonette with optimal pool in the best location in Manila</h3>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"
                                class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </button>
                    </div>
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-geo-alt-fill properties-result-card-location" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                        <p>Sampaloc, Manila Philippines</p>
                    </div>
                    <h4>Php 1,500,000.00</h4>
                    <h4>1200sqm 5 rooms</h4>
                </div>

            </div>
        </div>
    </div>

    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>