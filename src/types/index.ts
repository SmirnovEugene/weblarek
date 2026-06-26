export type ApiPostMethods = "POST" | "PUT" | "DELETE";

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(
    uri: string,
    data: object,
    method?: ApiPostMethods,
  ): Promise<T>;
}

/** Содержит в себе информацию о товаре. */
export interface IProduct {
  /**  индификатор товара */
  id: string;

  /**  описание товара */
  description: string;

  /**  изображение товара */
  image: string;

  /**  название товара */
  title: string;

  /**  группа к которой относиться товар */
  category: string;

  /**  стоимость товара */
  price: number | null;
}

/** способ оплаты */
export type Payment = "cash" | "card" | null;

/** Содержит в себе информацию о покупателе */
export interface IBuyer {
  /**  способ оплаты */
  payment: Payment;

  /**  элекстронная почта покупателя */
  email: string;

  /**  телефон покупателя */
  phone: string;

  /**  адрес покупателя */
  address: string;
}

/** обьект с ключем интерфейса IBuyer и значением string */
export type Validate = Record<keyof IBuyer, string>;

/** Обьект полученый от сервера */
export type ApiResponce = {
  /** количество товаров */
  total: number;

  /** массиф с интефесом Iproduct */
  items: IProduct[];
};

/** Данные отправляемые на сервер */
export interface ApiOrder extends IBuyer {
  /** сумма товаров */
  total: number;
  /** массиф ид товаров */
  items: string[];
}

/** обьект полученый от сервера при POST запросе */
export type OrderResponce = {
  /** ид заказа */
  id: string;

  /**сумма товаров */
  total: number;
};
