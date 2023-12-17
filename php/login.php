<?php
ob_start();
session_start();
require "conect-log.php";

//login
if (isset($_POST['go-in'])) {
    $email = $_POST['le'];
    $password = $_POST['lp'];

    if (!$email || !$password) {
        header('Location: error-mailPassword.html');
        exit;
    }

    $request = $db->prepare('SELECT * FROM users WHERE email = ? AND password = ?');
    $request->execute([$email, $password]);

    $user = $request->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION['le'] = $email;
        $_SESSION['firstname'] = $user['first_name'];
        $_SESSION['lastname'] = $user['last_name'];
        $_SESSION['birthday'] = $user['birth_date'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['reserve'] = $user['reserve_email'];
        $_SESSION['password'] = $user['password'];

        header('Location: successful.html');
        exit;
    } else {
        header('Location: error-mailPassword.html');
        exit;
    }
}


// if (isset($_POST['reset'])) {
//     $rest = $_POST['email'];

//     if (!$rest) {
//         echo "непрвильный email";
//     } else {
//         echo "правильный email";
//         header('Refresh:2; reset-mail.php');
//     }
// }




?>