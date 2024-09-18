import Section from "./Section"

function HeroSection({ customclass }) {
    return(
        <Section customclass={` block md:flex h-[300px] pt-5 ${customclass}`}>

            <article className="p-[5%]">

                <h1 className="text-5xl pt-5">
                    A melhor qualidade pelo menor preço
                </h1>

            </article>

            <aside>

                <div className=" absolute top-10 right-0 md:static w-full h-[230px] sm:size-[560px] bg-opacity-75 bg-black flex justify-center 
             ">
                </div>
                
            </aside>

        </Section>
    )
}

export default HeroSection