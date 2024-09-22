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
  const [filters, setFilters] = useState({ total_price: '', brand: '', config: [] }); // config como array
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
        const total_price = parseFloat(card.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim());

        // Verifica se o preço se encaixa nos filtros
        const matchesPrice = (() => {
          if (filters.total_price === 'low') return true; // Lógica desejada
          if (filters.total_price === 'high') return true; // Lógica desejada
          if (filters.total_price === '1000') return total_price <= 1000;
          if (filters.total_price === '900') return total_price <= 900;
          if (filters.total_price === '800') return total_price <= 800;
          if (filters.total_price === '700') return total_price <= 700;
          if (filters.total_price === '0') return true;
          return true;
        })();

        const matchesBrand = filters.brand ? card.brand === filters.brand : true;

        const matchesConfig = filters.config.length > 0

          ? filters.config.some(config => card[config] !== undefined && card[config])
          : true;


        return matchesPrice && matchesBrand && matchesConfig;
      });

      // Ordenação condicional por configuração
      filters.config.forEach(config => {
        if (config) {
          filtered.sort((a, b) =>
            parseFloat(b[config].replace(/[^\d,]/g, '').replace(',', '.').trim()) -
            parseFloat(a[config].replace(/[^\d,]/g, '').replace(',', '.').trim())
          );
        }
      });

      // Ordenação por preço
      if (filters.total_price === 'low') {
        filtered.sort((a, b) =>
          parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

      if (filters.total_price === 'high') {
        filtered.sort((a, b) =>
          parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

      // Use a função setFilteredCards somente se os resultados filtrados forem diferentes
      if (JSON.stringify(filtered) !== JSON.stringify(filteredCards)) {
        setFilteredCards(filtered);
      }
    };

    applyFilters();
  }, [cards, filters]);

  const handleFilterChange = (newFilters) => {
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(prevFilters => ({
        ...prevFilters,
        ...newFilters,
        config: newFilters.config ? Array.isArray(newFilters.config) ? newFilters.config : [newFilters.config] : []
      }));
    }
  };

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
