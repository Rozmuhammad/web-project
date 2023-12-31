<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/project-work-1/web-project/style/koala.css">
    <link rel="icon" href="/project-work-1/web-project/image/space-Logo.png">
    <title>Koala</title>
</head>

<body class="loading">
    <header class="transition">
        <div class="inner">
            <div class="logo"><a href="https://www.instagram.com" target="_blank">
                    <img src="/project-work-1/web-project/image/insta.webp" alt="">
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img src="/project-work-1/web-project/image/xSocial.webp" alt="">
                </a>
                <a href="https://web.telegram.org/a/" target="_blank">
                    <img src="/project-work-1/web-project/image/teleg.webp" alt="">
                </a>
            </div>
            <div class="burger"></div>
            <nav>
                <a href="mail-sign.html">mail-sign</a>
                <a href="mail-signup.html">mail-signup</a>
            </nav>
            <a href="https://images.wallpaperscraft.com/image/single/number_zero_frame_121411_3840x2400.jpg"
                class="donate-link">ZERO</a>
        </div>
    </header>
    <div class="index-bg-video">
        <div class="video-bg">
            <video loop autoplay muted>
                <source src="/project-work-1/web-project/video/space.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <main class="transition-1">
        <div id="main-content">
            <div class="main-user">
                <h1>USER DATA</h1>
                <img src="/project-work-1/web-project/image/moon.png" alt="">
            </div>
            <div class="first-block">
                <div class="firstname">
                    <h3 class="main-info-head">Firstname:</h3>
                    <p class="main-info" id="userFirstname">
                        <?php echo isset($_SESSION['firstname']) ? $_SESSION['firstname'] : ''; ?>
                    </p>
                </div>
                <div class="lastname">
                    <h3 class="main-info-head">Lastname:</h3>
                    <p class="main-info">
                        <?php echo isset($_SESSION['lastname']) ? $_SESSION['lastname'] : ''; ?>
                    </p>
                </div>
                <div class="birthday">
                    <h3 class="main-info-head">Birthday:</h3>
                    <p class="main-info">
                        <?php echo isset($_SESSION['birthday']) ? $_SESSION['birthday'] : ''; ?>
                    </p>
                </div>
            </div>
            <div class="second-block">
                <div class="user-email">
                    <h3 class="main-info-head">Email address:</h3>
                    <p class="main-info">
                        <?php echo isset($_SESSION['email']) ? $_SESSION['email'] : ''; ?>
                    </p>
                </div>
                <div class="reserve-e">
                    <h3 class="main-info-head">Reserve email:</h3>
                    <p class="main-info">
                        <?php echo isset($_SESSION['reserve']) ? $_SESSION['reserve'] : ''; ?>
                    </p>
                </div>
                <div class="password">
                    <h3 class="main-info-head">Password:</h3>
                    <input class="main-info" type="password" id="userPassword"
                        value="<?php echo isset($_SESSION['password']) ? $_SESSION['password'] : ''; ?>" readonly>
                    <button class="button-show" onclick="togglePasswordVisibility()">Show Password</button>
                </div>
            </div>
            <div class="main-arrow">
                <div class="inner-arrow">
                    <a href="space-map.html"><img src="/project-work-1/web-project/image/grey-arrow.png" alt=""></a>
                </div>
            </div>
        </div>
    </main>
    <script src="/project-work-1/web-project/javaScript/koala.js"></script>
</body>

</html>