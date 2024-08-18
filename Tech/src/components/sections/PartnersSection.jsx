import Section from "./Section";

import Container from "../layout/Container";
import Card from "../layout/Card";

function PartnersSection() {
    return(
        <Section customclass=" py-5 ">

            <h2>Nossas Afiliações</h2>

            <Container customclass=" justify-around p-5 ">

                <Card
                type="partner pt-3.5 p-1"
                backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png')"
                ></Card>

                <div></div>
                
                <Card
                customclass=" min-[1px]:bg-[#FFE700]"
                type="partner pt-1 "
                backgroundImage="url('https://www.otabuleiro.com.br/storage/images/cache/62c277460851cdb2.png')"
                ></Card>

            </Container>
        </Section>
    )
}

export default PartnersSection