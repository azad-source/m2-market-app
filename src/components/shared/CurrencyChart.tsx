import { ITickerData } from "models/currency.models";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "chart.js/auto";
import { formatDate } from "utils/formatDate";
import Loader from "./Loader";
import styled from "styled-components";

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
