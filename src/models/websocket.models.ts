import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";

export type ChanelType = "ohlc" | "ticker" | "trade" | "instrument" | "book";

export interface ISubscriptionParams {
  channel: ChanelType;
  symbol: string[];
  interval?: OhlcIntervalEnum;
  snapshot?: boolean;
}
