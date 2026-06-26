import { ApiOrder, ApiResponce, OrderResponce, IApi } from "../../types";

/** Получает и отправляет данные на сервер */
export class ApiProducts {
  constructor(private productList: IApi) {
    this.productList = productList;
  }

  /** GET запрос на эндпоинт /product/ и возвращает объект */
  getProductList(): Promise<ApiResponce> {
    return this.productList.get("/product/");
  }

  /**делает POST запрос на эндпоинт /order/ и передаёт в него данные, возвращает объект c id заказа и суммой товаров */
  postOrder(data: ApiOrder): Promise<OrderResponce> {
    return this.productList.post("/order/", data);
  }
}
