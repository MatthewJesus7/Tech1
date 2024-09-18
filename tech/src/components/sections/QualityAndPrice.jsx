import Section from "./Section";
import Img from "../layout/Img";

const QualityAndPrice = () => {
    return(
        <div className="flex">
                <Section customclass="absolute flex flex-wrap items-center my-5 lg:flex-nowrap lg:static">
                        <div className="relative z-10 lg:pr-10 text-white lg:text-gray-900">
                            <h2 className="pb-28 text-white lg:text-gray-950">
                                Qualidade e Preço que Cabem no Seu Bolso
                            </h2>
                            <p>
                                Na nossa loja, nossa missão é simples: oferecer smartphones de alta qualidade a preços acessíveis. Acreditamos que todos merecem acesso aos melhores smartphones sem precisar gastar uma fortuna. Nosso foco é ajudar os consumidores brasileiros a evitar produtos caros e de baixa qualidade, guiando-os na escolha do telefone ideal para suas necessidades.</p>
                        </div>
                </Section>
                <div className=" h-400px w-full ">
                    <Img
                    customclass=" size-full "
                    backgroundImage="url('/imagens/About us/pexels-charlotte-may-5966015.jpg')"
                    backgroundSize="cover"
                    >
                    </Img>
                </div>
            </div>
    );
}

export default QualityAndPrice;