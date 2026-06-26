// ......Import......
import "./scss/styles.scss";

import { ApiProducts } from "./components/communications/ApiProducts";
import { apiProducts } from "./utils/data";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";

import { BasketList } from "./components/Models/BasketList";
import { Buyer } from "./components/Models/Buyer";
import { ProductList } from "./components/models/ProductList";
import { ApiOrder, ApiResponce } from "./types";

// ......обьявление констант......
const productsModel = new ProductList();
const apiCom = new ApiProducts(new Api(API_URL));
const basketModel = new BasketList();
const buyerModel = new Buyer();

// ......базовый код......

productsModel.setProductList(apiProducts.items);

console.log(
  "метод получения массива всех товаров",
  productsModel.getProductList(),
);
console.log(
  "получение одного товара по его id",
  productsModel.getProductId("412bcf81-7e75-4e70-bdb9-d3c73c9803b7"),
);

productsModel.setProduct(productsModel.getProductList()[1]);

console.log(
  "получение товара для подробного отображения",
  productsModel.getProduct(),
);

basketModel.addProduct(productsModel.getProduct());

productsModel.setProduct(productsModel.getProductList()[0]);

basketModel.addProduct(productsModel.getProduct());

console.log(
  "получение массива товаров, которые находятся в корзине",
  basketModel.getBasketList(),
);

console.log(
  "получение стоимости всех товаров в корзине",
  basketModel.getBasketPrice(),
);

console.log(
  "получение количества товаров в корзине",
  basketModel.getBasketСounter(),
);

console.log(
  "проверка наличия товара в корзине по его id, полученного в параметр метода",
  basketModel.hasProductId("b06cde61-912f-4663-9751-09956c0eed67"),
);

buyerModel.setBuyer({
  address: "fff",
  payment: "cash",
});

console.log(
  "валидация данных: возвращает обьект содержащий ошибку",
  buyerModel.validate(),
);

console.log("получение всех данных покупателя", buyerModel.getBuyer());

buyerModel.setBuyer({
  email: "ddfg@fdf",
  phone: "545455",
});

console.log(
  "валидация данных: возвращает обьект содержащий ошибку",
  buyerModel.validate(),
);

console.log("получение всех данных покупателя", buyerModel.getBuyer());

const basketId = basketModel.getBasketList().map((user) => user.id);

const apiOrder: ApiOrder = {
  ...buyerModel.getBuyer(),
  ...{ total: basketModel.getBasketPrice(), items: basketId },
};

basketModel.removeProduct(productsModel.getProductList()[1]);

console.log(
  "проверка удаление товара, полученного в параметре из массива корзины",
  basketModel.getBasketList(),
);

basketModel.clearBasket();

console.log("проверка очистки корзины", basketModel.getBasketList());

buyerModel.clear();

console.log("проверка очисткb данных покупателя", buyerModel.getBuyer());

// ...... работа с Api ......

  try {
    const data = await apiCom.getProductList();
    productsModel.setProductList(data.items);
  } catch (error) {
    // Ошибки промиса перехватываются с помощью try...catch
    console.error("Ошибка при получении данных:", error);
  }

console.log(
  "вывожу данные полученые с сервера",
  productsModel.getProductList(),
);

const postData = await apiCom
  .postOrder(apiOrder)
  .then((res) => {
    return res;
  })
  .catch((error) => console.log(error));

console.log("возвращает объект c id заказа и суммой товаров", postData);
