import { IOhlcData } from "models/product.models";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "chart.js/auto";
import { formatDate } from "utils/formatDate";
import Loader from "./Loader";
import styled from "styled-components";

interface IChartData extends ChartData<"line", any, string> {}

interface IProps {
  pair: string;
  ohlcData: IOhlcData[];
}

const Wrapper = styled.div`
  position: relative;
`;

export default function OhlcChart({ pair, ohlcData }: IProps) {
  const labels = ohlcData.map((d) => formatDate(d.timestamp));
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
