<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
    <link rel="stylesheet" href="<?= base_url('styles/properties.css') ?>">
    <title>Document</title>
</head>

<body>

    <?php include __DIR__ . '/components/nav.php'; ?>


    <div class="properties-container">
        <div class="properties-searchBar">
            <form action="">
                <input class="properties-searchBar-location" type="text" id="location" name="location"
                    placeholder="LOCATION">
                <select name="price" id="price" class="properties-searchBar-options">
                    <option value="">TYPE</option>
                    <option value="">Property Type</option>
                    <option value="">Property Type</option>
                    <option value="">Property Type</option>
                    <option value="">Property Type</option>
                </select>

                <select name="price" id="price" class="properties-searchBar-price">
                    <option value="">PRICE</option>
                    <option value="">Property price</option>
                    <option value="">Property price</option>
                    <option value="">Property price</option>
                    <option value="">Property price</option>
                </select>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </form>
        </div>

        <hr>

        <div class="properties-results">
            <?php if (!empty($properties)): ?>
                <div class="properties-list">

                    <?php foreach ($properties as $property): ?>
                        <div class="properties-result-card">
                            <!-- Display the first image of the property -->
                            <?php
                            if (!empty($property['photos'])) {
                                $photo = $property['photos'][0];
                                $imageSrc = base_url($photo['photo_path']);
                            } else {
                                $imageSrc = base_url('assets/placeholder.png');
                            }
                            ?>
                            <img src="<?= esc($imageSrc) ?>" alt="Property Image">
                            <div class="properties-result-card-favorite">
                                <h3><?= esc($property['title']) ?></h3>
                                <?php if (session()->get('is_logged_in')): ?>
                                    <?php
                                    $isFavorited = false;
                                    foreach ($favorites as $favorite) {
                                        if ($favorite['property_id'] === $property['id']) {
                                            $isFavorited = true;
                                            break;
                                        }
                                    }
                                    ?>
                                    <?php if ($isFavorited): ?>
                                        <a href="<?= base_url('/favorites/remove/' . $property['id']) ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                        </a>
                                    <?php else: ?>
                                        <a href="<?= base_url('/favorites/add/' . $property['id']) ?>" title="Add to Favorites">
                                            <!-- Empty Heart Icon -->
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                class="bi bi-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                            </svg>
                                        </a>
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                            <div class="properties-result-card-location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <p><?= esc($property['location']) ?></p>
                            </div>
                            <h4>Php <?= number_format($property['price'], 2) ?></h4>
                        </div>
                    <?php endforeach; ?>

                </div>
            <?php else: ?>
                <div class="no-properties">
                    <h5>No properties available at the moment. Please check back later.</h5>
                </div>
            <?php endif; ?>
            <div class="properties-map">
                <img src="<?= base_url('assets/map.png') ?>" alt="">
            </div>
        </div>
    </div>

    <?php include __DIR__ . '/components/footer.php'; ?>

</body>

</html>