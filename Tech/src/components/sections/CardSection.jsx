import Section from "./Section";
import Container from "../layout/Container";
import Carousel from "../layout/Carousel";
import Card from "../layout/Card";

import { useEffect } from "react";
import { useState } from "react";


function CardSection({ customclass, customclassinner }) {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        fetch('/api/cards' , {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCards(data);
            // assuming your JSON structure has an object with key 'cards'
          })
          .catch((err) => console.log(err));
      }, []);

    return( 
        <Section customclass={` py-3 -mt-28 ${customclass}`}>

            <h2 className={`relative text-white lg:text-black pb-4 ${customclassinner}`}>Veja Nossos Favoritos</h2>

            { cards.length > 0 ? (

            <Carousel
                items={cards}
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