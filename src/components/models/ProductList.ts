import type { IProduct } from "../../types/index.ts";

/** Хранит в себе колекцию товаров */
export class ProductList {
  /** хранит массив всех товаров */
  private productList: IProduct[] = [];

  /** ханит товар, выбранный для подробного отображения */
  private product: IProduct | null = null;

  /** сохранение массива товаров полученного в параметрах метода */
  setProductList(products: IProduct[]) {
    this.productList = products;
  }

  /** метод получения массива всех товаров */
  getProductList(): IProduct[] {
    return this.productList;
  }

  /** получение одного товара по его id */
  getProductId(id: string): IProduct | undefined {
    return this.productList.find((u) => u.id === id);
  }

  /** сохранение товара для подробного отображения */
  setProduct(product: IProduct) {
    this.product = product;
  }

  /** получение товара для подробного отображения */
  getProduct(): IProduct | null {
    return this.product;
  }
}
