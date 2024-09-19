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
        customImg: " -mt-24 lg:mt-0 ",
        backgroundSize: "cover",
        // margens personalizaveis
        href: "#",
    },
    {
        title: "Melhor custo beneficio! 12x R$ 78,86",
        titleColor: "",
        text: " xiaomi redmi note 11",
        textColor: "",
        textButton: "confira agora",
        typeButton: "dark_button",
        img: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')",
        customImg: " justify-end -mt-[5%] lg:mt-0",
        backgroundSize: "contain",
        href: "https://amzn.to/3ylNZPO",
        target: "_blank",
        rel: "external",
    },
    {
        title: "Exclusivo! Custo beneficio para Gaming?",
        titleColor: "",
        text: "Smartphones em equilibrio entre preço e performance.",
        textColor: "",
        textButton: "Confira a nossa loja!",
        typeButton: "dark_button",
        img: "url('https://vectorportal.com/storage/PsmjzFPWw83dAwzIcRuncp5VdP64H7VSfWB7E0pJ.jpg')",
        customImg: " justify-end -mt-[5%] lg:mt-0",
        backgroundSize: "cover",
        href: "#",
        // target: "_blank",
        // rel: "external",
    },
]

function HeroSection({ customclass }) {

    return(
        <section className={`h-[600px] ${customclass}`}>

            <HeroCarousel items={teste}></HeroCarousel>

        </section>
    )
}

export default HeroSection