<?php
// $text = $_POST["report_text"];
// $username = $_POST["username"];
$json = file_get_contents('php://input');

// Декодируем JSON данные в массив PHP
//$data = json_decode($json, true);

// Делаем что-то с массивом данных
//echo $data[0];

$link = mysqli_connect("localhost", "root", "Baton20043748", "toys_db");
if (mysqli_connect_errno()) echo "Подключение невозможно: ".mysqli_connect_error();
mysqli_query($link, "SET NAMES 'utf8'");
$query = "INSERT INTO `purchases` (`toys_json`) VALUES ('$json')";
mysqli_query($link, $query) or die(mysqli_error($link));

?>