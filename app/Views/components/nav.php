<nav>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <div>
        <a href="<?= base_url('/') ?>" class="nav-logo">ELLIURO</a>
    </div>
    <div class="nav-links">
        <a class="nav-links-effect" href="<?= base_url('/properties') ?>">EXPLORE PROPERTIES</a>
        <a class="nav-links-effect" href="<?= base_url('/listing-property') ?>">LIST PROPERTY</a>

        <?php if (session()->get('is_logged_in')): ?>


            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
            </a>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 
                            11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 
                            7 0 0 0 8 1z" />
                    </svg>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="<?= base_url('/profile') ?>">Profile</a></li>
                    <li><a class="dropdown-item" href="<?= base_url('/my-properties') ?>">My Properties</a></li>
                    <li><a class="dropdown-item" href="<?= base_url('/logout') ?>">Logout</a></li>
                </ul>
            </div>

        <?php else: ?>
            <a href="<?= base_url('/register') ?>" class="nav-link-singup">SIGNUP</a>
            <a href="<?= base_url('/login') ?>" class="nav-link-singup">LOGIN</a>
        <?php endif; ?>
    </div>
</nav>