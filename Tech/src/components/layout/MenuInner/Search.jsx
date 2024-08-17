import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Link from "../../items/Link"
import Carousel from '../Carousel';
import Card from '../Card';

import About from "../../Pages/About"

import { useEffect } from 'react';


function navigateTo(url) {
    window.location.href = url;
  }

function Search() {

    const [items, setItems] = useState([]);
    const type = items.type

    useEffect(() => {

        fetch('http://localhost:8000/cards' , {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
          .then((resp) => resp.json())
          .then((data) => {
            setItems(data);
            // assuming your JSON structure has an object with key 'categories'
          })
          .catch((err) => console.log(err));
      }, []);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
    // type: "medium_card sm:mb-5 mb-1 product",

    function submit(e) {
        e.preventDefault();
        searchItem();
    }

    function searchItem() {
        const results = items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="iSearchBar">
                        <input
                            className="bg-gray-100 w-2/3 h-8 rounded-lg p-1 border border-gray-300"
                            placeholder="Search..."
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

            <div className='flex'>
                <Link onClick={() => navigateTo('/about')}
                text="About"
                textCustom="my-3 py-2 text-lg font-semibold"
                ></Link>
            </div>
            
            <h2>Talvez você esteja procurando:</h2>

            <Carousel
            items={filteredItems}
            type="medium_card sm:mb-5 mb-1 product"
            ></Carousel>

            <div className="cards-container">
                {filteredItems.map((item, index) => (
                    <Card/>
                ))}
            </div>
        </>
    );
}

export default Search;
