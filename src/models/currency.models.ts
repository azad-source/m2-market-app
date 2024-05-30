import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";

export interface ICurrencyInfo {
  a: string[]; // Ask [<price>, <whole lot volume>, <lot volume>]
  b: string[]; // Bid [<price>, <whole lot volume>, <lot volume>]
  c: string[]; // Last trade closed [<price>, <lot volume>]
  h: string[]; // High [<today>, <last 24 hours>]
  l: string[]; // Low [<today>, <last 24 hours>]
  o: string; // Today's opening price
  p: string[]; // Volume weighted average price [<today>, <last 24 hours>]
  t: number[]; // Number of trades [<today>, <last 24 hours>]
  v: string[]; // Volume [<today>, <last 24 hours>]
}

export interface ITickerData {
  ask: number; // Best ask price
  ask_qty: number; // Best ask quantity
  bid: number; // Best bid price
  bid_qty: number; // Best bid quantity
  change: number; // 24-hour price change (in quote currency)
  change_pct: number; // 24-hour price change (in percentage points)
  high: number; // 24-hour highest trade price
  last: number; // Last traded price
  low: number; // 24-hour lowest trade price
  symbol: string; // The symbol of the currency pair, e.g., "BTC/USD"
  volume: number; // 24-hour traded volume (in base currency terms)
  vwap: number; // 24-hour volume weighted average price
  timestamp: string;
}

export interface IOhlcData {
  close: number;
  high: number;
  interval: OhlcIntervalEnum;
  interval_begin: string;
  low: number;
  open: number;
  symbol: string;
  timestamp: string;
  trades: number;
  volume: number;
  vwap: number;
}

export interface ICurrency {
  name: string;
  info: ICurrencyInfo;
}

export interface IFetchCurrenciesParams {
  pairs: string[];
}
