<?php
$text = $_POST["report_text"];
$username = $_POST["username"];


$link = mysqli_connect("localhost", "root", "Baton20043748", "reports_db");
if (mysqli_connect_errno()) echo "Подключение невозможно: ".mysqli_connect_error();
mysqli_query($link, "SET NAMES 'utf8'");
$currDate = date("Y/m/d");
$query = "INSERT INTO `reports` (`Username`, `Date`, `Report_Text`) VALUES ('$username', '$currDate', '$text')";
mysqli_query($link, $query) or die(mysqli_error($link));

?>