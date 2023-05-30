// Получение элементов DOM
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.querySelector('.cart-total');
const checkoutBtnEl = document.querySelector('.checkout-btn');
const productsEl = document.querySelector('.products-container');

// Объект корзины для хранения товаров и общей стоимости
const cart = {
  items: [],
  total: 0,
};

// Функция для добавления товара в корзину
function addToCart(product) {
  // Проверяем, есть ли товар уже в корзине
  const existingItem = cart.items.find(item => item.id === product.id);

  if (existingItem) {
    // Если товар уже есть в корзине, увеличиваем количество
    existingItem.quantity += 1;
  } else {
    // Иначе добавляем товар в корзину
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  // Обновляем содержимое корзины
  updateCart();
}

// Функция для обновления содержимого корзины
function updateCart() {
  // Очищаем список товаров в корзине
  cartItemsEl.innerHTML = '';

  // Заполняем список товаров в корзине новыми товарами
  cart.items.forEach(item => {
    const liEl = document.createElement('li');
    liEl.innerText = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
    liEl.classList.add('cart-inner-text');
    cartItemsEl.appendChild(liEl);
  });

  // Обновляем общую стоимость товаров в корзине
  cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  cartTotalEl.innerText = `Итого: $${cart.total}`;
}

// Обработчик клика на кнопке "Добавить в корзину"
productsEl.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart-btn')) {
    // Получаем ID товара из атрибута data-product-id
    const productId = Number(event.target.getAttribute('data-product-id'));

    // Находим товар в нашей базе данных товаров
    const product = products.find(product => product.id == productId);

    // Добавляем товар в корзину
    addToCart(product);
  }
});

// Обработчик клика на кнопке "Оформить заказ"
checkoutBtnEl.addEventListener('click', () => {
  // Очищаем корзину и обновляем ее содержимое

  const data = cart.items;
  const url = 'send_purchase.php';
  var xhttp = new XMLHttpRequest();

  // Кодируем массив в JSON формат
  var json = JSON.stringify(data);

  // Открываем соединение с PHP скриптом, используя метод POST
  xhttp.open("POST", "send_purchase.php", true);

  // Устанавливаем заголовок Content-Type
  xhttp.setRequestHeader("Content-Type", "application/json");

  // Отправляем JSON данные на сервер
  xhttp.send(json);

  // Обрабатываем ответ сервера
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Получаем ответ в виде текста
      var response = this.responseText;
      // Делаем что-то с ответом, например выводим его в консоль
      console.log(response);
    }
  };
  cart.items = [];
  cart.total = 0;
  updateCart();

  // Отправляем данные заказа на сервер
  // код для отправки заказа на сервер...
});
const products = [];
// Симуляция базы данных товаров
for (let i = 0; i < passedArray.length; i++) {
  toy_name = passedArray[i]["toy_name"];
  cost = passedArray[i]["cost"];
  identificator = passedArray[i]["id"];
  products.push({ id: identificator, name: toy_name, price: cost })
}