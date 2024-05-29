import { IOhlcData, ITickerData } from "models/currency.models";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "chart.js/auto";
import {
  FORMAT_15M,
  FORMAT_1D,
  FORMAT_1H,
  FORMAT_1M,
  FORMAT_1W,
  FORMAT_30M,
  FORMAT_4H,
  FORMAT_5M,
  formatDate,
} from "utils/formatDate";
import Loader from "./Loader";
import styled from "styled-components";
import { OhlcIntervalEnum } from "enums/ohlcInterval.enum";

interface IChartData extends ChartData<"line", any, string> {}

const Wrapper = styled.div`
  height: 100%;
  flex-grow: 1;
  position: relative;
  margin-top: 40px;
`;

interface ITickerChartProps {
  pair: string;
  tickerData: ITickerData[];
}

export function TickerChart({ pair, tickerData }: ITickerChartProps) {
  const labels = tickerData.map((d) => formatDate(d.timestamp));
  const data = tickerData.map((d) => d.last);
  const borderColor = "rgba(75,192,192,1)";
  const backgroundColor = "rgba(75,192,192,0.2)";

  const chartData: IChartData = {
    labels,
    datasets: [{ label: pair, data, borderColor, backgroundColor }],
  };

  return (
    <Wrapper>
      <Loader isLoading={!data.length} withChild>
        <Line data={chartData} />
      </Loader>
    </Wrapper>
  );
}

interface IOhlcChartProps {
  pair: string;
  ohlcData: IOhlcData[];
}

export function OhlcChart({ pair, ohlcData }: IOhlcChartProps) {
  const labels = ohlcData.map((d) =>
    formatDate(d.timestamp, getFormatByInterval(d.interval))
  );
  const data = ohlcData.map((d) => d.close);
  const borderColor = "rgba(75,192,192,1)";
  const backgroundColor = "rgba(75,192,192,0.2)";

  const chartData: IChartData = {
    labels,
    datasets: [{ label: pair, data, borderColor, backgroundColor }],
  };

  return (
    <Wrapper>
      <Loader isLoading={!data.length} withChild>
        <Line data={chartData} />
      </Loader>
    </Wrapper>
  );
}

function getFormatByInterval(interval: OhlcIntervalEnum) {
  switch (interval) {
    case OhlcIntervalEnum.ONE_MINUTE:
      return FORMAT_1M;
    case OhlcIntervalEnum.FIVE_MINUTE:
      return FORMAT_5M;
    case OhlcIntervalEnum.QUARTER_HOUR:
      return FORMAT_15M;
    case OhlcIntervalEnum.HALF_HOUR:
      return FORMAT_30M;
    case OhlcIntervalEnum.ONE_HOUR:
      return FORMAT_1H;
    case OhlcIntervalEnum.FOUR_HOUR:
      return FORMAT_4H;
    case OhlcIntervalEnum.ONE_DAY:
      return FORMAT_1D;
    case OhlcIntervalEnum.ONE_WEEK:
    default:
      return FORMAT_1W;
  }
}
