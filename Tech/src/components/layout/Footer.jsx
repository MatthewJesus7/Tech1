import Section from "../sections/Section"
import Container from "./Container"

function Footer() {
    return(
        <footer className="bg-[#818284] text-white p-5">
            <Section>
                <Container >
                    <ul className=" flex justify-between flex-wrap w-full footer">

                        <li>
                            <ul>
                                <a href="">
                                    <li><h3>Home</h3></li>
                                </a>
                                <a href="">
                                    <li><h3>Sobre nós</h3></li>
                                </a>
                            </ul>
                        </li>
                        
                        <li>
                            <ul>
                                <a href="">
                                    <li>
                                        <h3>Samsung</h3>
                                    </li>
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
                                    <li>
                                        <h3>Motorola</h3>
                                    </li>
                                </a>
                                <a href="">
                                    <li>Moto G34</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <a href="">
                                    <li>
                                        <h3>xiaomi</h3>
                                    </li>
                                </a>
                                <a href="">
                                    <li>Redmi Note 13 4G</li>
                                </a>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <h3>Nossas Afiliações</h3>
                                </li>
                                <a href="">
                                    <li>
                                        amazon
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        Mercado livre
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