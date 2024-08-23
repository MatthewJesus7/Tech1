import React, { useState } from 'react';

import Section from '../sections/Section';
import XButton from '../items/Buttons/XButton';

const Select = ({ onFilterChange }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilterChange({ price: e.target.value, brand: selectedBrand });
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    onFilterChange({ price: selectedPrice, brand: e.target.value });
  };

  return (
    <menu className="fixed top-9 left-0 w-full h-full p-5 bg-white shadow-md rounded-md z-10">

      <Section>

        <div className=" w-full h-9">
            <XButton handleOnClick="">
            </XButton>
        </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Preço
            </label>
            <select
              id="price"
              value={selectedPrice}
              onChange={handlePriceChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Todos</option>
              <option value="0-500">Até R$500</option>
              <option value="500-1000">R$500 - R$1000</option>
              <option value="1000-1500">R$1000 - R$1500</option>
              <option value="1500">Acima de R$1500</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
              Marca
            </label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Todas</option>
              <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="motorola">Motorola</option>
            </select>
          </div>
      </Section>
    </menu>
  );
};

export default Select;
