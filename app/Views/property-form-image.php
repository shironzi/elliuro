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

    <div class="form-image-container">
        <h1>Showcase Your Property with Stunning Photos</h1>
        <p>Upload high-quality images of your property to capture its best features and appeal to potential buyers or
            renters.</p>
        <form action="<?= base_url('/property-form-image/submit') ?>" method="post" enctype="multipart/form-data">
            <div class="form-images">
                <div>
                    <label for="image1" class="details-image-1">
                        <svg id="image1-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#b08d57"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        <img id="1" class="preview-image" style="display: none;" />
                    </label>
                    <input class="details-image-1 custom-image-effect" type="file" name="image1" id="image1"
                        onchange="previewImage(event, '1', 'image1-svg')" required>
                </div>

                <div class="form-Images-cutom">
                    <div>
                        <label for="image2" class="details-image-2">
                            <svg id="image2-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                fill="#b08d57" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <img id="123123" class="preview-image" style="display: none;" />
                        </label>
                        <input class="" type="file" name="image2" id="image2" accept="image/jpeg, image/png, image/gif"
                            onchange="previewImage(event, '123123', 'image2-svg')">

                    </div>
                    <div>
                        <label for="image3" class="details-image-2">
                            <svg id="image3-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                fill="#b08d57" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <img id="3" class="preview-image" style="display: none;" />
                        </label>
                        <input class="details-image-2 custom-image-effect" type="file" name="image3" id="image3"
                            accept="image/jpeg, image/png, image/gif" onchange="previewImage(event, '3', 'image3-svg')">
                    </div>
                </div>

                <div class="custom">
                    <label for="image4" class="details-image-3">
                        <svg id="image4-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#b08d57"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        <img id="4" class="preview-image" style="display: none;" />
                    </label>
                    <input class="details-image-3 custom-image-effect" type="file" name="image4" id="image4"
                        onchange="previewImage(event, '4', 'image4-svg')">
                </div>
            </div>
            <button type="submit">ADD PHOTOS</button>
        </form>
    </div>

    <script>
        function previewImage(event, previewId, svgId) {
            var reader = new FileReader();
            reader.onload = function () {
                var output = document.getElementById(previewId);
                var hide = document.getElementById(svgId);
                hide.style.display = 'none';
                output.src = reader.result;
                output.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    </script>

    <?php include __DIR__ . '/components/footer.php' ?>
</body>

</html>