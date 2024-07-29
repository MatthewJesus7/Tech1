import Section from "../sections/Section";
import PartnersSection from "../sections/PartnersSection"
import Container from "../layout/Container";
import Img from "../layout/Img";

function About() {
    return(
        <article className="mt-10 center">

            <Section customclass="text-center sm:text-left">
                <h1 className="text-4xl mt-20 mb-10">Sobre nós</h1>
            </Section>

            <Section customclass="flex items-center my-5">

                    <div className="relative z-10 text-white lg:text-black lg:pr-10">

                        <h2 className="pb-32">Qualidade e Preço que Cabem no Seu Bolso</h2>

                        <p>Na nossa loja, nossa missão é simples: oferecer smartphones de alta qualidade a preços acessíveis. Acreditamos que todos merecem acesso aos melhores smartphones sem precisar gastar uma fortuna. Nosso foco é ajudar os consumidores brasileiros a evitar produtos caros e de baixa qualidade, guiando-os na escolha do telefone ideal para suas necessidades.</p>
                    </div>
                    <Img
                    customclass=" top-40 left-0"
                    backgroundImage="url('/imagens/About us/pexels-charlotte-may-5966015.jpg')"
                    >
                    </Img>
            </Section>


            <Section customclass="flex flex-col my-5">

                    <div className="relative z-10 mt-3 mb-10 md:text-center">
                        
                        <h2 className="pb-3">Compromisso com a Seleção Cuidadosa</h2>

                        <p>Inspirados por canais de tecnologia que fornecem avaliações honestas, estamos comprometidos em selecionar cuidadosamente cada dispositivo disponível em nossa loja. Garantimos que nossos clientes obtenham os melhores telefones pelos preços mais competitivos do mercado.</p>
                    </div>
                    <Img
                    custom="mt-0 mb-[600px]"
                    customclass="block left-0 lg:w-full"
                    backgroundImage="url('/imagens/About us/pexels-zeleboba-24181865.jpg')"
                    >
                    </Img>
            </Section>
            
            <Section customclass="flex flex-row-reverse items-center my-5">

                    <div className="relative z-10 text-white mix-blend-difference lg:text-black lg:pl-10">

                        <h2 className="pb-32">Foco em Qualidade e Valor</h2>

                        <p>Nosso público-alvo é composto por indivíduos das classes média e baixa que procuram qualidade e valor. Queremos que nossos clientes sintam confiança ao saber que estão recebendo o melhor produto pelo preço pago.</p>
                    </div>
                    <Img
                    customclass=" top-[1600px] left-0"
                    backgroundImage="url('/imagens/About us/pexels-cottonbro-5083491.jpg')"
                    >
                    </Img>
            </Section>

            {/* <Section customclass="flex items-center">

                    <div className="relative z-10 text-white lg:text-black lg:pr-10">

                        <h2 className="pb-32">Paixão pela Tecnologia</h2>

                        <p>Nossa operação é conduzida por uma única pessoa – um desenvolvedor web apaixonado por tecnologia. Desde a infância, ele se dedicou a estudar smartphones para escolher o melhor modelo. Hoje, ele utiliza essa expertise para oferecer o melhor aos nossos clientes.</p>
                    </div>
                    <Img
                    customclass=" top-[2210px] left-0 bg-black "
                    backgroundImage="url('/imagens/About us/Menino-programador-transparente750px.png')"
                    >
                    </Img>
            </Section> */}

            <Section customclass="flex flex-col my-5">

                    <div className="relative z-10 mt-3 mb-10 md:text-center">

                        <h2 className="pb-3">Cultura Justa e Centrada no Cliente</h2>

                        <p>Com uma cultura justa e centrada no cliente, nossa loja está comprometida em transformar a maneira como as pessoas compram tecnologia e smartphones. Estamos prontos para ajudar nossos clientes a encontrar as melhores ofertas e produtos disponíveis.</p>
                    </div>
                    <Img
                    custom="mt-0 mb-[600px]"
                    customclass="block left-0 lg:w-full"
                    backgroundImage="url('/imagens/About us/pexels-fauxels-3184360.jpg')"
                    >
                    </Img>
            </Section>

            {/* <div className="h-20 sm:h-40 lg:h-20"></div> */}

            <PartnersSection></PartnersSection>

        </article>
    )
}


export default About