import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
import PartnersSection from "../sections/PartnersSection";
import Section from "../sections/Section";
import ProductSection from "../sections/ProductSection";
import FilterMenu from "../layout/FilterMenu";
import Card from "../layout/Card";

function Product() {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({ total_price: '', brand: '', config: [] });
  const [filteredCards, setFilteredCards] = useState([]);

  // Fetch cards from Firestore
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
          if (filters.total_price === 'low') return true;
          if (filters.total_price === 'high') return true;
          if (filters.total_price === '1000') return total_price <= 1000;
          if (filters.total_price === '900') return total_price <= 900;
          if (filters.total_price === '800') return total_price <= 800;
          if (filters.total_price === '700') return total_price <= 700;
          if (filters.total_price === '0') return true;
          return true;
        })();

        const matchesBrand = filters.brand ? card.brand === filters.brand : true;

        const matchesConfig = (() => {
          if (!filters.config.length) return true; 
            if (filters.config === 'custo-beneficio') return true;
            if (filters.config === 'hardware') return true;
            if (filters.config === 'camera') return true;
            if (filters.config === 'tela') return true;
            if (filters.config === 'desempenho') return true;
        })();

        return matchesPrice && matchesBrand && matchesConfig;
      });

      // Ordenação condicional se algum filtro de `config` estiver selecionado
      if (filters.config.includes('custo-beneficio')) {
        filtered.sort((a, b) =>
          parseFloat(b.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim())
        );
      }

      if (filters.config.includes('hardware')) {
        filtered.sort((a, b) =>
          parseFloat(b.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim())
        );
      }

      if (filters.config.includes('camera')) {
        filtered.sort((a, b) =>
          parseFloat(b.camera.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.camera.replace(/[^\d,]/g, '').replace(',', '.').trim())
        );
      }

      if (filters.config.includes('tela')) {
        filtered.sort((a, b) =>
          parseFloat(b.tela.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.tela.replace(/[^\d,]/g, '').replace(',', '.').trim())
        );
      }

      if (filters.config.includes('desempenho')) {
        filtered.sort((a, b) =>
          parseFloat(b.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
          parseFloat(a.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim())
        );
      }

      if (filters.total_price === 'low') {
        filtered.sort((a, b) => 
        parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) 
        - parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

      if (filters.total_price === 'high') {
        filtered.sort((a, b) => parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) - parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()));
      }

      // Use a função setFilteredCards somente se os resultados filtrados forem diferentes
      if (JSON.stringify(filtered) !== JSON.stringify(filteredCards)) {
        setFilteredCards(filtered);
      }
    };

    applyFilters();
  }, [cards, filters, filteredCards]);

  const handleFilterChange = (newFilters) => {
    // Verifique se os novos filtros são diferentes dos atuais
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(newFilters);
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
          <Card className='card partner loading_card'/>
        )}
      </Section>

      <PartnersSection />
    </div>
  );
}

export default Product;
