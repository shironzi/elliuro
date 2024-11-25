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
        <form action="<?= base_url('/review-listing/update') ?>" method="post">
            <div class="form-title-price">
                <div class="form-group">
                    <label for="title">TITLE</label>
                    <input type="text" class="title-location-width" name="title" id="title"
                        value="<?= esc($property['title']) ?>"
                        placeholder="Begin by giving your property an appealing title. Make it attention-grabbing yet informative"
                        required>
                </div>
                <div class="form-group">
                    <label for="price">PRICE <br> <span></span></label>
                    <input type="number" name="price" id="price" value="<?= esc($property['price']) ?>" required>
                </div>
            </div>
            <label for="location">LOCATION</label>
            <input type="text" class="title-location-width" name="location" id="location"
                value="<?= esc($property['location']) ?>" required>
            <label for="description">DESCRIPTION</label>
            <textarea name="description" id="description" required><?= esc($property['description']) ?></textarea>
            <button type="submit">SUBMIT LISTING</button>
        </form>
    </div>

    <?php if (session()->has('message')): ?>
        <div class="alert alert-success">
            <?= session('message') ?>
        </div>
    <?php endif; ?>

    <?php if (session()->has('errors')): ?>
        <div class="alert alert-danger">
            <?php foreach (session('errors') as $error): ?>
                <p><?= esc($error) ?></p>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>