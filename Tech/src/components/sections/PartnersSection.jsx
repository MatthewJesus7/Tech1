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

            </Container>
        </Section>
    )
}

export default PartnersSection