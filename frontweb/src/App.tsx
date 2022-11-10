import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { sumSalesStore } from './components/pie-chart-card/helpers';
import { buildSalesByStorePieChart } from './helpers';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import { formatPrice } from './utils/formatters';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByStorePieChart(response.data);
        setSalesByStore(newSalesByStore);
        const newTotalSum = sumSalesStore(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="filter-container base-card">
          <Filter onFilterChange={onFilterChange} />
        </div>
        <div className="pie-chart-card base-card">
          <div className="show-sum-label">
            <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
            <p className="total-vendas">Total vendas</p>
          </div>
          <div className="chart">
            <PieChartCard
              name="Vendas"
              labels={salesByStore?.labels}
              series={salesByStore?.series}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
