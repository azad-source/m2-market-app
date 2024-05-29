export interface ICurrencyInfo {
  a: string[]; // Ask [<price>, <whole lot volume>, <lot volume>]
  b: string[]; // Bid [<price>, <whole lot volume>, <lot volume>]
  c: string[]; // Last trade closed [<price>, <lot volume>]
  h: string[]; // High [<today>, <last 24 hours>]
  l: string[]; // Low [<today>, <last 24 hours>]
  o: string; // Today's opening price
  p: string[]; // Volume weighted average price [<today>, <last 24 hours>]
  t: string[]; // Number of trades [<today>, <last 24 hours>]
  v: string[]; // Volume [<today>, <last 24 hours>]
}

export interface ICurrency {
  name: string;
  info: ICurrencyInfo;
}

export interface IFetchCurrenciesParams {
  pairs: string[];
}

export interface IOhlcData {
  close: number;
  high: number;
  interval: number;
  interval_begin: string;
  low: number;
  open: number;
  symbol: string;
  timestamp: string;
  trades: number;
  volume: number;
  vwap: number;
}
