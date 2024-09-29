import { IoIosSearch } from "react-icons/io";
import Menu from '../layout/Menu'
import ListCards from '../layout/ListCards';
import SelectedCard from '../layout/SelectedCard';
import Section from '../sections/Section'
import XButton from '../items/Buttons/XButton';
import HalfHeroSection from "../sections/HalfHeroSection";
 
import { useState, useRef, useEffect, forwardRef } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 

const Compare = forwardRef((ref)  => {
  
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
    openMenu('listCards')
  };

  const selectCard = (item) => {
    setCardSelected((prevSelected) => {

      if (prevSelected.length === 0) {
        return [item];

      } else if (prevSelected.length === 1) {
        return [...prevSelected, item];

      } else {
        return [prevSelected[1], item];
      }
    });
    closeMenu()
    // console.log('Card Selecionado:', item);
  };

  
  const [isAnimating, setIsAnimating] = useState(false);
  const [aparecerMenu, setAparecerMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const menuRef = useRef(null);

  const openMenu = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setAparecerMenu(true);
    setTimeout(() => {
        setIsAnimating(true);
    }, 0);
};

const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setIsAnimating(false);
        setAparecerMenu(false);
        setSelectedMenuItem(null);
    }, 500);
};

const toggleMenu = (menuItem) => {
    if (selectedMenuItem === menuItem) {
        closeMenu();
    } else {
        if (aparecerMenu) {
            closeMenu();
            setTimeout(() => {
                openMenu(menuItem);
            }, 500);
        } else {
            openMenu(menuItem);
        }
    }
};

  return (
      <main className='bg-gray-50 pb-10'>
          <HalfHeroSection></HalfHeroSection>

          <Section>
              <form onChange={submit} className='w-full mb-2.5 mt-10'>
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

              <div className='flex justify-end'>
                  <XButton customclass="-mt-2" 
                  handleOnClick={closeMenu}
                  />
              </div>

              <Menu
                ref={menuRef}
                handleOnClick={closeMenu}
                customclass={`transform transition-all duration-1000 overflow-y-auto compare_menu ${
                    aparecerMenu
                        ? isAnimating
                            ? 'translate-y-[100px] glass h-[77%]'
                            : 'translate-y-[100px] h-[77%]'
                        : isAnimating
                        ? 'h-0 border-none translate-y-[90px]'
                        : 'translate-y-[90px] glass h-0 border-none'
                }`}
            >
                 <ListCards
                 customclass=""
                 items={filteredItems}
                 onClick={selectCard}
             />
            </Menu>

              <SelectedCard
                  items={cardSelected}
                  onCheckChange={changeValue}
              />
          </Section>
      </main>
  );
});

export default Compare;