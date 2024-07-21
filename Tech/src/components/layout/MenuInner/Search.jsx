import React, { useState } from 'react';

import { IoIosSearch } from "react-icons/io";
import Carousel from '../Carousel';
import Card from '../Card';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        {
            type: "medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3LSa63z",
            title: "Motorola Moto G34",
            price: "R$ 850,90",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')"
        },
        {
            type: "medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3WbGLWu",
            title: "Sansung Galaxy A05s",
            price: "R$ 979,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')"
        },
        {
            type: "medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Sansung Galaxy A25 5G",
            price: "R$ 1.199,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/41VUO7JwA1L._AC_SX569_.jpg')"
        },
        {
            type: "medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Redmi Note 13 4G",
            price: "R$ 1.209,90",
            backgroundImage: "url('https://gazin-images.gazin.com.br/I-2m6C1MopVBRIQFsOJI5cYeiy4=/1920x/filters:format(webp):quality(75)/https://gazin-images.gazin.com.br/B5rOtIdJucsTgKFdcmivIiM5SzU=/filters:format(webp):quality(75)/https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2024/05/smartphone-xiaomi-redmi-note-13-4g-66-octa-core-256gb-8gb-camera-tripla-162405161440.jpg')",
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
            <form className="mb-10" onSubmit={submit}>
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
