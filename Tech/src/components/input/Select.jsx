import React, { useState } from 'react';

import Section from '../sections/Section';
import Carousel from '../layout/Carousel';
import Container from '../layout/Container';
import Card from '../layout/Card';
import XButton from '../items/Buttons/XButton';
import BoxMark from './BoxMark';

const Select = ({ onFilterChange, closeMenu }) => {
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
    <menu className="menu">

      <Section >

        <Container>
          <Card
          type="partner rounded-md mb-2 shadow-sm hover:shadow-md pt-3"
          totalPrice=""
          ></Card>
        </Container>
        
        <div className="flex justify-between">

          <h3>Filtrar Por:</h3>

          <div >
              <XButton handleOnClick={closeMenu}
              customclass="-mt-2.5"
              >
              </XButton>
          </div>
        </div>

          <div className="mb-5">

            <label htmlFor="price"
            className="block text-gray-800 text-md font-semibold"
            >
              Preço
            </label>

            <form className='flex flex-col'>
              
            <BoxMark id="" value=""
              text="Menor Preço"
              />

              <BoxMark id="" value=""
              text="Maior Preço"
              />

              <BoxMark id="" value=""
              text="Até R$1000,00"
              />

            </form>

            
            <label className="block text-gray-800 text-md font-semibold mt-3" htmlFor="brand">
              Marca
            </label>

            <form className='flex flex-col'>
              <BoxMark id="" value=""
              text="Xiaomi"
              />

              <BoxMark id="" value=""
              text="Samsung"
              />

              <BoxMark id="" value=""
              text="Motorola"/>
              
            </form>

          </div>
          <div className='w-10 h-[500px] '></div>
      </Section>
    </menu>
  );
};

export default Select;
