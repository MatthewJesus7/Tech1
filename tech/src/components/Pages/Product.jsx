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
  
        const matchesPrice = (() => {
          if (filters.total_price === 'low') return true;
          if (filters.total_price === 'high') return true;
          if (filters.total_price === '1600') return total_price <= 1600;
          if (filters.total_price === '1500') return total_price <= 1500;
          if (filters.total_price === '1400') return total_price <= 1400;
          if (filters.total_price === '1300') return total_price <= 1300;
          if (filters.total_price === '1200') return total_price <= 1200;
          if (filters.total_price === '1100') return total_price <= 1100;
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
          return true;  // Sempre valida, pois será ordenado no `sort`.
        })();
  
        return matchesPrice && matchesBrand && matchesConfig;
      });
  
      // Função combinada de ordenação
      filtered.sort((a, b) => {
        // Ordenar por custo-benefício se estiver incluído
        if (filters.config.includes('custo-beneficio')) {
          const custoBeneficioDiff = parseFloat(b.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim()) - 
            parseFloat(a.custo_beneficio.replace(/[^\d,]/g, '').replace(',', '.').trim());
          if (custoBeneficioDiff !== 0) return custoBeneficioDiff;
        }
  
        // Ordenar por hardware
        if (filters.config.includes('hardware')) {
          const hardwareDiff = parseFloat(b.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim()) - 
            parseFloat(a.hardware.replace(/[^\d,]/g, '').replace(',', '.').trim());
          if (hardwareDiff !== 0) return hardwareDiff;
        }
  
        // Ordenar por câmera
        if (filters.config.includes('camera')) {
          const cameraDiff = parseFloat(b.camera.replace(/[^\d,]/g, '').replace(',', '.').trim()) - 
            parseFloat(a.camera.replace(/[^\d,]/g, '').replace(',', '.').trim());
          if (cameraDiff !== 0) return cameraDiff;
        }
  
        // Ordenar por tela
        if (filters.config.includes('tela')) {
          const telaDiff = parseFloat(b.tela.replace(/[^\d,]/g, '').replace(',', '.').trim()) - 
            parseFloat(a.tela.replace(/[^\d,]/g, '').replace(',', '.').trim());
          if (telaDiff !== 0) return telaDiff;
        }
  
        // Ordenar por desempenho
        if (filters.config.includes('desempenho')) {
          const desempenhoDiff = parseFloat(b.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim()) - 
            parseFloat(a.desempenho.replace(/[^\d,]/g, '').replace(',', '.').trim());
          if (desempenhoDiff !== 0) return desempenhoDiff;
        }
  
        // Se nenhuma diferença foi encontrada, ordenar pelo preço
        if (filters.total_price === 'low') {
          return parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
            parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim());
        } else if (filters.total_price === 'high') {
          return parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()) -
            parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim());
        }
  
        return 0; // Nenhuma diferença, manter a ordem original
      });
  
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

      <Section id="product_section" customclass="lg:pt-[5%] md:pt-[8%] pt-[10%]">
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
