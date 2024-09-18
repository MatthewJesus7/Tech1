import Section from "./Section";

import Container from "../layout/Container";
import Carousel from "../layout/Carousel"
import Card from "../layout/Card";

function PartnersSection() {

    const partnersCards = [
        {
            type: "card medium_card",
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png')"
        },
        {
            type: "card medium_card min-[1px]:bg-[#FFE700]",
            backgroundImage: "url('https://www.otabuleiro.com.br/storage/images/cache/62c277460851cdb2.png')"
        },
    ]

    return(
        <Section customclass=" py-5 ">

            <h2>Nossas Afiliações</h2>

            <Carousel items={partnersCards}></Carousel>

        </Section>
    )
}

export default PartnersSection