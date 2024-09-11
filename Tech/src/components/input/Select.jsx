import React, { useState, useEffect } from 'react';
import Section from '../sections/Section';
import Container from '../layout/Container';
import Card from '../layout/Card';
import XButton from '../items/Buttons/XButton';
import BoxMark from './BoxMark';

const Select = ({ onFilterChange, closeMenu, customclass }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedConfig, setSelectedConfig] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  

  useEffect(() => {
    onFilterChange({ totalPrice: selectedPrice, brand: selectedBrand, config: selectedConfig });

  }, [selectedPrice, selectedBrand, selectedConfig, onFilterChange]);

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
  };

  const handleConfigChange = (value) => {
    setSelectedConfig(value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  return (
    <menu className={`menu ${customclass}`}>
      <Section>
        {/* <Container>
          //   <Card 
          //   type="partner rounded-md mb-2 shadow-sm hover:shadow-md pt-3"
          //   totalPrice=""
          // />
        </Container> */}
        
        <div className="flex justify-between">
          <h3>Filtrar Por:</h3>
          <XButton handleOnClick={closeMenu} customclass="-mt-2.5" />
          
        </div>

        <div className="mb-14">

          <label htmlFor="price"
          className="block text-gray-800 text-md font-semibold mb-2.5">
            Configurações
          </label>

          <form className="flex flex-col">

            <BoxMark id="none-options"
            value='0'
            text="Nenhuma das Opções"
            onSelect={handlePriceChange} />

            <BoxMark 
            id="custo-beneficio" 
            value='custo-beneficio' 
            text="Custo-beneficio" 
            onSelect={handleConfigChange} />

            <BoxMark 
            id="hardware" 
            value='hardware' 
            text="Hardware" 
            onSelect={handleConfigChange} />

            <BoxMark 
            id="tela" 
            value='tela' 
            text="Tela" 
            onSelect={handleConfigChange} />

            <BoxMark 
            id="camera" 
            value='camera' 
            text="Camera" 
            onSelect={handleConfigChange} />

            <BoxMark 
            id="desempenho" 
            value='desempenho' 
            text="Desempenho" 
            onSelect={handleConfigChange} />

          </form>

          <label htmlFor="price" 
          className="block text-gray-800 text-md font-semibold my-2.5">
            Preço
          </label>
          
          <form className="flex flex-col">

            <BoxMark id="none-options"
            value='0'
            text="Nenhuma das Opções"
            onSelect={handlePriceChange} />

            <BoxMark 
            id="low-price"
            value='low'
            text="Menor Preço"
            onSelect={handlePriceChange} />

            <BoxMark
            id="high-price"
            value='high'
            text="Maior Preço"
            onSelect={handlePriceChange} />

            <label htmlFor="price" 
            className="block text-gray-800 text-md font-semibold my-2.5">
              Faixa de preço
            </label>

            <BoxMark id="none-options"
            value='0'
            text="Nenhuma das Opções"
            onSelect={handlePriceChange} />

            <BoxMark 
            id="price-1000" 
            value='1000' 
            text="Menos de R$ 1000,00" 
            onSelect={handlePriceChange} />

            <BoxMark 
            id="price-900" 
            value='900' 
            text="Menos de R$ 900,00" 
            onSelect={handlePriceChange} />

            <BoxMark 
            id="price-800" 
            value='800' 
            text="Menos de R$ 800,00" 
            onSelect={handlePriceChange} />

            <BoxMark 
            id="price-700" 
            value='700' 
            text="Menos de R$ 700,00" 
            onSelect={handlePriceChange} />

            <BoxMark 
            id="price-600" 
            value='600' 
            text="Menos de R$ 600,00" 
            onSelect={handlePriceChange} />

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
