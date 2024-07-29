import Section from "./Section";

import Container from "../layout/Container";
import Card from "../layout/Card";

function PartnersSection() {
    return(
        <Section customclass=" py-5 ">

            <h2>Nossas Afiliações</h2>

            <Container customclass=" justify-around p-5 ">

                <Card
                type="partner p-2"
                backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png')"
                ></Card>
                
                <Card
                type="partner bg-[#FFE700] pb-1.5 "
                backgroundImage="url('https://www.otabuleiro.com.br/storage/images/cache/62c277460851cdb2.png')"
                ></Card>

            </Container>
        </Section>
    )
}

export default PartnersSection