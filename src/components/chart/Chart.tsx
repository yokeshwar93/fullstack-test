import ReactApexChart from 'react-apexcharts';

const OPTIONS = {
  chart: {
    type: 'area' as const,
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight' as const
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left' as const
  }
};

export type ChartProps = {
  labels: string[];
  data: number[];
  title: string;
};

export const Chart = ({ labels, data, title }: ChartProps) => {
  const options = {
    ...OPTIONS,
    xaxis: {
      categories: labels
    },
    title: {
      text: title,
      align: 'left' as const
    },
  };

  return (
    <ReactApexChart options={ options } series={[{ data, name: 'value' }]} type="area" height={350} />
  );
};
