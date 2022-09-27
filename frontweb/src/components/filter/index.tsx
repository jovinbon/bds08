import './styles.css';
import React, { useState } from 'react';
import { FilterData, Store } from '../../types';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [storeId, setStoreId] = useState<Store>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as Store;

    setStoreId(selectedStore);
    onFilterChange({ storeId: selectedStore });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" value={storeId} onChange={onChangeStore}>
        <option value="">Selecione uma cidade</option>
        <option value="?storeId=1">Uberaba</option>
        <option value="?storeId=2">Uberlândia</option>
        <option value="?storeId=3">Araguari</option>
        <option value="?storeId=4">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;
