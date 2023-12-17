<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из формы
$first_name = $_POST['firstName'];
$last_name = $_POST['lastName'];
$birth_date = $_POST['selectedDate'];
$gender = isset($_POST['gender']) ? 'Male' : 'Female';
$email = $_POST['emailName'] . $_POST['emailDomain'];
$password = $_POST['passwordName'];
$reserve_email = $_POST['rezervName'];

// SQL-запрос для вставки данных в таблицу
$sql = "INSERT INTO users (first_name, last_name, birth_date, gender, email, password, reserve_email)
        VALUES ('$first_name', '$last_name', '$birth_date', '$gender', '$email', '$password', '$reserve_email')";

if ($conn->query($sql) === TRUE) {
    header('Location: successful-reg.html');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>