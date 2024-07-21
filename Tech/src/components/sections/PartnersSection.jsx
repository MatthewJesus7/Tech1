import Section from "./Section";

import Container from "../layout/Container";
import Card from "../layout/Card";

function PartnersSection() {
    return(
        <Section customclass=" py-5 ">

            <h2>Nossas Afiliações</h2>

            <Container customclass=" justify-around p-5 ">

                <Card customclass="partner "
                ></Card>

            </Container>
        </Section>
    )
}

export default PartnersSection