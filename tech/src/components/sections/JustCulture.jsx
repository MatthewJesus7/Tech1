import Section from "./Section"
import Img from "../layout/Img"

const JustCulture = () => {
    return(
        <div>
                <Section customclass="flex flex-col my-5 ">
                        <div className="relative z-10 mt-3 mb-5 md:text-center">
                            <h2 className="pb-3">Cultura Justa e Centrada no Cliente</h2>
                            <p>Com uma cultura justa e centrada no cliente, nossa loja está comprometida em transformar a maneira como as pessoas compram tecnologia e smartphones. Estamos prontos para ajudar nossos clientes a encontrar as melhores ofertas e produtos disponíveis.</p>
                        </div>
                </Section>
                <div className="max-w-7xl h-[390px] mx-auto lg:px-[5%]">
                    <Img
                        custom=""
                        customclass="h-[390px] w-full "
                        backgroundImage="url('/imagens/About us/pexels-fauxels-3184360.jpg')"
                        backgroundSize="cover"
                        >
                    </Img>
                </div>
            </div>
    );
}

export default JustCulture;