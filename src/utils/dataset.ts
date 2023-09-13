import { ResponseDataType } from "../types";

export const dataset = (response: ResponseDataType) => {
  const labelData = Object.keys(response);
  const values = Object.values(response);

  const areaData = values.map((dataValue) => ({
    id: dataValue.id,
    area: dataValue.value_area,
  }));
  const barData = values.map((dataValue) => ({
    id: dataValue.id,
    bar: dataValue.value_bar,
  }));
  const regionData = Array.from(
    new Set(values.map((dataValue) => dataValue.id))
  );

  return { labelData, areaData, barData, regionData };
};
