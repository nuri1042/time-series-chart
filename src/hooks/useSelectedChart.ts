import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";

import { Chart as ChartJS } from "chart.js";
import { getElementAtEvent } from "react-chartjs-2";
import { BarDataType } from "../types";

interface ChartSelectPropsType {
  barData: BarDataType[];
  setRegion: Dispatch<SetStateAction<string>>;
}
function useSelectedChart({ barData, setRegion }: ChartSelectPropsType) {
  const chartRef = useRef<ChartJS<"line", number[], string>>(null);

  const clickChartBar = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) return;

    const clicked = getElementAtEvent(chartRef.current, event);

    if (clicked.length === 0) return;

    const clickedId = clicked[0].index;
    setRegion(barData[clickedId].id);
  };

  return { chartRef, clickChartBar };
}

export default useSelectedChart;
