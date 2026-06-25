import type { IProduct } from "../../types/index.ts";

/** хранит массив товаров, выбранных покупателем для покупки */
export class BasketList {
  /** массив торавор для покупки */
  private basketList: IProduct[] = [];

  /** получение массива товаров, которые находятся в корзине */
  getBasketList(): IProduct[] {
    return this.basketList;
  }

  /** добавление товара, который был получен в параметре, в массив корзины */
  addProduct(product: IProduct | null) {
    if (product !== null)
    this.basketList.push(product);
  }

  /** удаление товара, полученного в параметре из массива корзины */
  removeProduct(product: IProduct) {
    this.basketList = this.basketList.filter((item) => item.id !== product.id);
  }

  /** очистка корзины */
  clearBasket() {
    this.basketList = [];
  }

  /** получение стоимости всех товаров в корзине */
  getBasketPrice(): number {
    return this.basketList.reduce((acc, current) => acc + (current.price ?? 0), 0);
  }

  /** получение количества товаров в корзине */
  getBasketСounter(): number {
    return this.basketList.length
  }

  /** проверка наличия товара в корзине по его id, полученного в параметр метода */
  hasProductId(id: string): boolean {
    return this.basketList.some(item => item.id === id);
  }
}
