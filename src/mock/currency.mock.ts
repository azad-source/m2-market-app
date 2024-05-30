import { ICurrency } from "models/currency.models";
import CurrencyInfoMock from "./currencyInfo.mock";

export default class CurrencyMock {
  base(): ICurrency {
    const currencyInfoMock = new CurrencyInfoMock();

    return {
      name: "BTC/UCD",
      info: currencyInfoMock.base(),
    };
  }
}
