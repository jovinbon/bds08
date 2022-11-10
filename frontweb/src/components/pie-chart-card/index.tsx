import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <ReactApexChart
      options={buildPieChartConfig(labels, name)}
      type="donut"
      width="250"
      height="250"
      series={series}
    />
  );
}

export default PieChartCard;
