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
        <h1>SIGN UP</h1>

        <form action="" class="auth-form">
            <input type="text" name="name" id="name" placeholder="NAME" required>
            <input type="email" name="email" id="email" placeholder="EMAIL" required>
            <input type="password" name="password" id="password" placeholder="PASSWORD" required>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="CONFIRM PASSWORD"
                required>
            <div class="auth-form-custom">
                <input type="date" name="birthday" id="birthday" placeholder="BIRTHDAY" required>
                <select name="gender" id="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button type="submit">SIGN UP</button>
        </form>

        <div class="auth-login">
            <p>Already have an account? <a href="<?= base_url('/login') ?>">Sign in</a></p>
        </div>
    </div>
    <?php include __DIR__ . '/components/footer.php'; ?>
</body>

</html>