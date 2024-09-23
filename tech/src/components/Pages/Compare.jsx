import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Card from '../layout/Card';

import { useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 

function navigateTo(url) {
    window.location.href = url;
}

  const Compare = () => {

    const [items, setItems] = useState([]);
  
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
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    function submit(e) {
        e.preventDefault();
        searchItem();
    }

    function searchItem() {
        const results = items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results)
    }

    return (
        <>
            <form onSubmit={submit} className='w-2/3'>
                <div>
                    <label htmlFor="iSearchBar">
                        <input
                            className="bg-transparent w-full h-8 rounded-lg p-1 border border-gray-300 "

                            placeholder="Pesquisar..."
                            type="text"
                            name="searchBar"
                            id="iSearchBar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>

                    <span className="absolute -ml-7 mt-2 text-gray-500">
                        <IoIosSearch
                        className='cursor-pointer'
                        onClick={searchItem}
                        />
                    </span>
                </div>
            </form>            

            {/* <div className="cards-container">
                {items.map((item, key) => (
                    <Card showNotes={false}
                    />
                ))}
            </div> */}
        </>
    );
}

export default Compare;