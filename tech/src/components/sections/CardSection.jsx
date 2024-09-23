import Section from "./Section";
import Container from "../layout/Container";
import Carousel from "../layout/Carousel";
import Card from "../layout/Card";

import { useEffect, useState } from "react";

import { db } from '../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit  } from 'firebase/firestore'; 

function CardSection({ customclass, customclassinner}) {

  const [cards, setCards] = useState([]);

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

      const lowCards = cards.sort((a, b) => 
        parseFloat(a.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim())
      - parseFloat(b.total_price.replace(/[^\d,]/g, '').replace(',', '.').trim()));

    return(
        <Section customclass={` py-3 -mt-36 ${customclass}`}>

            <h2 
            className={`relative text-white pb-4 mix-blend-difference ${customclassinner}`}>Veja Nossos Favoritos</h2>

            { cards.length > 0 ? (

            <Carousel
                items={lowCards}
                type="card medium_card"
                customtitle="text-nowrap text-ellipsis overflow-hidden "
            ></Carousel>

        ): <Container customclass="flex-nowrap">
            <Card type="card medium_card loading_card"/>
            <Card type="card medium_card loading_card"/>
            <Card type="card medium_card loading_card"/>
            <Card type="card medium_card loading_card"/>
            <Card type="card medium_card loading_card"/>
        </Container>
    } 

        </Section>
    )
}

export default CardSection