<?php
session_start();
?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Магазин игрушек</title>
  <link rel="stylesheet" href="style.css"> <!-- подключаем файл со стилями -->
</head>

<body>
  <header>
    <h1>Добро пожаловать в наш магазин игрушек</h1>
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Категории</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  </header>
  <script src="jquery-3.7.0.min.js"></script>
    <!-- <script>
			function postData() {
				$.ajax({
					type: "POST",
					url: "send_purchase.php",
					data: $('#cart_id').serialize()
				}).done(function (result) {
					// do something
				});
			}
		</script> -->
  <div class="cart" id = "cart_id">
    <h2>Корзина</h2>
    <ul class="cart-items">
      <!-- В этот список будут добавляться товары -->
    </ul>
    <p class="cart-total">Итого: $0</p>
    <button class="checkout-btn">Оформить заказ</button>
  </div>

  <main>
    
    <?php
    $link = mysqli_connect("localhost", "root", "Baton20043748", "toys_db");
    if (mysqli_connect_errno())
      echo "Подключение невозможно: " . mysqli_connect_error();
    mysqli_query($link, "SET NAMES 'utf8'");
    $query = mysqli_query($link, 'SELECT * FROM toys') or die(mysqli_error($link));
    for ($data = []; $row = mysqli_fetch_assoc($query); $data[] = $row)
      ;
    ?>
    <center>
      <h2>Новые поступления</h2>
    </center>
    <section class="new-products">
      <div id="root" class="products-container">



        <!-- Здесь будут появляться новые продукты -->
      </div>
    </section>
  </main>
 
  <div id="loading"> loading... </div>
  <script>
    var passedArray = <?php echo json_encode($data); ?>;
  </script>
   <script src="card_controller.js"> </script>
  <script src="infinite_scrolling_toys.js"> </script>
  <footer>
    <p>&copy; 2021 Магазин игрушек. All rights reserved.</p>
  </footer>
</body>

</html>