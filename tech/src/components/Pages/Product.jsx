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

const falseCard = [
  {
    "link": "https://www.tudocelular.com/clickgo/?id=8965&pid=draznB0CRWL1WYP&nid=2170259575&area=12&prz=809&hash=8a68274436968bf0024c34c7c1c657d3",
    "title": "Smartphone Samsung Galaxy A15 4G 128GB - Verde Claro",
    "price": "ou R$ 899,00 em até 12x de R$ 74,99 sem juros",
    "totalPrice": "R$ 809,10",
    "backgroundImage": "https://m.media-amazon.com/images/I/51SpxEnKrTL._AC_SX425_.jpg",
    "custo_beneficio": "10 ",
    "hardware": "7.5 ",
    "tela": "8.5 ",
    "camera": "7.7 ",
    "desempenho": "4.9 "
},
{
    "link": "https://www.tudocelular.com/clickgo/?id=9186&pid=draznB0CZ5JJRPP&nid=2170259575&area=12&prz=999&hash=a893d5836aaa82d5851ba752b99fe554",
    "title": "Celular Samsung Galaxy M15 5G, 6.000mAh, Câmera Tripla até 50MP, 128GB (Azul Escuro)",
    "price": "Em até 10x R$ 99,90 sem juros",
    "totalPrice": "R$ 999,00",
    "backgroundImage": "https://m.media-amazon.com/images/I/51Z0P8+CeQL._AC_SY450_.jpg",
    "custo_beneficio": "9.8 ",
    "hardware": "7.7 ",
    "tela": "8.5 ",
    "camera": "7.7 ",
    "desempenho": "5.3 "
},
{
    "link": "https://www.tudocelular.com/clickgo/?id=8966&pid=draznB0CRWQH7CK&nid=2170259575&area=12&prz=939&hash=217147e49c771ce1c23cf41a030ef24c",
    "title": "Smartphone Samsung Galaxy A15 5G 128GB - Azul Escuro",
    "price": "Em até 12x de R$ 87,64 com juros",
    "totalPrice": "R$ 939,00",
    "backgroundImage": "https://m.media-amazon.com/images/I/51gmiZg4ChL._AC_SX425_.jpg",
    "custo_beneficio": "9.8 ",
    "hardware": "7.7 ",
    "tela": "8.5 ",
    "camera": "7.7 ",
    "desempenho": "5.3 "
},
]

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
          items={falseCard.slice(1, falseCard.length - 1)}
            topCard={falseCard[0]}
            bottomCard={falseCard[falseCard.length - 1]}
            // items={filteredCards.slice(1, filteredCards.length - 1)}
            // topCard={filteredCards[0]}
            // bottomCard={filteredCards[filteredCards.length - 1]}
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
