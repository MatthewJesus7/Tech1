import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Link from "../../items/Link"
import Carousel from '../Carousel';
import Card from '../Card';

import About from "../../Pages/About"

function navigateTo(url) {
    window.location.href = url;
  }

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
    // type: "medium_card sm:mb-5 mb-1 product",
    
    const items = [
        
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3ylNZPO",
                title: "Xiaomi Redmi Note 11",
                price: "R$ 844,95",
                backgroundImage: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')"
            },

            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/4dmSl8a",
                title: "Motorola Moto G34",
                price: "R$ 849,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/4feRBDK",
                title: "Motorola Moto G53 5G",
                price: "R$ 899,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/51aNP7WdtcL._AC_SX679_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3LKfrcY",
                title: "Galaxy A05s",
                price: "R$ 969,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/51oQc-4fAeL.__AC_SX300_SY300_QL70_ML2_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3LLC3K1",
                title: "Samsung Galaxy A14 5G",
                price: "R$ 1.012,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/61ezr50FpsL._AC_SX569_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3Sui0DD",
                title: "Redmi Note 12",
                price: "R$ 1.098,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/516d7C9LrtL._AC_SX569_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3YwZZs6",
                title: "Redmi Note 13 4G",
                price: "R$ 1.187,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/41zK0DZZNRL._AC_SX569_.jpg')",
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3zNe6PL",
                title: "Sansung Galaxy A25 5G",
                price: "R$ 1.199,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/51oC7szmO8L._AC_SX569_.jpg')"
            },
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3WtLIKc",
                title: "Celular Samsung Galaxy A25 5G",
                price: "R$ 1.199,00",
                backgroundImage: "url('https://m.media-amazon.com/images/I/51Cc4iXUumL._AC_SX679_.jpg')",
            },
            
            {
                type: "medium_card sm:mb-5 mb-1 product",
                link: "https://amzn.to/3A6Vcnm",
                title: "Redmi Note 12 Pro 4G",
                price: "R$ 1.394,99",
                backgroundImage: "url('https://m.media-amazon.com/images/I/5142s1BuATL._AC_SX569_.jpg')"
            },
    ];

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

            <Carousel items={filteredItems}></Carousel>

            <div className="cards-container">
                {filteredItems.map((item, index) => (
                    <Card/>
                ))}
            </div>
        </>
    );
}

export default Search;
