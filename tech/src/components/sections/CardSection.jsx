import Section from "./Section";
import Container from "../layout/Container";
import Carousel from "../layout/Carousel";
import Card from "../layout/Card";

import { useEffect, useState } from "react";

import { db } from '../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore'; 

function CardSection({ customclass, customclassinner }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const queries = [
          query(collection(db, 'cards'), orderBy('custo_beneficio', 'asc'), limit(1)),
          query(collection(db, 'cards'), orderBy('hardware', 'desc'), limit(10)),
          query(collection(db, 'cards'), orderBy('camera', 'desc'), limit(6)),
          query(collection(db, 'cards'), orderBy('tela', 'desc'), limit(8)),
          query(collection(db, 'cards'), orderBy('desempenho', 'desc'), limit(11)),
          query(collection(db, 'cards'), where('total_price', '==', 'R$ 618,00'), orderBy('total_price', 'asc'), limit(1))
        ];

        const results = await Promise.all(queries.map(query => getDocs(query)));

        const cardsData = results.flatMap((querySnapshot, index) => {
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            label: ''  // Adicione o label padrão
          }));

          switch (index) {
            case 0: 
              data[0].label = "Melhor Custo-Benefício";
              return data[0];
            case 1: 
              data[9].label = "Top Hardware";
              return data[9];
            case 2: 
              data[5].label = "Melhor Câmera";
              return data[5];
            case 3: 
              data[7].label = "Melhor Tela";
              return data[7];
            case 4: 
              data[10].label = "Melhor Desempenho";
              return data[10];
            case 5: 
              data[0].label = "Melhor Preço";
              return data[0];
            default: 
              return null;
          }
        }).filter(card => card !== undefined);

        setCards(cardsData);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <Section customclass={`pt-[5%] ${customclass}`}>
      <h2 className={`${customclassinner}`}>
        Veja Nossos Favoritos
      </h2>

      {cards.length > 0 ? (
        <Carousel
          items={cards}
          type="card medium_card min-[440px]:carousel_card "
        />
      ) : (
        <Container customclass="flex-nowrap">
          <Card type="card medium_card loading_card"/>
          <Card type="card medium_card loading_card"/>
          <Card type="card medium_card loading_card"/>
          <Card type="card medium_card loading_card"/>
          <Card type="card medium_card loading_card"/>
        </Container>
      )}
    </Section>
  );
}


export default CardSection;
