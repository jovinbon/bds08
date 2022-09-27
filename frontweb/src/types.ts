export type Store = '?storeId=1' | '?storeId=2' | '?storeId=3' | '?storeId=4';

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
  storeId?: Store;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
