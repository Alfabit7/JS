const dataProducts = JSON.parse(dataProductsJson);

let container = document.querySelector('.container')

/* HTML Теги скрипта при использовании querySelector не анализируются как HTML 
поэтому получить вложенный элемент, заключенный в тег Script  напрямую вот так: let productTemplate = document.querySelector('#productTemplate .product')  невозможно */
//Получаем элемент  шаблона
let productTemplate = document.querySelector('#productTemplate');
//Получаем содержимое скрипта шаблона
let templateContent = productTemplate.innerHTML;
// Создаем временный контейнер 
let tempContainer = document.createElement('div');

// Устанавливаем внутренний HTML-код контейнера с содержимым шаблона
tempContainer.innerHTML = templateContent;
// Теперь   выбираем элемент с классом Product внутри контейнера
let productElement = tempContainer.querySelector('.product');


dataProducts.forEach(element => {
    //Клонируем ноду product
    let product = productElement.cloneNode(true);

    product.querySelector('.product__img img').src = element.img;
    product.querySelector('.product__img img').alt = 'photo_product';

    let price = product.querySelector(".product__info .product__price .product__property-price");
    price.textContent = price.textContent + element.price;

    let title = product.querySelector(".product__info .product__title");
    title.textContent = element.title;

    let color = product.querySelector(".product__info .product__color .product__property");
    color.textContent = color.textContent + element.color;

    let size = product.querySelector(".product__info .product__size .product__property");
    size.textContent = size.textContent + element.size;

    let quantity = product.querySelector(".product__info .product__quantity .product__property-quantity");
    quantity.textContent = quantity.textContent + element.quantity;

    container.appendChild(product);
});