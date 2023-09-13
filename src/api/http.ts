import { useEffect, useState } from "react";

import { ChartDataWithRegionsType } from "../types";
import { dataset } from "../utils/dataset";

function useFetch() {
  const [chartData, setChartData] = useState<ChartDataWithRegionsType | null>(
    null
  );
  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const { labelData, areaData, barData, regionData } = dataset(
          data.response
        );
        setChartData({
          labelData,
          areaData,
          barData,
          regionSet: regionData,
        });
      });
  }, []);

  return chartData;
}

export default useFetch;
