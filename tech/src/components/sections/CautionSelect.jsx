import Section from "./Section"
import Img from "../layout/Img"

const CautionSelect = () => {
    return(
        <>
        <Section customclass="flex flex-col my-5">
                <div className="relative z-10 md:text-center mb-5">
        
                    <h2 className="pb-3">Compromisso com a Seleção Cuidadosa</h2>
                    <p>Inspirados por canais de tecnologia que fornecem avaliações honestas, estamos comprometidos em selecionar cuidadosamente cada dispositivo disponível em nossa loja. Garantimos que nossos clientes obtenham os melhores telefones pelos preços mais competitivos do mercado.</p>
                </div>

                <Img
                        custom=" "
                        customclass=" w-full"
                        backgroundImage="url('/imagens/About us/pexels-zeleboba-24181865.jpg')"
                        backgroundSize="cover"
                        >
                </Img>
        </Section>
    </>
    );
}

export default CautionSelect;