export type SalesByDate = {
  date: string;
  sum: number;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  storeId?: string;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
