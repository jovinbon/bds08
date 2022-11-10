import './styles.css';
import React, { useState } from 'react';
import { FilterData } from '../../types';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [storeId, setStoreId] = useState('');

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value;

    setStoreId(selectedStore);
    onFilterChange({ storeId: selectedStore });
  };

  return (
    <select className="filter-input" value={storeId} onChange={onChangeStore}>
      <option value="">Selecione uma cidade</option>
      <option value="1">Uberaba</option>
      <option value="2">Uberlândia</option>
      <option value="3">Araguari</option>
      <option value="4">Ituiutaba</option>
    </select>
  );
}

export default Filter;
