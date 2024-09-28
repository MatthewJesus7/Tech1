import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Card from '../layout/Card';
import ListCards from '../layout/ListCards';
import SelectedCard from '../layout/SelectedCard';
import Section from '../sections/Section'
import XButton from '../items/Buttons/XButton';
import FilterButton from '../items/Buttons/FilterButton'
 
import { useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 

function navigateTo(url) {
    window.location.href = url;
}

const Compare = () => {
  const [changeValue, setChangeValue] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cardSelected, setCardSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar e buscar os dados
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cards'));
        const cardsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(cardsData);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    };
    fetchCards();
  }, []);

  const searchItem = () => {
    const results = items.filter(item => {
      const combinedText = `${item.brand || ''} ${item.title || ''}`.toLowerCase();
      return combinedText.includes(searchTerm.toLowerCase());
    });
    setFilteredItems(results);
  };

  const submit = (e) => {
    e.preventDefault();
    searchItem();
    setChangeValue(true);
  };

  const selectCard = (item) => {
    setCardSelected(item);
    console.log('Card Selecionado:', item);
    console.log('Card que vai aparecer:', cardSelected)
  };

  return (
      <>
          <Section>
              <form onChange={submit} className='w-full mb-2.5'>
                  <div>
                      <label htmlFor="iSearchBar">
                          <input
                              className="bg-transparent w-full h-8 rounded-lg p-1 border border-gray-300"
                              placeholder="Pesquisar..."
                              type="text"
                              name="searchBar"
                              id="iSearchBar"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                          />
                      </label>
                      <span className="absolute -ml-7 mt-2 text-gray-500">
                          <IoIosSearch className='cursor-pointer' onClick={searchItem} />
                      </span>
                  </div>
              </form>

              <div className='flex justify-between'>
                  <FilterButton />
                  <XButton customclass="-mt-2" />
              </div>

              <ListCards
                  customclass="relative z-10"
                  items={filteredItems}
                  onClick={selectCard}
              />

                  <SelectedCard
                      items={cardSelected
                      ? [cardSelected] 
                      : []}
                      onCheckChange={changeValue}
                  />
          </Section>
      </>
  );
}

export default Compare;