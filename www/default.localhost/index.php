<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
	<title>Супер новости!</title>
	<link rel="stylesheet" href="styles.css">
	<meta charset="utf-8">
</head>

<body>
	<div class="body">
		<script src="jquery-3.7.0.min.js"></script>

		<script>
			function postData() {
				$.ajax({
					type: "POST",
					url: "send_report.php",
					data: $('#myForm').serialize()
				}).done(function (result) {
					// do something
				});
			}
		</script>
		<?php
		$link = mysqli_connect("localhost", "root", "Baton20043748", "reports_db");
		if (mysqli_connect_errno())
			echo "Подключение невозможно: " . mysqli_connect_error();
		mysqli_query($link, "SET NAMES 'utf8'");
		$query = mysqli_query($link, 'SELECT * FROM reports') or die(mysqli_error($link));
		for ($data = []; $row = mysqli_fetch_assoc($query); $data[] = $row);
		?>
		<div>
			<form id="myForm">
				<p><input name="username" type="text" placeholder="Как Вас зовут?"></input></p>
				<p><textarea name="report_text" placeholder="Что у Вас нового?" rows="7" cols="60"></textarea></p>
				<input class="button_background" type="submit" onclick="postData()" value="Опубликовать">
			</form>
		</div>

		<div id="root"></div>
		<div id="loading"> loading... </div>
		<script>
			var passedArray = <?php echo json_encode($data); ?>;
		</script>
		<script src="infinite_scrolling.js"> </script>
	</div>
</body>

</html>