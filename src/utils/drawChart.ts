import { ChartOptions } from "chart.js";
import { BarDataType, ChartDataWithRegionType } from "../types";

export const drawChartOptions = (barData: BarDataType[]) => {
  const options: ChartOptions = {
    responsive: false,
    elements: {
      point: {
        radius: 1,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            const dataIndex = tooltipItem[0].dataIndex;
            const targetData = barData[dataIndex];
            return targetData.id;
          },
        },
      },
    },
    scales: {
      barchart: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      areachart: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };
  return options;
};

export const drawChartData = ({
  labelData,
  areaData,
  barData,
  region,
}: ChartDataWithRegionType) => {
  const chartData = {
    labels: labelData,
    datasets: [
      {
        type: "line" as const,
        label: "area",
        yAxisID: "areachart",
        data: areaData.map((data) => data.area),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
      },
      {
        type: "bar" as const,
        label: "bar",
        yAxisID: "barchart",
        data: barData.map((data) => data.bar),
        backgroundColor: barData.map((data) => {
          return data.id === region ? "blue" : "skyblue";
        }),
      },
    ],
  };
  return chartData;
};
