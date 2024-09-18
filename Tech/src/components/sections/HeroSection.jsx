import Section from "./Section";
import HeroCarousel from "../layout/HeroCarousel";


const teste = [
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "",
        text: " Smartphones selecionados a dedo para você ",
        textColor: "",
        textButton: "saiba mais",
        typeButton: "dark_button",
        img: "url('/imagens/celulares.jpg')",
        customImg: " -mt-24 lg:mt-0 "
        // margens personalizaveis
    },
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "",
        text: " Smartphones selecionados a dedo para você ",
        textColor: "",
        textButton: "saiba mais",
        typeButton: "",
        img: "url('/imagens/celulares.jpg')",
    },
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "",
        text: " Smartphones selecionados a dedo para você ",
        textColor: "",
        textButton: "saiba mais",
        typeButton: "",
        img: "url('/imagens/celulares.jpg')"
    },
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "",
        text: " Smartphones selecionados a dedo para você ",
        textColor: "",
        textButton: "saiba mais",
        typeButton: "",
        img: "url('/imagens/celulares.jpg')"
    },
]

function HeroSection({ customclass }) {

    return(
        <Section customclass={`h-[600px] ${customclass}`}>

            <HeroCarousel items={teste}></HeroCarousel>

        </Section>
    )
}

export default HeroSection