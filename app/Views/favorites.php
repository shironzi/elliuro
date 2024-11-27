<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
    <link rel="stylesheet" href="<?= base_url('styles/favorites.css') ?>">
    <title>Document</title>
</head>

<body>
    <?php include __DIR__ . '/components/nav.php'; ?>

    <div class="favorite-container">
        <h1>FAVORITES</h1>
        <div>
            <div class="property-card">
                <div class="property-card-details">
                    <img src="<?= base_url('/assets/house1.png') ?>" alt="">
                    <div>
                        <h4>Elegant garden maisonette with optimal pool in the best location in Manila</h4>
                        <p>Sampaloc, Manila Philippines</p>
                        <p>Php 1,500,000.00</p>
                    </div>
                </div>
                <div class="property-card-navigation">
                    <a href="">View</a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff0000  " class="bi bi-x"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>