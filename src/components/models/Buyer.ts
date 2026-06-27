import type { IBuyer, Validate } from "../../types/index.ts";

/** хранит в себе информацию о покупателе */
export class Buyer {
  /** объект с данными о покупателе */
  private buyerData: IBuyer = {
    payment: null,
    email: "",
    phone: "",
    address: "",
  };

  /** сохранение и обновление данных в модели */
  setBuyer(buyer: Partial<IBuyer>) {
    this.buyerData = { ...this.buyerData, ...buyer };
  }

  /** получение всех данных покупателя */
  getBuyer(): IBuyer {
    return this.buyerData;
  }

  /** очистка данных покупателя */
  clear() {
    this.buyerData = {
      payment: null,
      email: "",
      phone: "",
      address: "",
    };
  }

  /** валидация данных: возвращает обьект содержащий ошибку */
  validate(): Validate {
    const buyerErr: Validate = {};
    if (!this.buyerData.payment?.trim()) {
      buyerErr.payment = "Способ оплаты не выбран";
    }
    if (!this.buyerData.email.trim()) {
      buyerErr.email = "Некорректный email";
    }
    if (!this.buyerData.phone.trim()) {
      buyerErr.phone = "Поле phone не должно быть пустым";
    }
    if (!this.buyerData.address.trim()) {
      buyerErr.address = "Адрес доставки не введён";
    }
    return buyerErr;
  }
}
