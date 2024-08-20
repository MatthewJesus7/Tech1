// import HalfHeroSection from "../sections/HalfHeroSection"
import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
// import TypeItems from "../sections/TypeItems";
import PartnersSection from "../sections/PartnersSection";

import Section from "../sections/Section";
// import Carousel from "../layout/Carousel"
import Card from "../layout/Card"
import ProductSection from "../sections/ProductSection";

import { useEffect } from "react";
import { useState } from "react";

function Product() {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('/api/cards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers.get('Content-Type'));
        
            // Verifica se o tipo de conteúdo é JSON
            if (response.headers.get('Content-Type').includes('application/json')) {
                return response.json();
            } else {
                throw new Error('Expected JSON but received ' + response.headers.get('Content-Type'));
            }
        })
        .then(data => {
            setCards(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        
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