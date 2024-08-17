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

        fetch('http://localhost:8000/cards' , {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCards(data);
            // assuming your JSON structure has an object with key 'categories'
          })
          .catch((err) => console.log(err));
      }, []);


    return(
        <div className="center bg-gray-50">

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
                    type=" sm:card medium_card sm:mb-5 mb-1 product "
                ></Card>}

            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product