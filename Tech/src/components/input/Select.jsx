import React, { useState, useEffect } from 'react';
import Section from '../sections/Section';
import Container from '../layout/Container';
import Card from '../layout/Card';
import XButton from '../items/Buttons/XButton';
import BoxMark from './BoxMark';

const Select = ({ onFilterChange, closeMenu, customclass }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    // Atualiza os filtros sempre que `selectedPrice` ou `selectedBrand` mudarem
    onFilterChange({ totalPrice: selectedPrice, brand: selectedBrand });

  }, [selectedPrice, selectedBrand, onFilterChange]);

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  return (
    <menu className={`menu ${customclass}`}>
      <Section>
        {/* <Container>
            <Card 
            type="partner rounded-md mb-2 shadow-sm hover:shadow-md pt-3"
            totalPrice=""
          />
        </Container> */}
        
        <div className="flex justify-between">
          <h3>Filtrar Por:</h3>
          <XButton handleOnClick={closeMenu} customclass="-mt-2.5" />
        </div>

        <div className="mb-5">
          <label htmlFor="price" className="block text-gray-800 text-md font-semibold">
            Preço
          </label>
          
          <form className="flex flex-col">
            <BoxMark id="low-price" value='low' text="Menor Preço" onSelect={handlePriceChange} />

            <BoxMark id="high-price" value='high' text="Maior Preço" onSelect={handlePriceChange} />

            <BoxMark id="price-1000" value='1000' text="Até R$1000,00" onSelect={handlePriceChange} />

            <BoxMark id="no-price" value='0' text="Remover Todos os filtros" onSelect={handlePriceChange} />
          </form>

           {/* <label className="block text-gray-800 text-md font-semibold mt-3" htmlFor="brand">
            Marca
          </label>
          <form className="flex flex-col">
            <BoxMark id="brand-xiaomi" value="xiaomi" text="Xiaomi" onSelect={handleBrandChange} />

            <BoxMark id="brand-samsung" value="samsung" text="Samsung" onSelect={handleBrandChange} />

            <BoxMark id="brand-motorola" value="motorola" text="Motorola" onSelect={handleBrandChange} />
          </form> */}
        </div>

      </Section>
    </menu>
  );
};

export default Select;
