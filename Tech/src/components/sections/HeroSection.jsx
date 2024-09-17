import Img from "../layout/Img";
import Section from "./Section";
import HeroCarousel from "../layout/HeroCarousel";

function navigateTo(url) {
    window.location.href = url;
  }

const teste = [
    {
        title: "A melhor qualidade pelo menor preço",
        titleColor: "",
        text: " Smartphones selecionados a dedo para você ",
        textColor: "",
        textButton: "saiba mais",
        typeButton: "dark_button",
        img: "url('/imagens/celulares.jpg')",
        customImg: " -mt-20 lg:mt-0 "
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
        <Section customclass={` block md:flex h-[600px] pt-10 ${customclass}`}>

            {/* <article className="relative z-10 p-[10%] bg-transparent text-white lg:text-black">

            mix-blend-difference

                <h1 className="text-4xl pt-10 ">
                    A melhor qualidade pelo menor preço
                </h1>
                <p className="text-lg py-2">SmartPhones selecionados a dedo para você</p>

            </article> */}

            <aside>

                <HeroCarousel items={teste}></HeroCarousel>

                {/* <Img
                customclass="top-10 right-0"
                backgroundImage="url('/imagens/celulares.jpg')"
                >
                    <button className=" mt-32 p-3 px-4 rounded-3xl border text-white
                    hover:bg-white hover:text-black
                    hover:scale-110 hover:ease-in-out hover:duration-300"

                    onClick={() => navigateTo('/about')}
                    >
                        Saiba Mais
                    </button>
                    
                </Img> */}
                
            </aside>

        </Section>
    )
}

export default HeroSection