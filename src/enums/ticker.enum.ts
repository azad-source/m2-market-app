export enum TickerDataEnum {
  a = "a",
  b = "b",
  c = "c",
  h = "h",
  l = "l",
  o = "o",
  p = "p",
  t = "t",
  v = "v",
}

export const tickerDataTitle: Record<TickerDataEnum, string> = {
  [TickerDataEnum.a]: "Ask",
  [TickerDataEnum.b]: "Bid",
  [TickerDataEnum.c]: "Last trade closed",
  [TickerDataEnum.h]: "High",
  [TickerDataEnum.l]: "Low",
  [TickerDataEnum.o]: "Today's opening price",
  [TickerDataEnum.p]: "Volume weighted average price",
  [TickerDataEnum.t]: "Number of trades",
  [TickerDataEnum.v]: "Volume",
};
