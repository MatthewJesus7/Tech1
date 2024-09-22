import { forwardRef, useState, useEffect } from "react";
import Section from "../sections/Section";
import XButton from "../items/Buttons/XButton";
import BoxMark from "../input/BoxMark";

const Select = forwardRef(({ onFilterChange, closeMenu, customclass }, ref) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedConfig, setSelectedConfig] = useState(''); // Mantém a seleção única de configuração
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    onFilterChange({ total_price: selectedPrice, brand: selectedBrand, config: selectedConfig });
  }, [selectedPrice, selectedBrand, selectedConfig, onFilterChange]);

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  const handleConfigChange = (value) => {
    setSelectedConfig(prevConfig => prevConfig === value ? '' : value); // Permite apenas uma configuração por vez
  };

  return (
    <menu ref={ref} className={`menu ${customclass}`}>
      <Section>
        <div className="flex justify-between">
          <h3>Filtrar Por:</h3>
          <XButton handleOnClick={closeMenu} customclass="-mt-2.5" />
        </div>

        <div className="mb-14">
          <label htmlFor="config" className="block text-gray-800 text-md font-semibold mb-2.5">
            Configurações
          </label>
          <form className="flex flex-col">
            <BoxMark id="none-options" value='0' text="Nenhuma das Opções" onSelect={handlePriceChange} />

            {['custo_beneficio', 'hardware', 'tela', 'camera', 'desempenho'].map(config => (
              <BoxMark
                key={config}
                id={config}
                value={config}
                text={config.charAt(0).toUpperCase() + config.slice(1)}
                onSelect={handleConfigChange}
                selected={selectedConfig === config} // Indica qual está selecionado
              />
            ))}
          </form>

          {/* Preço (mantido como está) */}
          <label htmlFor="minmax_price" className="block text-gray-800 text-md font-semibold mb-2.5">
            Preço
          </label>
          <form className="flex flex-col">
            <BoxMark id="none-options2" value='0' text="Nenhuma das Opções" onSelect={handlePriceChange} />
            <BoxMark id="low-price" value='low' text="Menor Preço" onSelect={handlePriceChange} />
            <BoxMark id="high-price" value='high' text="Maior Preço" onSelect={handlePriceChange} />
          </form>

          <label htmlFor="price" className="block text-gray-800 text-md font-semibold my-2.5">
            Faixa de preço
          </label>
          <form className='flex flex-col'>
            <BoxMark id="none-options3" value='0' text="Nenhuma das Opções" onSelect={handlePriceChange} />
            {['1000', '900', '800', '700'].map(price => (
              <BoxMark
                key={price}
                id={`price-${price}`}
                value={price}
                text={`Menos de R$ ${price},00`}
                onSelect={handlePriceChange}
              />
            ))}
          </form>

          <label className="block text-gray-800 text-md font-semibold mt-3" htmlFor="brand">Marca</label>
          <form className="flex flex-col">
            {['Xiaomi', 'Samsung', 'Motorola', 'Apple'].map(brand => (
              <BoxMark key={brand} id={`brand-${brand}`} value={brand} text={brand.charAt(0).toUpperCase() + brand.slice(1)} onSelect={handleBrandChange} />
            ))}
          </form>
        </div>
      </Section>
    </menu>
  );
});

export default Select;
