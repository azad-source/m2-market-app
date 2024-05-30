import { ICurrencyInfo } from "models/currency.models";

export default class CurrencyInfoMock {
  base(): ICurrencyInfo {
    return {
      a: ["67675.00000", "32", "32.000"],
      b: ["67674.90000", "1", "1.000"],
      c: ["67675.00000", "0.01374400"],
      h: ["68300.00000", "68300.00000"],
      l: ["67099.90000", "67099.90000"],
      o: "67575.40000",
      p: ["67678.84781", "67554.41204"],
      t: [7631, 21483],
      v: ["385.07568644", "1636.80723913"],
    };
  }
}