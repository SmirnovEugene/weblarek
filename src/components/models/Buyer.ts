import type { IBuyer } from "../../types/index.ts";

/** хранит в себе информацию о покупателе */
export class Buyer {
  /** объект с данными о покупателе */
  private buyerData: IBuyer = {
    payment: "",
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
      payment: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  /** валидация данных: возвращает обьект содержащий ошибку или true, если валидация успешна  */
  validateForm(): {} | boolean {
    const buyerErr: Partial<Record<keyof IBuyer, string>> = {};
    for (const [field, value] of Object.entries(this.buyerData)) {
      switch (field) {
        case "payment":
          if (!value.trim()) {
            buyerErr.payment = "Способ оплаты не выбран";
          }
          break;
        case "email":
          if (!value.trim()) {
            buyerErr.email = "Некорректный email";
          }
          break;
        case "phone":
          if (!value.trim()) {
            buyerErr.phone = "Поле phone не должно быть пустым";
          }

          break;
        case "address":
          if (!value.trim()) {
            buyerErr.address = "Адрес доставки не введён";
          }

          break;
      }
    }
    if (JSON.stringify(buyerErr) !== "{}") {
      return buyerErr;
    } else {
      return true;
    }
  }
}
