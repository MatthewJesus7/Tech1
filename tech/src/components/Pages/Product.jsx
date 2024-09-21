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

  const [filters, setFilters] = useState({ total_price: '', brand: '' });
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

        const total_price = parseFloat(
          card.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()
        );
        
        const matchesPrice = (() => {

          if (filters.config === 'custo-beneficio') return true;
          if (filters.config === 'hardware') return true;
          if (filters.config === 'tela') return true;
          if (filters.config === 'camera') return true;
          if (filters.config === 'desempenho') return true;
          
          if (filters.total_price === 'low') return true;
          if (filters.total_price === 'high') return true;

          if (filters.total_price === '1000') return total_price <= 1000;
          if (filters.total_price === '900') return total_price <= 900;
          if (filters.total_price === '800') return total_price <= 800;
          if (filters.total_price === '700') return total_price <= 700;
          if (filters.total_price === '600') return total_price <= 600;

          if (filters.total_price === '0') return true;
          return true;
        })();

  
        const matchesBrand = filters.brand ? card.brand === filters.brand : true;
  
        return matchesPrice && matchesBrand;
      });

      // const sortLow = (item) => {
      //   filtered.sort((a, b) =>
      //     parseFloat(a.item.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
      //   - parseFloat(b.item.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      // }

      if (filters.config === 'custo-beneficio') {
        filtered.sort((a, b) =>
          parseFloat(b.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(a.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      };

      if (filters.config === 'hardware') {
        filtered.sort((a, b) =>
          parseFloat(b.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(a.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      };

      if (filters.config === 'camera') {
        filtered.sort((a, b) =>
          parseFloat(b.camera.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(a.camera.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      };

      if (filters.config === 'tela') {
        filtered.sort((a, b) =>
          parseFloat(b.tela.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(a.tela.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      };

      if (filters.config === 'desempenho') {
        filtered.sort((a, b) =>
          parseFloat(b.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(a.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim()))
      };

      if (filters.total_price === 'low') {
        filtered.sort((a, b) => 
        parseFloat(a.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(b.totalPrice.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

      if (filters.total_price === 'high') {
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
        
        {cards.length > 0 ? (
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
