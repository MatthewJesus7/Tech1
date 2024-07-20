import Section from "./Section";

import Container from "../layout/Container";
import Card from "../layout/Card";

function PartnersSection() {
    return(
        <Section customclass=" mb-10 ">
            <Container customclass=" justify-around ">
                <Card customclass="partner "
                ></Card>
                <Card customclass="partner"
                ></Card>
                <Card customclass="partner"
                ></Card>
            </Container>
        </Section>
    )
}

export default PartnersSection