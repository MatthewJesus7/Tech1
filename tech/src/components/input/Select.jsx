import React, { useState, useEffect, forwardRef } from 'react';
import Section from '../sections/Section';
import XButton from '../items/Buttons/XButton';
import BoxMark from './BoxMark';

const Select = forwardRef(({ onFilterChange, closeMenu, customclass }, ref) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedConfig, setSelectedConfig] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  

  useEffect(() => {
    onFilterChange({ total_price: selectedPrice, brand: selectedBrand, config: selectedConfig });

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
    <menu ref={ref} className={`menu ${customclass}`}>
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

          <label htmlFor="config"
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

          <label htmlFor="minmax_price" 
          className="block text-gray-800 text-md font-semibold mb-2.5">
            Preço
          </label>
          
          <form className="flex flex-col">

            <BoxMark id="none-options2"
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

          </form>

          <label htmlFor="price" 
            className="block text-gray-800 text-md font-semibold my-2.5">
              Faixa de preço
          </label>

          <form className='flex flex-col'>

            <BoxMark id="none-options3"
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
          </form>

           {/* <label className="block text-gray-800 text-md font-semibold mt-3" htmlFor="brand">
            Marca
          </label>
          <form className="flex flex-col">
            <BoxMark id="brand-apple" value="Apple" text="Apple" onSelect={handleBrandChange} />

            <BoxMark id="brand-xiaomi" value="Xiaomi" text="Xiaomi" onSelect={handleBrandChange} />

            <BoxMark id="brand-samsung" value="Samsung" text="Samsung" onSelect={handleBrandChange} />

            <BoxMark id="brand-motorola" value="Motorola" text="Motorola" onSelect={handleBrandChange} />
          </form> */}
        </div>

      </Section>
    </menu>
  );
});

export default Select
