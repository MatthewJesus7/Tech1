// import HalfHeroSection from "../sections/HalfHeroSection"
import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
// import TypeItems from "../sections/TypeItems";
import PartnersSection from "../sections/PartnersSection";

import Section from "../sections/Section";
// import Carousel from "../layout/Carousel"
import Card from "../layout/Card"
import ProductSection from "../sections/ProductSection";
import FilterMenu from "../layout/FilterMenu";

import { useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Product() {

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

    return(
        <div className=" bg-gray-50">

            {/* <HalfHeroSection></HalfHeroSection> */}

            <HeroSection></HeroSection>

            {/* <Section>
                <Carousel items={carouselItems}>
                </Carousel>
            </Section> */}

            <CardSection></CardSection>

            {/* <Section>
                <div className="bg-red-500 size-12"></div>
            </Section> */}

            <Section id="product_section">

                <h2>Selecionados a Dedo</h2>
                
                <FilterMenu></FilterMenu>
                
                {cards.length > 0 ? (

                <ProductSection
                items={cards.slice(1, cards.length - 1)}
                topCard={cards[0]}
                bottomCard={cards[cards.length - 1]}
                />
                ) : <Card
                    type="card product loading_card"
                ></Card>}

            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product