import Section from "../sections/Section"
import Container from "./Container"

function Footer() {
    return(
        <footer className="bg-[#818284] text-white p-5">
            <Section>
                <Container >
                    <ul className=" flex justify-between w-full">
                        <h3>
                            <a href="">
                                <li>Sobre nós</li>
                            <a href=""></a></a>
                        </h3>
                        <li>
                            <ul>
                                <a href="">
                                    <h3>Samsung</h3>
                                </a>
                                <a href="">
                                    <li>Galaxy A05s</li>
                                </a>
                                <a href="">
                                    <li>Galaxy A25 5G</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <a href="">
                                    <h3>Motorola</h3>
                                </a>
                                <a href="">
                                    <li>Moto G34</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <a href="">
                                    <h3>xiaomi</h3>
                                </a>
                                <a href="">
                                    <li>Redmi Note 13 4G</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <a href="">
                                    <h3>Nossas Afiliações</h3>
                                    <li>
                                        amazon
                                    </li>
                                </a>
                            </ul>
                        </li>
                    </ul>
                </Container>
            </Section>
        </footer>
    )
}

export default Footer