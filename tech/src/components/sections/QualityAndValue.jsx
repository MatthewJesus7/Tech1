import Section from "./Section"
import Img from "../layout/Img"

const QualityAndValue = () => {
    return(
        <div className="lg:flex lg:flex-row-reverse max-w-7xl mx-auto lg:px-[5%]">
                <Section 
                customclass="absolute lg:static my-5">
                    <div className=" relative z-10 text-white mix-blend-difference lg:text-black ">
                            <h2 className="pb-32 text-white lg:text-gray-900">
                                Foco em Qualidade e Valor
                            </h2>
                            <p >
                                Nosso público-alvo é composto por indivíduos das classes média e baixa que procuram qualidade e valor. Queremos que nossos clientes sintam confiança ao saber que estão recebendo o melhor produto pelo preço pago.
                            </p>
                        </div>
                
                </Section>
                <div>
                    <Img
                    customclass="w-full"
                    backgroundImage="url('/imagens/About us/pexels-cottonbro-5083491.jpg')"
                    backgroundSize="cover"
                    >
                    </Img>
                </div>
            </div>
    );
}

export default QualityAndValue;