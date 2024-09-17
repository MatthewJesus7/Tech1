import Section from "../sections/Section";
import Img from "./Img";

const HeroCard =({ customclass, title, titleColor, text, textColor, textButton, typeButton, img, customImg }) => {

    function navigateTo(url) {
        window.location.href = url;
    }

    return(

        <Section
        customclass={` flex flex-wrap lg:flex-nowrap h-[600px] ${customclass} `}>

            <article className={` relative z-10 pt-[8%] lg:pr-[8%] bg-transparent  h-2/5 ${titleColor}`}>

                <h1 className="text-4xl ">
                    {title}
                </h1>

                <p
                className={`text-lg mt-2.5 mb-3 ${textColor}`}>
                    {text}
                </p>

                <button
                className={`p-3 px-4 rounded-3xl border hover:ease-in-out hover:duration-300 ${typeButton}`}

                    onClick={() => navigateTo('/about')}
                    >
                        <p>
                            {textButton}
                        </p>
                    </button>
            </article>
            <aside className="size-full">
                <Img
                custom={``}
                customclass={customImg}
                backgroundImage={img}>
                </Img>
            </aside>

        </Section>
    )
}

export default HeroCard;