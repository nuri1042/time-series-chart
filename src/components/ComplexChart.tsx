import React, { Dispatch, SetStateAction } from "react";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartDataWithRegionType } from "../types";

import { drawChartData, drawChartOptions } from "../utils/drawChart";
import useSelectedChart from "../hooks/useSelectedChart";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler
);

interface MultiChartPropsType extends ChartDataWithRegionType {
  setRegion: Dispatch<SetStateAction<string>>;
}

function ComplexChart({
  labelData,
  areaData,
  barData,
  region,
  setRegion,
}: MultiChartPropsType) {
  const chartData = drawChartData({ labelData, areaData, barData, region });
  const options = drawChartOptions(barData);
  const { chartRef, clickChartBar } = useSelectedChart({ barData, setRegion });

  return (
    <Chart
      ref={chartRef}
      onClick={clickChartBar}
      type="bar"
      options={options}
      data={chartData}
      width="1000px"
      height="500px"
    />
  );
}

export default ComplexChart;
