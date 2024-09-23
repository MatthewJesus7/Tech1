import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Link from "../../items/Link"
import Carousel from '../Carousel';
import Card from '../Card';

import { useEffect } from 'react';


  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../../../firebaseConfig'; 

  function navigateTo(url) {
    window.location.href = url;
  }

  function Search() {
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

            <div className='flex my-3 py-1 text-lg font-semibold flex-wrap'>
                <Link onClick={() => navigateTo('/about')}
                text="sobre nós"
                textCustom="pr-5"
                ></Link>

                <Link onClick={() => navigateTo('/TalkToUs')}
                text="fale conosco"
                textCustom="pr-5"
                ></Link>

                <Link onClick={() => navigateTo('/Compare')}
                text="Comparar Smartphones"
                textCustom=""
                ></Link>
            </div>
            
            <h2>Talvez você esteja procurando:</h2>

            <Carousel
            items={filteredItems}
            type="card search_card pb-28"
            ></Carousel>

            

            <div className="cards-container">
                {filteredItems.map((item, key) => (
                    <Card
                    />
                ))}
            </div>
        </>
    );
}

export default Search;