import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
import PartnersSection from "../sections/PartnersSection";
import Section from "../sections/Section";
import Card from "../layout/Card";
import ProductSection from "../sections/ProductSection";
import FilterMenu from "../layout/FilterMenu";

function Product() {

  const [cards, setCards] = useState([]);

  const [filters, setFilters] = useState({ totalPrice: '', brand: '' });
  const [filteredCards, setFilteredCards] = useState([]);


  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cards'));
        const cardsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCards(cardsData);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const applyFilters = () => {

      const filtered = cards.filter(card => {
        const totalPrice = parseFloat(
          card.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()
        );
        
        const matchesPrice = (() => {

          // if (filters.config === 'custo-beneficio') return true
          // if (filters.config === 'hardware') return filtered.sort((a, b) => a.hardware - b.hardware);
          // // Segue no mesmo estilo acima
          // if (filters.config === 'tela') return true;
          // if (filters.config === 'camera') return true;
          // if (filters.config === 'desempenho') return true;
          
          if (filters.totalPrice === 'low') return true;
          if (filters.totalPrice === 'high') return true;

          if (filters.totalPrice === '1000') return totalPrice <= 1000;
          if (filters.totalPrice === '900') return totalPrice <= 900;
          if (filters.totalPrice === '800') return totalPrice <= 800;
          // if (filters.totalPrice === '700') return totalPrice <= 700;
          // if (filters.totalPrice === '600') return totalPrice <= 600;

          if (filters.totalPrice === '0') return true;
          return true;
        })();

  
        const matchesBrand = filters.brand ? card.brand === filters.brand : true;
  
        return matchesPrice && matchesBrand;
      });

      if (filters.totalPrice === 'low') {
        filtered.sort((a, b) => parseFloat(a.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()) - parseFloat(b.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()));
  
      } else if (filters.totalPrice === 'high') {
        filtered.sort((a, b) => parseFloat(b.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()) - parseFloat(a.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

  
      // Use a função `setFilteredCards` somente se os resultados filtrados forem diferentes
      if (JSON.stringify(filtered) !== JSON.stringify(filteredCards)) {
        setFilteredCards(filtered);
      }
    };
  
    applyFilters();
  }, [cards, filters]); // Dependências ajustadas, sem `filteredCards`
  
  const handleFilterChange = (newFilters) => {
    // Verifique se os novos filtros são diferentes dos atuais
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(newFilters);
    }
  };

  // console.log(filteredCards)

  return (
    <div className="bg-gray-50">
      <HeroSection />

      <CardSection />

      <Section id="product_section">

        <div className="flex justify-between">
          <h2>Selecionados a Dedo</h2>

          <FilterMenu onFilterChange={handleFilterChange} />
        </div>
        
        {filteredCards.length > 0 ? (
          <ProductSection
            items={filteredCards.slice(1, filteredCards.length - 1)}
            topCard={filteredCards[0]}
            bottomCard={filteredCards[filteredCards.length - 1]}
          />
        ) : (
          <Card type="card product loading_card" />
        )}
      </Section>

      <PartnersSection />
    </div>
  );
}

export default Product;
