<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('styles/auth.css') ?>">
    <link rel="stylesheet" href="<?= base_url('styles/main.css') ?>">
    <title>Document</title>
</head>

<body>
    <?php include __DIR__ . '/components/nav.php'; ?>

    <div class="auth-container">
        <h1>SIGN IN</h1>

        <form action="<?= base_url('/login/submit') ?>" method="post" class="auth-form">
            <input type="email" name="email" id="email" placeholder="EMAIL" required>
            <input type="password" name="password" id="password" placeholder="PASSWORD" required>
            <button type="submit">SIGN IN</button>
        </form>
        <div class="auth-login">
            <p>Don't have an account? <a href="<?= base_url('/register') ?>">Sign up</a></p>
        </div>
    </div>



    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>