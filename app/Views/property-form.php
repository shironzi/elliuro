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
    <?php include __DIR__ . '/components/nav.php'; ?>
    <div class="property-form-container">
        <h1>LETS BEGIN WITH THE BASICS</h1>
        <form action="<?= base_url('/property-form/submit') ?>" method="post">
            <div class="form-title-price">
                <div class="form-group">
                    <label for="title">TITLE</label>
                    <input type="text" class="title-location-width" name="title" id="title"
                        placeholder="Begin by giving your property an appealing title. Make it attention-grabbing yet informative"
                        required>
                </div>
                <div class="form-group">
                    <label for="price">PRICE <br> <span></span></label>
                    <input type="number" name="price" id="price" required>
                </div>
            </div>
            <label for="location">LOCATION</label>
            <input type="text" class="title-location-width" name="location" id="location" required>
            <label for="description">DESCRIPTION</label>
            <textarea name="description" id="description" required></textarea>
            <button type="submit">NEXT</button>
        </form>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>