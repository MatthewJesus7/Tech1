import HeroCarousel from "../layout/HeroCarousel";


const heroCarouselData = [
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "lg:bg-[#848587] text-white",
        text: " Smartphones selecionados a dedo para você ",
        textStyle: "lg:absolute",
        textButton: "saiba mais",
        typeButton: "dark_button",
        img: "url('/imagens/celulares.jpg')",
        customImg: " mt-[120px] lg:m-0",
        backgroundColor: 'bg-[#818284]', 
        backgroundSize: "cover",
        backgroundPosition: '',
        // margens personalizaveis
        href: "#",
    },
    {
        title: 'Melhor custo beneficio! 12x de R$ 74,99',
        titleColor: "",
        text: "Samsung Galaxy A15 4G 128GB",
        textStyle: "lg:text-nowrap",
        textButton: "Confira agora!",
        typeButton: "dark_button",
        img: "url('https://m.media-amazon.com/images/I/51SpxEnKrTL.__AC_SX300_SY300_QL70_ML2_.jpg')",
        customImg: "mt-[180px] ml-[25%] lg:m-0 ",
        backgroundColor: '',
        imgSize: "w-[75%]",
        backgroundSize: "contain",
        backgroundPosition: 'top center',
        href: "https://amzn.to/3BmXJKw",
        target: "_blank",
        rel: "external",
    },
    {
        title: "Exclusivo! Custo beneficio para Gaming?",
        titleColor: "",
        text: "Smartphones em equilibrio entre preço e performance.",
        textStyle: "",
        textColor: "",
        textButton: "Veja agora!",
        // a nossa loja
        typeButton: "dark_button",
        img: "url('https://m.media-amazon.com/images/I/41ovkvMj2CL.__AC_SY300_SX300_QL70_ML2_.jpg')",
        customImg: "mt-[180px] lg:m-0 ",
        backgroundColor: '',
        imgSize: "",
        backgroundSize: "contain",
        backgroundPosition: 'top center',
        href: "https://amzn.to/3TEt81w",
        // target: "_blank",
        // rel: "external",
    },
]

function HeroSection({ customclass }) {

    return(
        <section className={`h-[540px] md:h-[460px] lg:h-96 ${customclass}`}>

            <HeroCarousel 
            items={heroCarouselData}
            customCarousel="bg-white"
            ></HeroCarousel>

        </section>
    )
}

export default HeroSection