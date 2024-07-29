import Img from "../layout/Img";
import Section from "./Section";

function navigateTo(url) {
    window.location.href = url;
  }

function HeroSection({ customclass }) {
    return(
        <Section customclass={` block md:flex h-[600px] pt-10 ${customclass}`}>

            <article className="relative z-10 p-[10%] bg-transparent text-white sm:text-black">

            {/* mix-blend-difference */}

                <h1 className="text-4xl pt-10 ">
                    A melhor qualidade pelo menor preço
                </h1>
                <p className="text-lg py-2">SmartPhones selecionados a dedo para você</p>

            </article>

            <aside>

                <Img
                backgroundImage="url('/imagens/celulares.jpg')"
                >
                <a href="">
                        <button className=" mt-32 p-3 px-4 rounded-3xl border text-white
                        hover:bg-white hover:text-black
                        hover:scale-110 hover:ease-in-out hover:duration-300"

                        onClick={() => navigateTo('/about')}
                        >
                            Saiba Mais
                        </button>
                    </a>
                </Img>
                
            </aside>

        </Section>
    )
}

export default HeroSection